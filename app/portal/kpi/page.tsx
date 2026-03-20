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
      <p className="text-chocolate-500 mb-4">
        מעקב אחר התקדמות במדדי למידה רגשית-חברתית
      </p>

      {/* RAMA compliance banner */}
      <div className="bg-chocolate-800 text-white rounded-xl px-5 py-3 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-orange-300 text-lg">📊</span>
          <div>
            <p className="text-sm font-bold">מדדים בהתאמה לסטנדרט ראמ״ה</p>
            <p className="text-chocolate-300 text-xs">שייכות · ויסות רגשי · עבודת צוות | סולם 1–5 | מדידה לפני ואחרי תכנית SEL</p>
          </div>
        </div>
        <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0">
          בהלימה לחוזר מנכ״ל 0402
        </div>
      </div>

      {/* Group selector */}
      <div className="mb-8">
        <div className="flex gap-3 flex-wrap">
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-chocolate-800">
                השוואת לפני/אחרי — {currentGroup.name}
              </h2>
              <span className="text-xs text-chocolate-400 bg-chocolate-50 border border-chocolate-200 px-3 py-1 rounded-full">
                נתונים מבוססי פיילוט מבוקר
              </span>
            </div>
            <KPIChart kpiData={currentKPI} />
          </div>

          <BeforeAfterComparison kpiData={currentKPI} />
        </div>
      )}
    </div>
  );
}
