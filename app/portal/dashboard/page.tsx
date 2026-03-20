"use client";

import { useState } from "react";
import AIAlertCard from "@/components/dashboard/AIAlertCard";
import KPIOverviewCard from "@/components/dashboard/KPIOverviewCard";
import ActiveGroups from "@/components/dashboard/ActiveGroups";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import InventoryStatus from "@/components/dashboard/InventoryStatus";
import ReportModal from "@/components/dashboard/ReportModal";

export default function DashboardPage() {
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-chocolate-800">לוח בקרה</h1>
        <button
          onClick={() => setReportOpen(true)}
          className="flex items-center gap-2 bg-chocolate-800 hover:bg-chocolate-900 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all hover:-translate-y-0.5"
        >
          📊 הפקת דוח מסכם
        </button>
      </div>

      <div className="space-y-6">
        <AIAlertCard />
        <KPIOverviewCard />

        <div className="grid md:grid-cols-2 gap-6">
          <ActiveGroups />
          <UpcomingSessions />
        </div>

        <InventoryStatus />
      </div>

      <ReportModal isOpen={reportOpen} onClose={() => setReportOpen(false)} />
    </div>
  );
}
