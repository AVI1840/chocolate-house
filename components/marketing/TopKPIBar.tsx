"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+32%", label: "שיפור בשייכות — פיילוט" },
  { value: "-18%", label: "ירידה באירועי משמעת" },
  { value: "85%", label: "שביעות רצון מורים" },
];

export default function TopKPIBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-chocolate-900 border-b border-chocolate-700 text-white py-2.5 px-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-chocolate-400 text-xs font-medium">מבוסס פיילוט ראשוני</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="font-bold text-orange-300">{stat.value}</span>
                <span className="text-chocolate-300">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="w-px h-4 bg-chocolate-700 hidden md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="shrink-0 hidden md:block" />
      </div>
    </motion.div>
  );
}
