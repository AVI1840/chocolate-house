const protocols = [
  {
    id: "p1",
    title: "פרוטוקול ויסות חושי",
    subtitle: "SEL Level 2 — התערבות מובנית",
    description:
      "מסגרת פדגוגית-טיפולית לוויסות חושי בסביבת הכלה. כולל 6 תחנות חוויתיות עם חומרי קקאו, מדדי תגובה ועקרונות ריפוי בעיסוק.",
    tag: "ויסות רגשי",
    tagColor: "bg-purple-100 text-purple-700",
    sessions: 4,
    suitable: "כיתות ד׳–ו׳, חינוך מיוחד",
    author: "פותח ע״י מומחי SEL | מאושר ע״י ראמ״ה",
    icon: "🧠",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
  },
  {
    id: "p2",
    title: "מערך עבודת צוות מובנה",
    subtitle: "SEL Level 1 — תכנית מלאה",
    description:
      "תכנית 8 מפגשים לפיתוח מיומנויות שיתוף פעולה דרך יצירה משותפת. מבוססת על מחקר Bandura לחוסן קבוצתי.",
    tag: "עבודת צוות",
    tagColor: "bg-blue-100 text-blue-700",
    sessions: 8,
    suitable: "כיתות ב׳–ח׳, כלל המסגרות",
    author: "פותח ע״י מומחי SEL | מאושר ע״י ראמ״ה",
    icon: "🤝",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
  },
  {
    id: "p3",
    title: "התערבות קבוצתית לשייכות",
    subtitle: "SEL Level 3 — פרוטוקול מתקדם",
    description:
      "מודל התערבות ייחודי לחיזוק תחושת שייכות בקבוצות שילוב. כולל מפגשי הורים, מדידה מקדימה ו-Human Handoff לפסיכולוג.",
    tag: "שייכות והכלה",
    tagColor: "bg-green-100 text-green-700",
    sessions: 6,
    suitable: "כיתות שילוב, חינוך מיוחד",
    author: "פותח ע״י מומחי SEL | מאושר ע״י ראמ״ה",
    icon: "❤️",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
  },
];

export default function ProtocolLibrary() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-chocolate-800">
            ספריית פרוטוקולים פדגוגיים מאושרים
          </h2>
          <p className="text-chocolate-400 text-sm mt-0.5">
            פותחו ע״י מומחי SEL | בהלימה לחוזר מנכ״ל 0402 | מדידה מובנית בכל מפגש
          </p>
        </div>
        <div className="bg-chocolate-100 text-chocolate-600 text-xs font-semibold px-3 py-1 rounded-full">
          {protocols.length} פרוטוקולים זמינים
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {protocols.map((p) => (
          <div
            key={p.id}
            className={`bg-white rounded-2xl border-2 ${p.borderColor} shadow-sm overflow-hidden hover:shadow-md transition-shadow`}
          >
            <div className={`${p.bgColor} px-5 pt-5 pb-4`}>
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{p.icon}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>
              <h3 className="font-bold text-chocolate-800 text-base leading-tight">{p.title}</h3>
              <p className="text-chocolate-500 text-xs mt-1">{p.subtitle}</p>
            </div>

            <div className="px-5 py-4">
              <p className="text-chocolate-600 text-sm leading-relaxed mb-4">{p.description}</p>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-chocolate-500">
                  <span>📅</span><span>{p.sessions} מפגשים</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-chocolate-500">
                  <span>🏫</span><span>{p.suitable}</span>
                </div>
              </div>

              <div className="bg-chocolate-50 border border-chocolate-100 rounded-lg px-3 py-2 mb-4">
                <p className="text-chocolate-500 text-xs">{p.author}</p>
              </div>

              <button className="w-full bg-chocolate-800 hover:bg-chocolate-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                הפעל פרוטוקול זה
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 bg-chocolate-50 border border-chocolate-100 rounded-xl px-5 py-3">
        <span className="text-chocolate-400">📋</span>
        <p className="text-chocolate-500 text-xs">
          כל הפרוטוקולים עברו התאמה לסטנדרט ראמ״ה | מדידה אוטומטית לאחר כל מפגש | פלט דוח מובנה לגפ״ן
        </p>
      </div>
    </div>
  );
}
