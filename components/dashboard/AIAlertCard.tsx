import Link from "next/link";

export default function AIAlertCard() {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">⚠️</span>
        <div>
          <h3 className="text-lg font-bold text-red-800">התראת סוכן פדגוגי</h3>
          <p className="text-red-500 text-xs">זוהה שינוי מדד מובהק — נדרשת פעולה</p>
        </div>
      </div>

      {/* KPI change */}
      <div className="bg-white border border-red-200 rounded-xl p-4 mb-4 ms-9">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-red-800">ויסות רגשי — קבוצת שילוב (כיתה ה׳)</span>
          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">ירידה</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-chocolate-400">3.2</span>
          <span className="text-red-400 text-xl">→</span>
          <span className="text-2xl font-bold text-red-600">2.4</span>
          <span className="text-red-500 text-sm font-semibold">(-25%)</span>
        </div>
        <p className="text-red-600 text-xs mt-2">
          מדד ויסות רגשי ירד מ-3.2 ל-2.4 במהלך 3 המפגשים האחרונים
        </p>
      </div>

      {/* Implication */}
      <div className="ms-9 mb-4 space-y-1.5">
        <p className="text-red-700 text-sm font-medium">
          📋 <span className="font-bold">השלכה:</span> נדרש עדכון פעילות — המשך מגמה עלול להשפיע על מדדי אקלים בית ספרי
        </p>
        <p className="text-red-600 text-sm">
          🔁 <span className="font-bold">פעולה הבאה:</span> מעקב מחודש לאחר המפגש הבא + עדכון מערך הפעילות
        </p>
      </div>

      {/* CTA */}
      <div className="ps-9">
        <Link
          href="/portal/ai"
          className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          צור מערך שיעור מותאם ← עוזר AI פדגוגי
        </Link>
      </div>
    </div>
  );
}
