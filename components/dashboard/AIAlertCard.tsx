import Link from "next/link";

export default function AIAlertCard() {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <h3 className="text-lg font-bold text-red-800">התראת עוזר פדגוגי</h3>
        </div>
      </div>

      <p className="text-red-700 text-sm mb-2 ps-9">
        זוהתה ירידה בוויסות רגשי בקבוצת שילוב (כיתה ה&apos;).
        נדרש עדכון מערך הפעילות למפגש הקרוב.
      </p>

      <p className="text-red-500 text-xs mb-4 ps-9">
        המשך מגמה זו עלול להשפיע על מדדי אקלים בית ספרי.
      </p>

      <div className="ps-9">
        <Link
          href="/portal/ai"
          className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          צור מערך שיעור מותאם אישית
        </Link>
      </div>
    </div>
  );
}
