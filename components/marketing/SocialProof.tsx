"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="py-14 px-6 bg-chocolate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-white text-xl md:text-2xl font-bold mb-3">
          פיילוט מורחב ברשויות מקומיות
        </p>
        <div className="flex items-center justify-center gap-6 text-chocolate-200 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-orange-300">8</span>
            <span>בתי ספר</span>
          </div>
          <div className="w-px h-8 bg-chocolate-600" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-orange-300">420</span>
            <span>תלמידים משתתפים</span>
          </div>
          <div className="w-px h-8 bg-chocolate-600 hidden md:block" />
          <div className="hidden md:flex items-center gap-2">
            <span className="text-3xl font-extrabold text-orange-300">12</span>
            <span>רשויות מקומיות</span>
          </div>
        </div>
        <p className="text-chocolate-400 text-sm mt-4">
          נתוני פיילוט תשפ״ו | בשיתוף אגף חינוך ברשויות
        </p>
      </motion.div>
    </section>
  );
}
