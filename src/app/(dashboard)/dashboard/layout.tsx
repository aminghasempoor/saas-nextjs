import DashboardList from "@/components/Dashboard/DashboardList";
import CreateWorkSpace from "@/components/Dashboard/CreateWorkSpace";
import UserNav from "@/components/Dashboard/UserNav";
import { ReactNode } from "react";
import { orpc } from "@/lib/orpc";
import { getQueryClient, HydrateClient } from "@/lib/query/hydration";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(orpc.workspace.list.queryOptions());
  return (
    <div className={"flex w-full h-screen"}>
      <div
        className={
          "flex h-full w-16 flex-col items-center justify-between bg-secondary py-3 px-2 border-r border-border"
        }
      >
        <div>
          <HydrateClient client={queryClient}>
            <DashboardList />
          </HydrateClient>
          <div className={"mt-4"}>
            <CreateWorkSpace />
          </div>
        </div>
        <div className={"mt-auto"}>
          <HydrateClient client={queryClient}>
            <UserNav />
          </HydrateClient>
        </div>
      </div>
      {children}
    </div>
  );
}
