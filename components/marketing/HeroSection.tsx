"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background photo */}
        <Image
          src="/images/hero-kids.png"
          alt="ילדים יוצרים שוקולד יחד במעבדה"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient overlay — heavy on right (text side in RTL), fades to transparent left */}
        <div className="absolute inset-0 bg-gradient-to-l from-chocolate-900/95 via-chocolate-900/75 to-chocolate-900/20" />

        {/* Logo — top right anchor */}
        <div className="absolute top-6 end-6 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5">
          <div className="relative w-9 h-9 shrink-0">
            <Image src="/images/logo.png" alt="לוגו מרחב יוצר" fill className="object-contain" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-bold text-sm">מרחב יוצר</p>
            <p className="text-chocolate-300 text-xs">המעבדה לקקאו</p>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">

            {/* Micro-trust line */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-chocolate-100 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
              תכנית מאושרת למענה רגשי-חברתי במסגרת גפ״ן
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="block text-white">מייצרים שילוב,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-accent to-orange-300 text-6xl md:text-8xl">
                בונים הצלחה
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-lg md:text-xl text-chocolate-200 mb-10 leading-relaxed max-w-xl"
            >
              מודל חינוכי-טיפולי מבוסס SEL לשיפור אקלים בית ספרי והכלה —
              עם מדידה לפי מדדי ראמ״ה ודיווח מובנה לגפ״ן.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="bg-accent hover:bg-accent-light text-white text-lg font-bold px-10 py-4 rounded-2xl shadow-lg shadow-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                הגש בקשה להצעת מחיר
              </button>
              <a
                href="#how-it-works"
                className="border border-white/30 hover:bg-white/10 text-white text-lg font-medium px-8 py-4 rounded-2xl transition-all duration-300"
              >
                צפה איך זה עובד
              </a>
            </motion.div>

            {/* CTA microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-chocolate-400 text-sm mb-10"
            >
              מענה מותאם לבית הספר ולסלי גפ״ן הרלוונטיים | ללא התחייבות
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              {[
                { num: "45+", label: "בתי ספר בפיילוט" },
                { num: "2,400+", label: "תלמידים" },
                { num: "87%", label: "שיפור בשייכות" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.num}</p>
                  <p className="text-sm text-chocolate-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <p className="text-xs">גלול למטה</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
