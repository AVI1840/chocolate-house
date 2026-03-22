"use client";

import Image from "next/image";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────── */

const problems = [
  {
    icon: "🔥",
    title: "אקלים כיתתי מתדרדר",
    desc: "עלייה חדה באירועי בריונות, נשירה שקטה ומתח בין-אישי — הצוות מוצף, הכלים הישנים לא מספיקים.",
  },
  {
    icon: "🧩",
    title: "ריבוי ספקים, אפס שפה משותפת",
    desc: "כל ספק מביא כלים אחרים, שיטה אחרת, מדידה אחרת. בסוף — אין תמונת מצב אחת שניתן לסמוך עליה.",
  },
  {
    icon: "📊",
    title: "ראמ\"ה דורשת נתונים — אין כלי",
    desc: "משרד החינוך דורש ראיות לאקלים בית ספרי. רוב בתי הספר עובדים עם 'תחושה' — ולא עם מדידה מובנית.",
  },
  {
    icon: "💰",
    title: "תקציב גפ\"ן לא ממוצה",
    desc: "בתי ספר מפסידים מימון שכבר מאושר כי אין הצעה מסודרת שמאחדת מספר סלים תחת מענה אחד.",
  },
];

const needs = [
  "תכנית SEL שנתית מובנית — עם רצף פדגוגי ברור, לא מפגשים מפוצלים",
  "מדידה מוסדית בהלימה מלאה לאמות המידה של ראמ\"ה",
  "ממשק ניהול שנותן לך תמונה בזמן אמת — בלי להיות מנהל IT",
  "כלים שמשאירים ידע בתוך הצוות — ולא יוצאים עם הספק בסוף השנה",
];

const solutionSteps = [
  {
    num: "01",
    title: "תכנית שנתית מובנית",
    desc: "12 מפגשים הבנויים לרצף פדגוגי — כל שלב בונה על הקודם. לא 'הרצאה', אלא התערבות חינוכית מוכחת.",
  },
  {
    num: "02",
    title: "Train-the-Trainer",
    desc: "מודל הסמכה שמכשיר את הצוות הפנימי שלך. הידע נשאר בבית הספר גם לאחר שנגמר ההסכם.",
  },
  {
    num: "03",
    title: "AI פדגוגי בזמן אמת",
    desc: "המערכת מזהה דפוסים מוקדמים, מדגישה תלמידים בסיכון, ומציעה התערבות — לפני שהבעיה מתפוצצת.",
  },
  {
    num: "04",
    title: "מדידה מבוססת ראמ\"ה",
    desc: "דוחות אוטומטיים לפי אמות המידה הלאומיות. מוכן להגשה — גם לפיקוח, גם להורים, גם למשרד.",
  },
];

const valueGroups = [
  {
    icon: "🏫",
    who: "לבית הספר",
    color: "bg-amber-50 border-amber-200",
    items: [
      "תמונת מצב שלמה ועדכנית על האקלים הבית ספרי",
      "ציות מלא לחוזר מנכ\"ל 0402",
      "פחות אירועי משמעת — יותר זמן הוראה אפקטיבי",
    ],
  },
  {
    icon: "👩‍🏫",
    who: "לצוות החינוכי",
    color: "bg-blue-50 border-blue-200",
    items: [
      "כלים פרקטיים שעובדים בשטח — לא בתיאוריה",
      "הסמכה רשמית כ-Train-the-Trainer",
      "תמיכה קלינית ופדגוגית לאורך כל השנה",
    ],
  },
  {
    icon: "🧒",
    who: "לתלמידים",
    color: "bg-green-50 border-green-200",
    items: [
      "חיזוק ויסות רגשי, שיתוף פעולה ועבודת צוות",
      "תחושת שייכות ובטיחות גבוהה יותר",
      "השתתפות בלמידה משמעותית ומחוברת",
    ],
  },
];

