"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🔍",
    title: "זיהוי מוקדם",
    text: "המערכת מסייעת בזיהוי מוקדם של קשיים רגשיים — מדדי ויסות, שייכות וחוסן — ומתריעה לצוות לפני שהקושי מחריף.",
  },
  {
    icon: "🗓️",
    title: "תכנון מותאם",
    text: "העוזר מנתח את נתוני הקבוצה ומציע מערכי שיעור מותאמים לשלב ולצרכים המזוהים — על בסיס הפרוטוקולים המאושרים.",
  },
  {
    icon: "📊",
    title: "מעקב ומדידה שוטפת",
    text: "הפלטפורמה עוקבת אחר מדדי SEL לאורך זמן ומייצרת תמונה ברורה של מגמות — לצוות המורים ולהנהלה.",
  },
  {
    icon: "🧑‍⚕️",
    title: "הסלמה מקצועית",
    text: "במקרים מורכבים — מעוברים לאיש מקצוע. ה-AI תומך בצוות, אינו מחליף פסיכולוג או יועץ. ההחלטה תמיד אנושית.",
  },
];

export default function AICompanion() {
  return (
    <section className="py-20 px-6 bg-chocolate-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-chocolate-200 text-chocolate-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            כלי עזר חכם לצוות
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-chocolate-900 mb-3">
            מלווה AI ליישום והטמעה
          </h2>
          <p className="text-chocolate-500 text-lg max-w-2xl mx-auto">
            לא בינה מלאכותית שמחליפה את המורה — כלי תכנון, מעקב והתאמה שעובד
            בשירות הצוות הפדגוגי.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-chocolate-100 flex items-start gap-4"
            >
              <span className="text-3xl shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-bold text-chocolate-800 text-base mb-1">{f.title}</h3>
                <p className="text-chocolate-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-chocolate-800 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-6"
        >
          <div className="text-5xl shrink-0">🤝</div>
          <div>
            <h3 className="text-xl font-bold mb-2">העיקרון המנחה: AI כשותף, לא כמחליף</h3>
            <p className="text-chocolate-200 leading-relaxed text-base">
              העוזר הפדגוגי מסייע לצוות לקבל החלטות טובות יותר — אך ההחלטה תמיד שלהם.
              כל התראה ניתנת לביטול ידני. כל המלצה היא הצעה, לא הוראה.
              במקרים של מצוקה קלינית — מועבר לאיש מקצוע.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {["פותח עם פסיכולוגים חינוכיים", "בהלימה לחוזר מנכ״ל 0402", "ללא איסוף מידע אישי על תלמידים"].map((t) => (
                <span key={t} className="bg-white/10 border border-white/20 text-chocolate-200 text-xs px-3 py-1.5 rounded-full">
                  ✔ {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
