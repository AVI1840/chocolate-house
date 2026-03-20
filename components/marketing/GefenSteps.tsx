"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "זיהוי סל גפ״ן מתאים",
    description:
      "עם הצוות שלנו תזהה את הסלים הרלוונטיים לבית ספרך — מענים פדגוגיים, הכלה, או פיתוח מקצועי. אין צורך בניסיון קודם עם גפ״ן.",
    badge: "שלב ראשוני",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    num: "02",
    icon: "📝",
    title: "הכנת הגשה ומסמכים",
    description:
      "אנחנו מספקים תבנית הגשה מוכנה, כולל מיפוי מדדי ראמ״ה, תיאור הפעילות ולוח הזמנים — בהתאמה מלאה לדרישות חוזר מנכ״ל 0402.",
    badge: "ליווי מלא",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    num: "03",
    icon: "✅",
    title: "אישור ותחילת הפעלה",
    description:
      "לאחר אישור גפ״ן, מנחה מקצועי מגיע לבית הספר ומתחיל את מסלול ההטמעה. המעקב הדיגיטלי מתחיל מהמפגש הראשון.",
    badge: "תחילת עבודה",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    num: "04",
    icon: "📊",
    title: "דיווח ומדידה לגפ״ן",
    description:
      "בסוף השנה מייצר הפורטל דוח מסכם אוטומטי מוכן לגפ״ן — עם נתוני לפני/אחרי, ייחוס סל, ומדדי ראמ״ה — בלחיצת כפתור.",
    badge: "דיווח אוטומטי",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

export default function GefenSteps() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-chocolate-100 text-chocolate-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            מימון גפ״ן
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-4">
            איך מיישמים במסגרת גפ״ן?
          </h2>
          <p className="text-chocolate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            ארבעה שלבים פשוטים — מזיהוי הסל ועד דוח מסכם אוטומטי לוועדת גפ״ן
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 start-full w-full h-0.5 bg-chocolate-100 z-0" />
              )}

              <div className="relative z-10 border border-chocolate-100 rounded-3xl p-6 hover:shadow-md transition-shadow h-full bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-chocolate-300 font-mono">{step.num}</span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-chocolate-800 text-base mb-2">{step.title}</h3>
                <p className="text-chocolate-500 text-sm leading-relaxed mb-4">{step.description}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColor}`}>
                  {step.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 bg-chocolate-50 rounded-2xl px-8 py-5"
        >
          {[
            "✔ בהלימה לחוזר מנכ״ל 0402",
            "✔ מדדי ראמ״ה מובנים",
            "✔ דוח גפ״ן אוטומטי",
            "✔ ליווי מלא מא׳ עד ת׳",
          ].map((item) => (
            <p key={item} className="text-chocolate-600 text-sm font-medium">
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
