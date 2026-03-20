"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "לראשונה ראיתי תלמיד שלא שיתף פעולה עם אף אחד — עובד כתיסה עם חבר. הרגע הזה שווה כל תכנית.",
    name: "שרה כהן",
    role: "מחנכת כיתה ה׳, בית ספר אורות",
    city: "נתניה",
    initials: "ש.כ",
  },
  {
    quote: "הפלטפורמה חסכה לי שעות של עבודה. כל מה שצריך לדיווח לגפ״ן יושב שם מסודר. פשוט עובד.",
    name: "יוסי לוי",
    role: "רכז שילוב",
    city: "ראשון לציון",
    initials: "י.ל",
  },
  {
    quote: "ההנהלה ביקשה מספרים — הצגתי גרף לפני/אחרי ברור. המנהלת אמרה: 'תמשיכי, זה עובד'.",
    name: "מרים אברהם",
    role: "מרפאה בעיסוק, בי״ס ניר שלום",
    city: "חדרה",
    initials: "מ.א",
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
            מה אומרים המשתמשים
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800">
            מהשטח
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-chocolate-100 hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <div className="text-5xl text-chocolate-200 font-serif leading-none mb-4">&ldquo;</div>

              <p className="text-chocolate-700 leading-relaxed mb-6 text-base">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-chocolate-100">
                <div className="w-10 h-10 rounded-full bg-chocolate-800 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-chocolate-800">{t.name}</p>
                  <p className="text-sm text-chocolate-400">{t.role} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
