import {z} from "zod";
import {KindeOrganization, KindeUser} from "@kinde-oss/kinde-auth-nextjs";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {base} from "@/components/Middlewares/base";
import {requiredAuthMiddleware} from "@/components/Middlewares/auth";
import {requiredWorkspaceMiddleware} from "@/components/Middlewares/workspace";

export const listWorkSpace = base
    .use(requiredAuthMiddleware)
    .use(requiredWorkspaceMiddleware)
    .route({
    method: "GET",
    path: "/dashboard",
    summary: "list all workspaces",
    tags: ["workspace"]
}).input(z.void()).output(z.object({
    workspace : z.array(
        z.object({
            id : z.string(),
            name : z.string(),
            avatar : z.string(),
        })
    ),
    user : z.custom<KindeUser<Record<string, unknown>>>(),
    currentWorkspace : z.custom<KindeOrganization<unknown>>()
}))
    .handler(async ({context, errors}) => {
        const {getUserOrganizations} = getKindeServerSession()
        const organizations = await getUserOrganizations()
        if(!organizations){
            throw errors.FORBIDDEN()
        }
        return {
        workspace : organizations?.orgs.map((org) => ({
            id : org.code,
            name : org.name ?? "My Workspace",
            avatar : org.name?.charAt(0) ?? ""
        })),
            user : context.user,
            currentWorkspace : context.workspace
        }
})