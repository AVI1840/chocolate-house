"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  { label: "תכנית שנתית מובנית", detail: "12 מפגשים מותאמים לרצף פדגוגי" },
  { label: "הכשרת צוות מוסדית", detail: "מודל Train-the-Trainer עם הסמכה" },
  { label: "מדידה מבוססת ראמ״ה", detail: "מדדי אקלים בית ספרי מאושרים לאומית" },
  { label: "ליווי פדגוגי שוטף", detail: "מנחה מקצועי לאורך כל שנת הלימודים" },
];

const gefenBaskets = [
  "סל מענים פדגוגיים ורגשיים",
  "סל הכלה והשתלבות",
  "סל מנהיגות חינוכית",
  "כולל הקמת תשתיות פיזיות (CapEx)",
];

const included = [
  "מערכת ניהול מלאה — ללא הגבלת משתמשים לצוות",
  "מדידה מבוססת ראמ״ה — דוחות לפי אמות מידה לאומיות",
  "AI פדגוגי — התערבות מבוססת נתונים בזמן אמת",
  "ליווי מקצועי — תמיכה קלינית ופדגוגית שוטפת",
];

const outcomes = [
  "שיפור מדדי שייכות ואקלים — על בסיס פיילוט מבוקר",
  "ירידה מוכחת באירועי משמעת",
  "חיזוק ויסות רגשי ועבודת צוות",
];

export default function ProductCard() {
  return (
    <section className="py-20 px-6 bg-chocolate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          {/* Header — Site License */}
          <div className="bg-gradient-to-l from-chocolate-900 to-chocolate-700 text-white p-8 text-center">
            <p className="text-chocolate-300 text-xs font-semibold tracking-widest uppercase mb-2">
              רישיון מוסדי מורחב — Site License
            </p>
            <h2 className="text-3xl font-bold mb-2">
              תשתית מוסדית לניהול SEL והכלה
            </h2>
            <p className="text-chocolate-200 text-base mb-5">
              מבוססת נתונים ו-AI | בהלימה לחוזר מנכ״ל 0402
            </p>
            <div className="mt-2 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 inline-block">
              <p className="text-chocolate-200 text-sm font-semibold mb-1">מחיר מותאם לפי גודל המוסד</p>
              <p className="text-2xl font-bold text-white">הצעת מחיר אישית — ללא עלות</p>
              <p className="text-chocolate-300 text-xs mt-1">ממומן דרך גפ״ן | ללא עלות ישירה לבית הספר</p>
            </div>
            <div className="mt-4 bg-chocolate-800/60 rounded-xl px-5 py-3 inline-block">
              <p className="text-orange-300 text-sm font-semibold">
                מאפשר איחוד תקציבי גפ״ן קיימים למענה אחד משולב
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">

            {/* Institutional framing banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 mb-8 flex items-center gap-3">
              <span className="text-blue-600 text-xl">🏛️</span>
              <p className="text-blue-800 text-sm font-medium">
                פתרון מוסדי כולל במקום ריבוי ספקים נקודתיים —{" "}
                <span className="font-bold">מצמצם עומס על צוותים ומפחית אירועי משמעת</span>
              </p>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-cream"
                >
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h3 className="font-bold text-chocolate-800 text-lg">
                      {feature.label}
                    </h3>
                    <p className="text-chocolate-500">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-chocolate-100 my-8" />

            {/* Included section */}
            <div className="mb-8">
              <h3 className="font-bold text-chocolate-800 mb-4 text-base">
                הרישיון כולל:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5 shrink-0">✔</span>
                    <span className="text-chocolate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-chocolate-100 my-8" />

            {/* Gefen + Outcomes */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-chocolate-800 mb-3 text-sm">
                  פריסה רב-שנתית — 3 סלי גפ״ן במקביל:
                </h3>
                <div className="space-y-2">
                  {gefenBaskets.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span className="text-chocolate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-chocolate-800 mb-3 text-sm">
                  תוצאות מדידות — נתונים מבוססי פיילוט מבוקר:
                </h3>
                <div className="space-y-2">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span className="text-chocolate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-chocolate-100 my-8" />

            {/* Badges row */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span className="text-chocolate-700 font-semibold text-sm">
                  מדידה ראשונה לאחר 8 מפגשים (~חודשיים)
                </span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-1.5 text-xs text-green-800 font-semibold">
                בהלימה לחוזר מנכ״ל 0402
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-1.5 text-xs text-orange-800 font-semibold">
                נתונים מבוססי פיילוט מבוקר
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/portal/dashboard"
                className="inline-block bg-accent hover:bg-accent-light text-white text-lg font-bold px-12 py-4 rounded-2xl shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                התחל הטמעה מוסדית
              </Link>
              <p className="text-chocolate-400 text-xs mt-3">
                מותאם לאישור במסגרת מערכת גפ״ן | ניתן להגיש עם מסמכי הפרויקט
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
