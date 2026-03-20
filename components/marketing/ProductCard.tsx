"use client";

import { motion } from "framer-motion";

const features = [
  { label: "תכנית שנתית", detail: "12 מפגשים מובנים" },
  { label: "הכשרת צוות", detail: "מודל Train-the-Trainer" },
  { label: "תוצאות מדידות", detail: "במדדי אקלים בית ספרי (ראמ״ה)" },
  { label: "ליווי מקצועי", detail: "מנחה פדגוגי לאורך התכנית" },
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
          <div className="bg-gradient-to-l from-chocolate-800 to-chocolate-700 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">התכנית שלנו</h2>
            <p className="text-chocolate-200 text-lg">
              מודל הפעלה מלא לבית הספר
            </p>
          </div>

          <div className="p-8 md:p-12">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
