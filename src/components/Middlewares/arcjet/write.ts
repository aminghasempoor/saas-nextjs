import arcjet, { slidingWindow } from "@/lib/arcjet";
import { base } from "@/components/Middlewares/base";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";

const buildStandardAj = () =>
  arcjet.withRule(
    slidingWindow({
      mode: "LIVE",
      interval: "1m",
      max: 40,
    }),
  );

export const writeSecurityMiddleware = base
  .$context<{
    request: Request;
    user: KindeUser<Record<string, unknown>>;
  }>()
  .middleware(async ({ context, errors, next }) => {
    const decision = await buildStandardAj().protect(context.request, {
      userId: context.user.id,
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        throw errors.RATE_LIMITED({
          message: "Too many impactual changes.",
        });
      }
      throw errors.FORBIDDEN({
        message: "Request Blocked!!!",
      });
    }
    return next();
  });
