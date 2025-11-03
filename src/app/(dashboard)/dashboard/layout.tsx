import DashboardList from "@/app/(dashboard)/dashboard/_component/DashboardList";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={"flex w-full h-screen"}>
            <div className={"flex h-full flex-col items-center bg-secondary py-3 px-2 border-r border-border"}>
                <DashboardList />
            </div>
        </div>
    )
}