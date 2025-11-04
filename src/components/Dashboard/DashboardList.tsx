import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const organizations = [
  {
    id: 1,
    name: "Team1",
    avatar: "T1",
    color: "bg-blue-500 hover:bg-blue-700 text-white",
  },
  {
    id: 2,
    name: "Team2",
    avatar: "T2",
    color: "bg-emerald-500 hover:bg-emerald-700 text-white",
  },
  {
    id: 3,
    name: "Team3",
    avatar: "T3",
    color: "bg-purple-500 hover:bg-purple-700 text-white",
  },
  {
    id: 4,
    name: "Team4",
    avatar: "T4",
    color: "bg-amber-500 hover:bg-amber-700 text-white",
  },
];

export default function DashboardList() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2">
        {organizations.map((organization) => (
          <Tooltip key={organization.id}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className={cn(
                  "size-12 transition-all duration-200",
                  organization.color,
                )}
              >
                <span className="text-xs font-semibold">
                  {organization.avatar}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side={"right"}>{organization.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