const outcomes = [
  { metric: "+34%", label: "שיפור במדדי שייכות", sub: "על בסיס פיילוט מבוקר" },
  { metric: "↓42%", label: "ירידה באירועי משמעת", sub: "נתונים מבוססי פיילוט" },
  { metric: "8", label: "מפגשים עד מדידה ראשונה", sub: "כ-חודשיים מתחילת התכנית" },
  { metric: "₪0", label: "עלות ישירה לבית הספר", sub: "ממומן במלואו דרך גפ\"ן" },
];

const gefenBaskets = [
  "סל מענים פדגוגיים ורגשיים",
  "סל הכלה והשתלבות",
  "סל מנהיגות חינוכית",
];

/* ─── Component ─────────────────────────────────────────── */

export default function PrincipalPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans" lang="he">

      {/* ── Print styles ── */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { font-size: 13px; }
          @page { margin: 1.5cm 1.8cm; size: A4; }
        }
      `}</style>

      {/* ── Top bar (hidden in print) ── */}
      <div className="no-print bg-amber-900 text-white py-2 px-6 flex items-center justify-between text-sm">
        <Link href="/" className="hover:underline text-amber-200">← חזרה לאתר</Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-white text-amber-900 font-bold px-4 py-1.5 rounded-lg hover:bg-amber-50 transition-colors text-sm"
        >
          <span>⬇</span> הורד כ-PDF
        </button>
      </div>

      {/* ═══════════════════════════════════════════════
          HEADER — Brand + Title
      ════════════════════════════════════════════════ */}
      <header className="bg-gradient-to-l from-amber-950 to-amber-800 text-white px-8 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo row */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-14 h-14 bg-white rounded-2xl overflow-hidden p-1.5 shrink-0 shadow-lg">
              <Image src="/images/logo.png" alt="מרחב יוצר" fill className="object-contain" />
            </div>
            <div>
              <p className="font-extrabold text-xl leading-none">מרחב יוצר — המעבדה לקקאו</p>
              <p className="text-amber-300 text-sm mt-0.5">פלטפורמת הפעלה חינוכית | SEL | גפ״ן</p>
            </div>
            <div className="mr-auto no-print">
              <span className="bg-amber-700/50 border border-amber-500/40 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                מסמך למנהלי בתי ספר
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight mb-3">
            כיצד בית הספר שלך יכול לשפר אקלים כיתתי,<br />
            <span className="text-amber-300">לצמצם אירועי משמעת</span> — ובלי עלות ישירה?
          </h1>
          <p className="text-amber-200 text-lg mt-2 max-w-2xl">
            תכנית SEL מוסדית מבוססת נתונים ו-AI, מאושרת בהלימה לחוזר מנכ״ל 0402, ממומנת במלואה דרך גפ״ן.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["חוזר מנכ\"ל 0402 ✓", "מדידת ראמ\"ה ✓", "ממומן גפ\"ן ✓", "AI פדגוגי ✓"].map(b => (
              <span key={b} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-10 space-y-14">

        {/* ═══════════════════════════════════════════════
            1. הבעיה
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-red-500 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">הבעיה</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="border border-red-100 bg-red-50 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-amber-950 text-base mb-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            2. הצורך
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">הצורך</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-amber-900 font-semibold text-base mb-5">
              בתי הספר לא צריכים עוד תכנית — הם צריכים <strong>תשתית מוסדית</strong>:
            </p>
            <div className="space-y-3">
              {needs.map((n) => (
                <div key={n} className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-lg mt-0.5 shrink-0">◆</span>
                  <p className="text-amber-950 font-medium text-sm">{n}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            3. הפתרון
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-600 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">הפתרון — מרחב יוצר</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutionSteps.map((s) => (
              <div key={s.num} className="border border-amber-200 bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-extrabold text-amber-200 leading-none">{s.num}</span>
                  <div>
                    <h3 className="font-bold text-amber-950 text-base mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gefen funding note */}
          <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 flex items-start gap-3">
            <span className="text-green-600 text-xl mt-0.5">🟢</span>
            <div>
              <p className="font-bold text-green-900 text-sm">ממומן במלואו דרך שלושה סלי גפ״ן במקביל:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {gefenBaskets.map(b => (
                  <span key={b} className="bg-green-100 border border-green-300 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{b}</span>
                ))}
              </div>
              <p className="text-green-700 text-xs mt-2 font-medium">עלות ישירה לבית הספר: <strong>₪0</strong></p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            4. הערך — לכולם
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">הערך</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {valueGroups.map((v) => (
              <div key={v.who} className={`border rounded-2xl p-5 ${v.color}`}>
                <div className="text-2xl mb-2">{v.icon}</div>
                <h3 className="font-extrabold text-amber-950 text-base mb-3">{v.who}</h3>
                <ul className="space-y-2">
                  {v.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            5. ההזדמנות
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">ההזדמנות</h2>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-purple-600 text-2xl shrink-0">⏰</span>
              <div>
                <h3 className="font-bold text-purple-950 text-base mb-1">חלון הזמן פתוח — לא לנצח</h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                  תקציבי גפ״ן מוקצים מדי שנה ולא מועברים. בתי ספר שמגישים בקשה מוקדמת מבטיחים לעצמם עדיפות בהקצאה ותחילת תכנית בתחילת שנת הלימודים.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-purple-600 text-2xl shrink-0">📋</span>
              <div>
                <h3 className="font-bold text-purple-950 text-base mb-1">חוזר מנכ״ל 0402 — כבר מחייב</h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                  המדיניות כבר קיימת. בתי ספר שלא ייישמו תכנית SEL מובנית יתמודדו עם פערי ציות בדוחות הפיקוח. מרחב יוצר מייצר תיעוד מלא בהלימה.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-purple-600 text-2xl shrink-0">🏆</span>
              <div>
                <h3 className="font-bold text-purple-950 text-base mb-1">קדמן — בנה יתרון תחרותי</h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                  בתי הספר שמאמצים תכנית מבוססת נתונים כבר השנה יהיו בעמדה חזקה בשנה הבאה — עם נתוני אורך, תשתית מוכנה ומוניטין כמוסד מוביל באקלים חינוכי.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            6. האימפקט
        ════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl font-extrabold text-amber-950">האימפקט — נתונים מבוססי פיילוט</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-amber-950 text-white rounded-2xl p-5 text-center">
                <p className="text-3xl font-extrabold text-amber-300 mb-1">{o.metric}</p>
                <p className="text-sm font-bold leading-tight mb-1">{o.label}</p>
                <p className="text-amber-400 text-xs">{o.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center">
            * הנתונים מבוססים על פיילוט ראשוני. תוצאות עשויות להשתנות בהתאם למאפייני בית הספר.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════ */}
        <section className="no-print">
          <div className="bg-gradient-to-l from-amber-950 to-amber-800 text-white rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-2">מוכנים לדבר?</h2>
            <p className="text-amber-200 text-base mb-6 max-w-xl mx-auto">
              נשמח לתאם שיחה קצרה, להבין את הצרכים הספציפיים של בית הספר שלך — ולהכין הצעת מחיר מותאמת אישית, ללא עלות.
            </p>
            <Link
              href="/?quote=1#pricing"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold px-10 py-4 rounded-2xl text-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              קבל הצעת מחיר מותאמת — ללא עלות
            </Link>
            <p className="text-amber-400 text-xs mt-4">
              המידע ישמש לצורך הכנת הצעה בלבד | בהלימה לחוזר מנכ״ל 0402 ולמדיניות גפ״ן
            </p>
          </div>
        </section>

        {/* Print-only footer */}
        <div className="hidden print:block border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            מרחב יוצר — המעבדה לקקאו | chocolate-house.vercel.app/principal | © 2026
          </p>
          <p className="text-gray-400 text-xs mt-1">
            הנתונים מבוססים על פיילוט ראשוני ואינם מייצגים היקף פעילות לאומי
          </p>
        </div>

      </main>
    </div>
  );
}
