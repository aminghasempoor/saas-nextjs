import {z} from "zod";

export function transformChannelName(name: string) {
    return name.toLowerCase()
        .replace(/\s + /g, '-')
        .replace(/[^a-z0-9]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, "");
}

export const channelNameSchema = z.object({
    name: z.string()
        .min(2, "At least 2 characters long")
        .max(50, "At Most 50 characters long")
        .transform((name, ctx) => {
            const transformed = transformChannelName(name)
            if (transformed.length < 2) {
                ctx.addIssue({
                    code : "custom",
                    message : "Channel name must contain 2 characters"
                })
                return z.NEVER
            }
            return transformed
        })
    ,
})