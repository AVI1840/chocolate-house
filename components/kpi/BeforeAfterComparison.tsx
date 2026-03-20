import { GroupKPI, SELScores } from "@/lib/types";

interface BeforeAfterComparisonProps {
  kpiData: GroupKPI;
}

export default function BeforeAfterComparison({ kpiData }: BeforeAfterComparisonProps) {
  const kpiNames: (keyof SELScores)[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {kpiNames.map((name) => {
        const before = kpiData.before[name];
        const after = kpiData.after[name];
        const change = after - before;
        const percentage = Math.round((change / before) * 100);

        return (
          <div
            key={name}
            className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100 text-center"
          >
            <h3 className="font-bold text-chocolate-800 mb-4">{name}</h3>

            <div className="flex items-center justify-center gap-6 mb-4">
              <div>
                <p className="text-sm text-chocolate-400 mb-1">לפני</p>
                <p className="text-3xl font-bold text-chocolate-300">{before}</p>
              </div>
              <div className="text-2xl text-green-500">→</div>
              <div>
                <p className="text-sm text-chocolate-400 mb-1">אחרי</p>
                <p className="text-3xl font-bold text-accent">{after}</p>
              </div>
            </div>

            <div className="bg-green-50 text-green-700 rounded-xl px-4 py-2 inline-block">
              <span className="font-bold text-lg">+{change}</span>
              <span className="text-sm me-1"> ({percentage}% שיפור)</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
