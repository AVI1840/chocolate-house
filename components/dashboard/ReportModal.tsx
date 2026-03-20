"use client";

import { motion, AnimatePresence } from "framer-motion";
import { groupKPIs } from "@/lib/mock-data";
import { SELScores } from "@/lib/types";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const kpiNames: (keyof SELScores)[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

const gefenBaskets = [
  {
    name: "סל מענים פדגוגיים ורגשיים",
    code: "1.2",
    amount: "~15,000 ₪",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    name: "סל הכלה והשתלבות",
    code: "3.4",
    amount: "~18,000 ₪",
    color: "bg-green-50 border-green-200 text-green-800",
  },
  {
    name: "תקציב פיתוח מקצועי (הוני/CapEx)",
    code: "פ.מ.",
    amount: "~12,000 ₪",
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
];

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const averages = kpiNames.map((kpi) => {
    const beforeAvg =
      groupKPIs.reduce((sum, g) => sum + g.before[kpi], 0) / groupKPIs.length;
    const afterAvg =
      groupKPIs.reduce((sum, g) => sum + g.after[kpi], 0) / groupKPIs.length;
    const change = ((afterAvg - beforeAvg) / beforeAvg) * 100;
    return { name: kpi, before: beforeAvg.toFixed(1), after: afterAvg.toFixed(1), change: change.toFixed(0) };
  });

  const handlePrint = () => window.print();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-chocolate-900/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-l from-chocolate-900 to-chocolate-700 text-white px-8 py-6 rounded-t-3xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-chocolate-300 text-xs font-semibold tracking-widest uppercase mb-1">
                    מרחב יוצר — המעבדה לקקאו
                  </p>
                  <h2 className="text-2xl font-bold">דוח אקלים בית ספרי</h2>
                  <p className="text-chocolate-300 text-sm mt-1">
                    תקופת דיווח: תשפ״ו | 12 מפגשים | נתוני פיילוט
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white text-2xl leading-none transition-colors"
                  aria-label="סגור"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="px-8 py-7 space-y-6">

              {/* KPI Before / After */}
              <section>
                <h3 className="text-base font-bold text-chocolate-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-chocolate-100 flex items-center justify-center text-xs font-bold text-chocolate-700">1</span>
                  מדדי SEL — לפני ואחרי
                </h3>
                <div className="space-y-3">
                  {averages.map((avg) => {
                    const positive = parseFloat(avg.change) > 0;
                    return (
                      <div
                        key={avg.name}
                        className="flex items-center gap-4 bg-cream rounded-xl px-5 py-3"
                      >
                        <p className="w-32 text-sm font-semibold text-chocolate-700 shrink-0">
                          {avg.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-chocolate-500">
                          <span className="font-mono">{avg.before}</span>
                          <span className="text-chocolate-300">→</span>
                          <span className="font-mono font-bold text-chocolate-800">{avg.after}</span>
                        </div>
                        <span
                          className={`ms-auto text-sm font-bold px-2 py-0.5 rounded-full ${
                            positive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {positive ? "+" : ""}{avg.change}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Executive Summary */}
              <section>
                <h3 className="text-base font-bold text-chocolate-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-chocolate-100 flex items-center justify-center text-xs font-bold text-chocolate-700">2</span>
                  סיכום מנהלים
                </h3>
                <div className="bg-cream rounded-xl px-5 py-4 space-y-2.5">
                  {[
                    "תוכנית ״מרחב יוצר״ הושלמה בהצלחה — 12 מפגשי שוקולד התקיימו עם 3 קבוצות שילוב בתשפ״ו.",
                    "נמדדה עלייה מובהקת במדד השייכות ובמדד עבודת הצוות לעומת מדידת הבסיס.",
                    "צוות החינוך דיווח על שיפור ניכר בשיתוף פעולה חברתי-לימודי ובאקלים הכיתתי הכולל.",
                  ].map((line, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-accent mt-0.5 shrink-0">✔</span>
                      <p className="text-sm text-chocolate-700 leading-relaxed">{line}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gefen Basket Attribution */}
              <section>
                <h3 className="text-base font-bold text-chocolate-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-chocolate-100 flex items-center justify-center text-xs font-bold text-chocolate-700">3</span>
                  ייחוס תקציבי — סלי גפ״ן
                </h3>
                <div className="space-y-2">
                  {gefenBaskets.map((basket) => (
                    <div
                      key={basket.code}
                      className={`flex items-center justify-between border rounded-xl px-4 py-3 ${basket.color}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono opacity-60">{basket.code}</span>
                        <span className="text-sm font-medium">{basket.name}</span>
                      </div>
                      <span className="text-sm font-bold">{basket.amount}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between border border-chocolate-200 rounded-xl px-4 py-3 bg-chocolate-50 mt-2">
                    <span className="text-sm font-bold text-chocolate-800">סה״כ משוער לשנה</span>
                    <span className="text-sm font-bold text-chocolate-900">~45,000 ₪</span>
                  </div>
                </div>
                <p className="text-chocolate-400 text-xs mt-2">
                  * ניתן לאיחוד מלא דרך מנגנון גפ״ן בהלימה לחוזר מנכ״ל 0402
                </p>
              </section>

              {/* Footer Actions */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-chocolate-100">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-chocolate-800 hover:bg-chocolate-900 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  🖨️ הדפסה / ייצוא PDF
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 border border-chocolate-200 hover:bg-chocolate-50 text-chocolate-700 font-medium px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  סגור
                </button>
                <p className="w-full text-chocolate-400 text-xs mt-1">
                  * נתוני הדוח מבוססים על פיילוט ראשוני ומוצגים לצרכי הדגמה בלבד
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
