import KPIOverviewCard from "@/components/dashboard/KPIOverviewCard";
import ActiveGroups from "@/components/dashboard/ActiveGroups";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import InventoryStatus from "@/components/dashboard/InventoryStatus";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">לוח בקרה</h1>

      <div className="space-y-6">
        <KPIOverviewCard />

        <div className="grid md:grid-cols-2 gap-6">
          <ActiveGroups />
          <UpcomingSessions />
        </div>

        <InventoryStatus />
      </div>
    </div>
  );
}
