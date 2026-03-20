"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  { label: "תכנית שנתית", detail: "12 מפגשים מובנים" },
  { label: "הכשרת צוות", detail: "מודל Train-the-Trainer" },
  { label: "תוצאות מדידות", detail: "במדדי אקלים בית ספרי (ראמ״ה)" },
  { label: "ליווי מקצועי", detail: "מנחה פדגוגי לאורך התכנית" },
];

const gefenFunding = [
  "סל מענים פדגוגיים ורגשיים",
  "סל הכלה והשתלבות",
];

const outcomes = [
  "שיפור במדדי שייכות",
  "ירידה באירועי משמעת",
  "חיזוק ויסות רגשי",
];

export default function ProductCard() {
  return (
    <section className="py-20 px-6 bg-chocolate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          {/* Header with pricing */}
          <div className="bg-gradient-to-l from-chocolate-800 to-chocolate-700 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">התכנית שלנו</h2>
            <p className="text-chocolate-200 text-lg mb-4">
              מודל הפעלה מלא לבית הספר
            </p>
            <p className="text-4xl font-extrabold text-white">~45,000 ₪ לשנה</p>
            <p className="text-chocolate-300 text-sm mt-1">עלות משוערת | ניתן למימון מלא דרך גפ״ן</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Existing features grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-cream"
                >
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h3 className="font-bold text-chocolate-800 text-lg">
                      {feature.label}
                    </h3>
                    <p className="text-chocolate-500">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-chocolate-100 my-8" />

            {/* Gefen funding + Outcomes side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Gefen funding */}
              <div>
                <h3 className="font-bold text-chocolate-800 mb-3 text-sm">מימון דרך גפ״ן</h3>
                <div className="space-y-2">
                  {gefenFunding.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span className="text-chocolate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable outcomes */}
              <div>
                <h3 className="font-bold text-chocolate-800 mb-3 text-sm">תוצאות מדידות</h3>
                <div className="space-y-2">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span className="text-chocolate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-chocolate-100 my-8" />

            {/* Time to value */}
            <div className="flex items-center gap-2 mb-8 justify-center">
              <span className="text-green-600 font-bold text-lg">✔</span>
              <span className="text-chocolate-700 font-semibold">מדידה ראשונה לאחר 8 מפגשים</span>
              <span className="text-chocolate-400 text-sm">(~חודשיים)</span>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/portal/dashboard"
                className="inline-block bg-accent hover:bg-accent-light text-white text-lg font-bold px-12 py-4 rounded-2xl shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                התחל הטמעה
              </Link>
              <p className="text-chocolate-400 text-xs mt-3">
                מותאם להגשה ואישור במסגרת מערכת גפ״ן
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
