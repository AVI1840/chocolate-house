"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionAbout() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-chocolate-100 text-chocolate-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            מי אנחנו
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo prominent */}
            <div className="flex items-center gap-4 mb-7">
              <div className="relative w-16 h-16 shrink-0 bg-cream rounded-2xl p-1.5">
                <Image src="/images/logo.png" alt="מרחב יוצר לוגו" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-chocolate-900 leading-tight">
                  מרחב יוצר
                </h2>
                <p className="text-chocolate-500 text-sm font-medium">המעבדה לקקאו · The Cacao Lab</p>
              </div>
            </div>

            <div className="mb-2">
              <h3 className="text-lg font-bold text-chocolate-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full inline-block" />
                חזון התכנית
              </h3>
              <p className="text-chocolate-600 leading-relaxed text-base">
                אנו מאמינים שכל בית ספר יכול להיות מרחב של שייכות, ויסות וצמיחה —
                כאשר הכלי הפדגוגי הנכון מחבר בין חוויה, מדידה ויישום מקצועי.
              </p>
              <p className="text-chocolate-500 leading-relaxed text-base mt-3">
                מרחב יוצר מציעה מודל חינוכי-טיפולי ייחודי: מעבדת קקאו כזירה חושית-חברתית,
                משולבת בפלטפורמה דיגיטלית לניהול, מדידה ודיווח — בהתאמה מלאה לדרישות
                משרד החינוך ומערכת גפ״ן.
              </p>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-chocolate-800 mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-chocolate-400 rounded-full inline-block" />
              אודות התכנית
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: "🌱",
                  title: "בשלב פיילוט פעיל",
                  text: "התכנית מופעלת בשמונה בתי ספר בפיילוט ראשוני מבוקר, בשיתוף אנשי חינוך, פסיכולוגים ומומחי SEL.",
                },
                {
                  icon: "📐",
                  title: "פותחה בשיתוף מקצועי",
                  text: "המסגרת הפדגוגית פותחה עם מטפלים בעיסוק, פסיכולוגים חינוכיים ומנהלי בתי ספר.",
                },
                {
                  icon: "📋",
                  title: "בהלימה לחוזר מנכ״ל 0402",
                  text: "כל המדדים, הדיווחים ומסלולי ההטמעה מותאמים לדרישות הרגולציה של משרד החינוך.",
                },
                {
                  icon: "💡",
                  title: "בדרך להרחבה",
                  text: "אנחנו מתכננים הרחבה הדרגתית לרשויות נוספות — צעד מדוד, מבוסס תוצאות.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-chocolate-800 text-sm">{item.title}</p>
                    <p className="text-chocolate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-chocolate-50 border border-chocolate-100 rounded-2xl px-6 py-4 flex items-start gap-3"
        >
          <span className="text-chocolate-400 text-lg mt-0.5">ℹ️</span>
          <p className="text-chocolate-500 text-xs leading-relaxed">
            <span className="font-semibold text-chocolate-600">שקיפות ואמינות: </span>
            הנתונים המוצגים באתר מבוססים על פיילוט ראשוני והערכות מקצועיות בלבד.
            אין בהם ייצוג של היקף פעילות לאומי. הפלטפורמה מוצגת כ-POC ותיחשב
            לייצור מלא בהתאם לתוצאות הפיילוט ומשוב הלקוחות.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
