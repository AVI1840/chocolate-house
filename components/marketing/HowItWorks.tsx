"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🎓",
    title: "הכשרת הצוות",
    description: "מנחה מקצועי מגיע לבית הספר ומכשיר את הצוות החינוכי במודל Train-the-Trainer. שלושה ימי הכשרה מותאמים אישית.",
    color: "bg-chocolate-800",
  },
  {
    num: "02",
    icon: "🍫",
    title: "הפעלת המפגשים",
    description: "12 מפגשי שוקולד מובנים, כל מפגש עם מיקוד SEL ברור: שייכות, ויסות רגשי או עבודת צוות.",
    color: "bg-accent",
  },
  {
    num: "03",
    icon: "📱",
    title: "ניהול בפלטפורמה",
    description: "הצוות מתעד כל מפגש, בוחר מיקוד SEL ומקבל תובנות. הכל מוזן לדשבורד אחד נוח.",
    color: "bg-chocolate-700",
  },
  {
    num: "04",
    icon: "📊",
    title: "מדידה ודיווח",
    description: "גרפים ברורים לפני/אחרי, מדדי ראמ״ה מדויקים, ודוח מוכן לדיווח לגפ״ן ולהנהלה.",
    color: "bg-chocolate-900",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-chocolate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-chocolate-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            תהליך הטמעה
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ארבעה שלבים להצלחה
          </h2>
          <p className="text-chocolate-300 text-lg max-w-xl mx-auto">
            מהכשרת הצוות ועד דוח מדידה מלא — ליווי מלא בכל הדרך
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
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
                <div className="hidden md:block absolute top-10 start-full w-full h-0.5 bg-white/10 z-0" />
              )}

              <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-chocolate-400 font-mono">{step.num}</span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-chocolate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
