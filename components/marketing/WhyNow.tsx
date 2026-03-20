"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    icon: "🧠",
    title: "עלייה באתגרי ויסות רגשי",
    text: "מערכת החינוך מתמודדת עם עלייה ניכרת בקשיי ויסות רגשי בקרב תלמידים — בכל הגילאים ובכל סוגי המסגרות. הצורך במענה שיטתי, לא פרטני, הופך דחוף.",
  },
  {
    icon: "🏫",
    title: "צורך גובר בשייכות וביטחון",
    text: "תחושת שייכות ובטחון קבוצתי היא תנאי בסיסי ללמידה. כשהיא נפגעת — האקלים הכיתתי, ההישגים והמוטיבציה נפגעים בעקבותיה.",
  },
  {
    icon: "👩‍🏫",
    title: "עומס מתמשך על צוותי החינוך",
    text: "הצוות הפדגוגי נדרש להתמודד עם אתגרים רגשיים-חברתיים מורכבים — לעיתים ללא כלים מתאימים, ללא תמיכה מדידה וללא מסגרת יישומית ברורה.",
  },
];

export default function WhyNow() {
  return (
    <section className="py-20 px-6 bg-chocolate-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-chocolate-200 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            הקשר ורלוונטיות
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            למה עכשיו?
          </h2>
          <p className="text-chocolate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            מערכת החינוך עומדת בפני אתגרים רגשיים-חברתיים שמחייבים מענה מוסדי —
            מובנה, מדיד ויישומי.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <span className="text-3xl block mb-4">{c.icon}</span>
              <h3 className="font-bold text-white text-lg mb-2">{c.title}</h3>
              <p className="text-chocolate-300 text-sm leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Risk framing — calm, professional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border-r-4 border-orange-400 rounded-2xl px-6 py-5 mb-10"
        >
          <p className="text-chocolate-200 text-base leading-relaxed">
            <span className="font-semibold text-orange-300">שימו לב: </span>
            ללא מענה שיטתי, אתגרי ויסות, שייכות והתנהגות עלולים להחריף
            ולהשפיע על כלל האקלים הבית-ספרי — ועל יכולת ההוראה עצמה.
          </p>
        </motion.div>

        {/* Response framing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-l from-accent/20 to-chocolate-800 border border-accent/30 rounded-3xl p-8 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-white mb-3">
            מרחב יוצר נותן מענה יישומי לבניית חוסן אישי וקבוצתי
          </p>
          <p className="text-chocolate-300 text-base max-w-3xl mx-auto mb-2">
            מתאים לכלל תלמידי בית הספר — בדגש על חיזוק חוסן, מסוגלות ושייכות.
            לא רק לחינוך מיוחד. לכל כיתה, לכל מורה, לכל רשות.
          </p>
          <p className="text-chocolate-400 text-sm">
            בהלימה לחוזר מנכ״ל 0402 | פותח בשיתוף אנשי חינוך וטיפול
          </p>
        </motion.div>

      </div>
    </section>
  );
}
