"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const budgets = [
  {
    name: "סל מענים פדגוגיים ורגשיים",
    description: "SEL, אקלים בית ספרי, כישורי חיים",
    icon: "🧠",
    tags: ["SEL", "אקלים", "ויסות רגשי"],
    borderColor: "border-chocolate-300",
    bgColor: "bg-chocolate-50",
    iconBg: "bg-chocolate-100",
  },
  {
    name: "סל הכלה והשתלבות",
    description: "אוכלוסיות במיקוד, שילוב וחינוך מיוחד",
    icon: "🤝",
    tags: ["שילוב", "חינוך מיוחד", "הכלה"],
    borderColor: "border-orange-300",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    name: "סל חינוך חברתי-ערכי",
    description: "פעילויות העשרה, ערכים וחברה",
    icon: "🌱",
    tags: ["ערכים", "העשרה", "קהילה"],
    borderColor: "border-green-300",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    name: "סל מנהיגות חינוכית",
    description: "הכשרת צוותים ופיתוח מקצועי",
    icon: "🎯",
    tags: ["הכשרה", "Train-the-Trainer", "מנהיגות"],
    borderColor: "border-chocolate-500",
    bgColor: "bg-cream",
    iconBg: "bg-chocolate-100",
  },
];

export default function GefenSection() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-chocolate-100 text-chocolate-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            מימון ממשלתי
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-4">
            מממנים דרך גפ״ן — בלי עלות לבית הספר
          </h2>
          <p className="text-chocolate-500 text-lg max-w-2xl mx-auto">
            התכנית מכוסה על ידי ארבעת הסלים של מערכת גפ״ן במשרד החינוך.
            אין צורך בתקציב בית-ספרי נפרד.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {budgets.map((budget, index) => (
            <motion.div
              key={budget.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 border-2 ${budget.borderColor} ${budget.bgColor} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className={`${budget.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                  {budget.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-chocolate-800 mb-1">{budget.name}</h3>
                  <p className="text-chocolate-500 text-sm mb-3">{budget.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {budget.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/80 text-chocolate-600 px-2.5 py-1 rounded-full border border-chocolate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-l from-chocolate-800 to-chocolate-900 rounded-3xl p-8 text-white text-center"
        >
          <p className="text-2xl font-bold mb-2">✅ כיסוי מלא בכל 4 הסלים</p>
          <p className="text-chocolate-300 mb-6">
            הצוות שלנו מסייע בהגשה ותיאום מול גפ״ן — מ-A ועד Z
          </p>
          <Link
            href="/portal/dashboard"
            className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            התחילו עכשיו
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
