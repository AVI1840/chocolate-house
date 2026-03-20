"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+32%", label: "שיפור בתחושת שייכות" },
  { value: "-18%", label: "באירועי משמעת" },
  { value: "85%", label: "שביעות רצון צוות הוראה" },
];

export default function TopKPIBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-chocolate-900 border-b border-chocolate-700 text-white py-2.5 px-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 text-sm">
              <span className="font-bold text-orange-300">{stat.value}</span>
              <span className="text-chocolate-200">{stat.label}</span>
            </div>
            {index < stats.length - 1 && (
              <div className="w-px h-4 bg-chocolate-600 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
