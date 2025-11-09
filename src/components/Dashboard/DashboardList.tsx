"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useSuspenseQuery} from "@tanstack/react-query";
import {orpc} from "@/lib/orpc";


export default function DashboardList() {
    const {data: {workspace, currentWorkspace}} = useSuspenseQuery(orpc.workspace.list.queryOptions())
    return (
        <TooltipProvider>
            <div className="flex flex-col gap-2">
                {workspace.map((organization) => {
                    const isActive = currentWorkspace.orgCode === organization.id;
                    return (
                        <Tooltip key={organization.id}>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className={cn(
                                        "size-12 transition-all duration-200",
                                        isActive ? "rounded-lg" : "rounded-xl"
                                    )}
                                >
                                <span className="text-xs font-semibold">
                                  {organization.avatar}
                                </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side={"right"}>{organization.name} {isActive && "(Current)"}{"  "}</TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </TooltipProvider>
    );
}
