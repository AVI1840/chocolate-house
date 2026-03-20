"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function ChocolatePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="choc" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="8" fill="#D7CCC8" />
          <circle cx="60" cy="60" r="12" fill="#BCAAA4" />
          <circle cx="60" cy="20" r="4" fill="#D7CCC8" />
          <circle cx="20" cy="60" r="6" fill="#A1887F" />
          <rect x="38" y="8" width="4" height="24" rx="2" fill="#BCAAA4" opacity="0.5" />
          <rect x="8" y="38" width="24" height="4" rx="2" fill="#D7CCC8" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#choc)" />
    </svg>
  );
}


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Real photo background */}
      <Image
        src="/images/hero-kids.png"
        alt="ילדים יוצרים שוקולד יחד במעבדה"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay — darker on text side (right in RTL), fading to left */}
      <div className="absolute inset-0 bg-gradient-to-l from-chocolate-900/97 via-chocolate-900/85 to-chocolate-900/50" />
      <ChocolatePattern />
      <div className="absolute top-0 start-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-chocolate-100 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              תכנית מאושרת משרד החינוך | מימון דרך גפ״ן
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="block">מייצרים שילוב,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-accent to-orange-300">
                בונים הצלחה
              </span>
              <span className="block text-2xl md:text-3xl font-light text-chocolate-200 mt-2 leading-snug">
                מרחב יוצר: המעבדה לקקאו
                <br />
                <span className="text-xl text-chocolate-300">בבית הספר שלך</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg text-chocolate-200 mb-10 leading-relaxed max-w-lg"
            >
              למידה התנסותית מבוססת SEL לשיפור אקלים, הכלה וחוסן רגשי — עם פלטפורמה דיגיטלית למדידה, ניהול ודיווח לפי מדדי ראמ״ה וגפ״ן.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/portal/dashboard"
                className="inline-block bg-accent hover:bg-accent-light text-white text-lg font-bold px-10 py-4 rounded-2xl shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                התחל הטמעה
              </Link>
              <a
                href="#how-it-works"
                className="inline-block border border-white/30 hover:bg-white/10 text-white text-lg font-medium px-8 py-4 rounded-2xl transition-all duration-300"
              >
                איך זה עובד?
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { num: "45+", label: "בתי ספר" },
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

          {/* Real photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl scale-95" />
              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                <div className="relative aspect-[4/3] bg-[#FAF3E0]">
                  <Image
                    src="/images/inclusion-workshop.png"
                    alt="תלמידים יוצרים שוקולד יחד"
                    fill
                    className="object-cover"
                  />
                  {/* Logo badge on photo */}
                  <div className="absolute top-4 end-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg">
                    <div className="relative w-8 h-8">
                      <Image src="/images/logo.png" alt="לוגו" fill className="object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-chocolate-800 leading-none">מרחב יוצר</p>
                      <p className="text-[10px] text-chocolate-500">המעבדה לקקאו</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating KPI badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -start-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-chocolate-100"
              >
                <p className="text-xs text-chocolate-400">שייכות</p>
                <p className="text-xl font-bold text-accent">↑ +2.3</p>
              </motion.div>

              {/* Floating session badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -end-4 bg-chocolate-800 border border-chocolate-600 text-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-chocolate-300">מפגש הבא</p>
                <p className="text-sm font-bold">כיתה ה׳ · מחר</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <p className="text-sm">גלול למטה</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
