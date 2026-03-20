"use client";

import { useState } from "react";
import { groups, groupKPIs } from "@/lib/mock-data";
import KPIChart from "@/components/kpi/KPIChart";
import BeforeAfterComparison from "@/components/kpi/BeforeAfterComparison";

export default function KPIPage() {
  const [selectedGroup, setSelectedGroup] = useState("g1");

  const currentKPI = groupKPIs.find((k) => k.group_id === selectedGroup);
  const currentGroup = groups.find((g) => g.id === selectedGroup);

  return (
    <div>
      <h1 className="text-3xl font-bold text-chocolate-800 mb-2">מדדי SEL</h1>
      <p className="text-chocolate-500 mb-8">
        מעקב אחר התקדמות במדדי למידה רגשית-חברתית (ראמ״ה)
      </p>

      {/* Group selector */}
      <div className="mb-8">
        <div className="flex gap-3">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                selectedGroup === group.id
                  ? "bg-chocolate-800 text-white"
                  : "bg-white text-chocolate-600 border border-chocolate-200 hover:bg-chocolate-50"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
      </div>

      {currentKPI && currentGroup && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
            <h2 className="text-xl font-bold text-chocolate-800 mb-6">
              השוואת לפני/אחרי - {currentGroup.name}
            </h2>
            <KPIChart kpiData={currentKPI} />
          </div>

          <BeforeAfterComparison kpiData={currentKPI} />
        </div>
      )}
    </div>
  );
}
