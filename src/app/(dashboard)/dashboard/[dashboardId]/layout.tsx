import {ReactNode} from "react";
import {WorkspaceHeader} from "@/components/Dashboard/Channels/WorkspaceHeader";
import {CreateNewChannel} from "@/components/Dashboard/Channels/CreateNewChannel";

export default function DashboardIdLayout({children} : {children: ReactNode}) {
    return (
        <>
            <div className={"flex h-full w-80 flex-col bg-secondary border-r border-border"}>
                <div className={"flex items-center p-4 h-14 border border-border"}>
                    <WorkspaceHeader />
                </div>
                <div className={"px-4 py-2"}>
                    <CreateNewChannel />
                </div>
            </div>
        </>
    )
}