import { ReactNode } from "react";
import { WorkspaceHeader } from "@/components/Dashboard/Channels/WorkspaceHeader";
import { CreateNewChannel } from "@/components/Dashboard/Channels/CreateNewChannel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import ChannelList from "@/components/Dashboard/Channels/ChannelList";
import WorkspaceMembersList from "@/components/Dashboard/Channels/WorkspaceMembersList";

export default function DashboardIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={
          "flex h-full w-80 flex-col bg-secondary border-r border-border"
        }
      >
        <div className={"flex items-center p-4 h-14 border border-border"}>
          <WorkspaceHeader />
        </div>
        <div className={"px-4 py-2"}>
          <CreateNewChannel />
        </div>
        <div className={"flex-1 overflow-y-auto px-4"}>
          <Collapsible defaultOpen>
            <CollapsibleTrigger
              className={
                "flex w-full items-center justify-between p-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-accent-foreground"
              }
            >
              Main
              <ChevronDown
                className={"size-4 transition-transform duration-200"}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ChannelList />
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className={"px-4 py-2 border border-border"}>
          <Collapsible defaultOpen>
            <CollapsibleTrigger
              className={
                "flex w-full items-center justify-between p-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-accent-foreground [$[data-state=open]>svg]:rotate-180"
              }
            >
              Members
              <ChevronUp
                className={"size-4 transition-transform duration-200"}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <WorkspaceMembersList />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
