"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "לראשונה ראיתי תלמיד שלא שיתף פעולה עם אף אחד — עובד כתיסה עם חבר לצד המיכל. הרגע הזה שווה כל תכנית.",
    name: "שרה כהן",
    role: "מחנכת כיתה ה׳",
    school: "בית ספר אורות, נתניה",
    initials: "ש",
    color: "bg-chocolate-700",
  },
  {
    quote: "הפלטפורמה חסכה לי שעות של עבודה. כל מה שצריך לדיווח לגפ״ן יושב שם מסודר. פשוט עובד.",
    name: "יוסי לוי",
    role: "רכז שילוב",
    school: "בית ספר השקד, ראשון לציון",
    initials: "י",
    color: "bg-accent",
  },
  {
    quote: "ההנהלה ביקשה מספרים — הצגתי גרף לפני/אחרי ברור. המנהלת אמרה: תמשיכי, זה עובד.",
    name: "מרים אברהם",
    role: "מרפאה בעיסוק",
    school: "בי״ס ניר שלום, חדרה",
    initials: "מ",
    color: "bg-chocolate-600",
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-chocolate-100 text-chocolate-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            קולות מהפיילוט
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-2">
            מה אומרים מהשטח
          </h2>
          <p className="text-chocolate-400 text-sm">* ציטוטים מתוך משוב שהתקבל במהלך פיילוט תשפ״ו</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-chocolate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl text-chocolate-200 font-serif leading-none mb-4">&ldquo;</div>

              <p className="text-chocolate-700 leading-relaxed mb-6 text-base flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-chocolate-100">
                <div className={`w-12 h-12 rounded-2xl ${t.color} text-white flex items-center justify-center text-lg font-extrabold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-chocolate-800">{t.name}</p>
                  <p className="text-xs text-chocolate-500 font-medium">{t.role}</p>
                  <p className="text-xs text-chocolate-400">{t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
