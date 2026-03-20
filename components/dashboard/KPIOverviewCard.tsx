import { groupKPIs } from "@/lib/mock-data";
import { SELScores } from "@/lib/types";

export default function KPIOverviewCard() {
  const kpiNames: (keyof SELScores)[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

  const averages = kpiNames.map((kpi) => {
    const beforeAvg =
      groupKPIs.reduce((sum, g) => sum + g.before[kpi], 0) / groupKPIs.length;
    const afterAvg =
      groupKPIs.reduce((sum, g) => sum + g.after[kpi], 0) / groupKPIs.length;
    const change = afterAvg - beforeAvg;
    return { name: kpi, before: beforeAvg, after: afterAvg, change };
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100">
      <h3 className="text-lg font-bold text-chocolate-800 mb-4">סקירת מדדי SEL</h3>
      <div className="grid grid-cols-3 gap-4">
        {averages.map((avg) => (
          <div key={avg.name} className="text-center p-4 rounded-xl bg-cream">
            <p className="text-sm text-chocolate-500 mb-2">{avg.name}</p>
            <p className="text-3xl font-bold text-chocolate-800">
              {avg.after.toFixed(1)}
            </p>
            <p className="text-sm mt-1 font-medium text-green-600">
              +{avg.change.toFixed(1)} ↑
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
