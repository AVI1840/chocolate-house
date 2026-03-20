const protocols = [
  {
    id: "p1",
    title: "פרוטוקול ויסות חושי",
    badge: "ויסות רגשי",
    badgeColor: "bg-purple-100 text-purple-800",
    description:
      "מסגרת התערבות מובנית לתמיכה בתלמידים עם רגישות חושית מוגברת בתוך סביבת למידה קבוצתית.",
    steps: [
      "זיהוי טריגרים חושיים בסביבת הכיתה",
      "יישום טכניקות ויסות עצמי (נשימה, תנועה)",
      "שילוב כלים חושיים מותאמים אישית",
      "תיעוד ומעקב בפלטפורמה",
    ],
    author: "פותח על ידי מומחי SEL | מאושר קלינית",
    duration: "8–10 מפגשים",
    icon: "🧠",
  },
  {
    id: "p2",
    title: "מערך עבודת צוות מובנה",
    badge: "עבודת צוות",
    badgeColor: "bg-blue-100 text-blue-800",
    description:
      "תכנית פדגוגית להעמקת כישורי שיתוף פעולה, הקשבה ופתרון קונפליקטים בקבוצות שילוב.",
    steps: [
      "מיפוי דינמיקה קבוצתית ותפקידים",
      "פעילויות קבוצתיות מובנות (חקר, יצירה)",
      "עיבוד רגשי ושיח מודרך לאחר פעילות",
      "מדידת שיפור בסולם עבודת צוות (ראמ״ה)",
    ],
    author: "פותח על ידי מומחי SEL | מאושר מחלקת הכלה",
    duration: "6–8 מפגשים",
    icon: "🤝",
  },
  {
    id: "p3",
    title: "התערבות קבוצתית לשייכות",
    badge: "שייכות",
    badgeColor: "bg-green-100 text-green-800",
    description:
      "פרוטוקול להגברת תחושת שייכות ומניעת בידוד חברתי בקרב תלמידים בסיכון בכיתות שילוב.",
    steps: [
      "אבחון ראשוני של תחושת שייכות (שאלון ראמ״ה)",
      "מעגלי שיח ופעילויות קרבה קבוצתיות",
      "תרגול מיומנויות ביטוי רגשי וקבלת האחר",
      "מדידה חוזרת ודוח התקדמות",
    ],
    author: "פותח על ידי מומחי SEL | מבוסס פיילוט מבוקר",
    duration: "10–12 מפגשים",
    icon: "🫂",
  },
];

export default function ProtocolLibrary() {
  return (
    <div className="mt-10">
      {/* Section header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-chocolate-800">
            ספריית פרוטוקולים פדגוגיים מאושרים
          </h2>
          <p className="text-chocolate-500 text-sm mt-1">
            פרוטוקולים מובנים ומאושרים — ניתנים להפעלה ישירה בפלטפורמה
          </p>
        </div>
        <div className="bg-chocolate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full shrink-0">
          מאושר מחלקת SEL
        </div>
      </div>

      {/* Protocol cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {protocols.map((protocol) => (
          <div
            key={protocol.id}
            className="bg-white rounded-2xl border border-chocolate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Card header */}
            <div className="bg-chocolate-50 border-b border-chocolate-100 p-4 flex items-start gap-3">
              <span className="text-3xl">{protocol.icon}</span>
              <div>
                <h3 className="font-bold text-chocolate-800 text-base leading-tight">
                  {protocol.title}
                </h3>
                <span
                  className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${protocol.badgeColor}`}
                >
                  {protocol.badge}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-4">
              <p className="text-chocolate-600 text-sm mb-4">{protocol.description}</p>

              {/* Steps */}
              <div className="space-y-2 mb-4">
                {protocol.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-chocolate-400 font-bold text-xs mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-chocolate-700 text-xs">{step}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-chocolate-100 pt-3 flex items-center justify-between">
                <p className="text-chocolate-400 text-xs">{protocol.author}</p>
                <span className="bg-cream text-chocolate-600 text-xs font-medium px-2 py-0.5 rounded-lg">
                  {protocol.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
