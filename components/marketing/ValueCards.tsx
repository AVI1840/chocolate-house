"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "חוסן רגשי",
    description: "פיתוח כישורי ויסות רגשי וחוסן נפשי דרך חוויות יצירה מעשיות. התלמידים לומדים להתמודד עם קושי, לווסת רגשות וליצור מחדש.",
    icon: "💪",
    metric: "73%",
    metricLabel: "שיפור בויסות רגשי",
    bg: "from-chocolate-800 to-chocolate-700",
    image: "/images/sel-praline.png",
    imageAlt: "ילד מייצר שוקולד בריכוז - ויסות רגשי",
  },
  {
    title: "שייכות לכולם",
    description: "מתאים לכלל תלמידי בית הספר — לא רק לחינוך מיוחד. חיזוק שייכות, ביטחון קבוצתי ומסוגלות בכל כיתה.",
    icon: "🤝",
    metric: "91%",
    metricLabel: "תחושת שייכות — פיילוט",
    bg: "from-accent to-orange-600",
    image: "/images/inclusion-kids.png",
    imageAlt: "ילדים מגוונים צוחקים ויוצרים שוקולד יחד",
  },
  {
    title: "מיומנויות לחיים",
    description: "עבודת צוות, תקשורת, פתרון בעיות וחשיבה יצירתית — כישורים שמלוות כל חיים ומשפרים את האקלים הבית-ספרי.",
    icon: "⭐",
    metric: "4.4/5",
    metricLabel: "ממוצע עבודת צוות",
    bg: "from-chocolate-700 to-chocolate-600",
    image: "/images/sel-tactile.png",
    imageAlt: "ילד מגלגל כדורי שוקולד - עבודת ידיים ויצירה",
  },
];

export default function ValueCards() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-chocolate-100 text-chocolate-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            למה זה עובד
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-4">
            שלושה עמודי יסוד
          </h2>
          <p className="text-chocolate-500 text-lg max-w-xl mx-auto">
            למידה רגשית-חברתית דרך עשייה אמיתית — מבוססת נתונים, מדידה ותוצאות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* Photo at top - 16:9 ratio */}
              <div className="relative aspect-video overflow-hidden bg-[#FAF3E0]">
                <Image
                  src={value.image}
                  alt={value.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient bottom fade into card */}
                <div className={`absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-chocolate-800/80 to-transparent`} />
              </div>

              {/* Content below photo */}
              <div className={`bg-gradient-to-br ${value.bg} p-6 text-white`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{value.icon}</span>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm mb-5">
                  {value.description}
                </p>
                <div className="bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                  <p className="text-2xl font-extrabold">{value.metric}</p>
                  <p className="text-white/60 text-xs mt-0.5">{value.metricLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
