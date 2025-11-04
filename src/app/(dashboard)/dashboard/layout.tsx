import DashboardList from "@/components/Dashboard/DashboardList";
import CreateWorkSpace from "@/components/Dashboard/CreateWorkSpace";
import UserNav from "@/components/Dashboard/UserNav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"flex w-full h-screen"}>
      <div
        className={
          "flex h-full w-16 flex-col items-center justify-between bg-secondary py-3 px-2 border-r border-border"
        }
      >
        <div>
          <DashboardList />
          <div className={"mt-4"}>
            <CreateWorkSpace />
          </div>
        </div>
        <div className={"mt-auto"}>
          <UserNav />
        </div>
      </div>
      {children}
    </div>
  );
}
