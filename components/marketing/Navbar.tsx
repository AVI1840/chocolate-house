"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { label: "חזון", href: "#vision" },
  { label: "למה עכשיו", href: "#why-now" },
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "תמחור", href: "#pricing" },
  { label: "גפ״ן", href: "#gefen" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-11 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-chocolate-100"
            : "bg-white/90 backdrop-blur-sm border-b border-chocolate-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

          {/* Brand — RIGHT in RTL */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-14 h-14 shrink-0 rounded-2xl overflow-hidden bg-cream p-1 border-2 border-chocolate-200 group-hover:border-accent transition-all duration-200 shadow-sm group-hover:shadow-md">
              <Image
                src="/images/logo.png"
                alt="מרחב יוצר - המעבדה לקקאו"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-chocolate-900 text-lg leading-none tracking-tight">
                מרחב יוצר
              </p>
              <p className="text-chocolate-600 text-xs font-semibold mt-0.5">
                המעבדה לקקאו
              </p>
              <p className="text-chocolate-400 text-[10px] tracking-widest uppercase leading-none mt-0.5">
                The Cacao Lab
              </p>
            </div>
          </Link>

          {/* Desktop nav — CENTER */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-chocolate-600 hover:text-chocolate-900 hover:bg-chocolate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/principal"
              className="px-4 py-2 text-sm font-medium text-chocolate-600 hover:text-chocolate-900 hover:bg-chocolate-50 rounded-lg transition-colors"
            >
              🏫 למנהלי ביה״ס
            </Link>
            <Link
              href="/portal/dashboard"
              className="px-4 py-2 text-sm font-medium text-chocolate-600 hover:text-chocolate-900 hover:bg-chocolate-50 rounded-lg transition-colors"
            >
              🖥 פורטל הדגמה
            </Link>
          </nav>

          {/* CTA — LEFT in RTL */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center bg-accent hover:bg-accent-light text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md shadow-accent/20 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              הגש בקשה
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-chocolate-50 transition-colors"
              aria-label="תפריט ניווט"
            >
              <span className={`w-5 h-0.5 bg-chocolate-700 rounded transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-chocolate-700 rounded transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-chocolate-700 rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-chocolate-100 px-4 py-4 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-chocolate-700 hover:bg-chocolate-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/principal"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-chocolate-700 hover:bg-chocolate-50 rounded-xl transition-colors"
            >
              🏫 למנהלי ביה״ס
            </Link>
            <Link
              href="/portal/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-chocolate-700 hover:bg-chocolate-50 rounded-xl transition-colors"
            >
              🖥 פורטל הדגמה
            </Link>
            <div className="pt-2">
              <button
                onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                className="w-full bg-accent text-white font-bold py-3 rounded-xl text-base"
              >
                הגש בקשה להצעת מחיר
              </button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
