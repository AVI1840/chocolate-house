import { GroupKPI, SELScores } from "@/lib/types";

interface BeforeAfterComparisonProps {
  kpiData: GroupKPI;
}

const kpiLabels: Record<string, string> = {
  שייכות: "תחושת שייכות",
  "ויסות רגשי": "ויסות רגשי",
  "עבודת צוות": "עבודת צוות",
};

const getTrendLabel = (change: number): { label: string; color: string; bg: string } => {
  if (change > 0.5) return { label: "↑ מגמה חיובית", color: "text-green-700", bg: "bg-green-50 border-green-200" };
  if (change > 0) return { label: "↑ שיפור קל", color: "text-green-600", bg: "bg-green-50 border-green-200" };
  if (change === 0) return { label: "→ ללא שינוי", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" };
  return { label: "↓ דורש תשומת לב", color: "text-red-700", bg: "bg-red-50 border-red-200" };
};

export default function BeforeAfterComparison({ kpiData }: BeforeAfterComparisonProps) {
  const kpiNames: (keyof SELScores)[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

  return (
    <div>
      {/* RAMA badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-chocolate-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
          מדדים בהתאמה לסטנדרט ראמ״ה
        </div>
        <span className="text-chocolate-400 text-xs">| סולם 1–5 | מדידה לפני ואחרי התכנית</span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {kpiNames.map((name) => {
          const before = kpiData.before[name];
          const after = kpiData.after[name];
          const change = parseFloat((after - before).toFixed(1));
          const percentage = Math.round((change / before) * 100);
          const trend = getTrendLabel(change);
          const isDecline = change < 0;

          return (
            <div
              key={name}
              className={`bg-white rounded-2xl p-6 shadow-sm border text-center ${
                isDecline ? "border-red-300" : "border-chocolate-100"
              }`}
            >
              {/* Title */}
              <h3 className="font-bold text-chocolate-800 mb-1">{kpiLabels[name] ?? name}</h3>
              <p className="text-xs text-chocolate-400 mb-4">מדד ראמ״ה | סולם 1–5</p>

              {/* Before/After */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <div>
                  <p className="text-xs text-chocolate-400 mb-1">לפני</p>
                  <p className="text-3xl font-bold text-chocolate-300">{before}</p>
                </div>
                <div className={`text-2xl ${isDecline ? "text-red-400" : "text-green-500"}`}>
                  {isDecline ? "↓" : "→"}
                </div>
                <div>
                  <p className="text-xs text-chocolate-400 mb-1">אחרי</p>
                  <p className={`text-3xl font-bold ${isDecline ? "text-red-500" : "text-accent"}`}>
                    {after}
                  </p>
                </div>
              </div>

              {/* Delta badge */}
              <div
                className={`rounded-xl px-4 py-2 inline-block border mb-3 ${
                  isDecline
                    ? "bg-red-50 text-red-700 border-red-200"
                    : "bg-green-50 text-green-700 border-green-100"
                }`}
              >
                <span className="font-bold text-lg">
                  {isDecline ? "" : "+"}{change}
                </span>
                <span className="text-sm me-1">
                  {" "}({isDecline ? "" : "+"}{percentage}%)
                </span>
              </div>

              {/* Trend label */}
              <div className={`text-xs font-semibold px-3 py-1 rounded-full border inline-block ${trend.bg} ${trend.color}`}>
                {trend.label}
              </div>

              {/* Warning if declining */}
              {isDecline && (
                <p className="text-red-500 text-xs mt-3 font-medium">
                  ⚠️ נדרשת התייחסות — פנה לעוזר הפדגוגי
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
