"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DemoBanner from "@/components/portal/DemoBanner";

const navItems = [
  { href: "/portal/dashboard", label: "לוח בקרה", icon: "📊" },
  { href: "/portal/sessions", label: "ניהול מפגשים", icon: "📋" },
  { href: "/portal/kpi", label: "מדדי SEL", icon: "📈" },
  { href: "/portal/ai", label: "עוזר פדגוגי", icon: "🤖" },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="p-5 border-b border-chocolate-700">
        <Link href="/" className="block group" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-3 mb-1">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shrink-0 p-1">
              <Image src="/images/logo.png" alt="מרחב יוצר" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold leading-tight">מרחב יוצר</h1>
              <p className="text-chocolate-300 text-xs">המעבדה לקקאו</p>
            </div>
          </div>
          <p className="text-chocolate-400 text-xs mt-2">פלטפורמת הפעלה חינוכית | גפ״ן</p>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-chocolate-600 text-white"
                  : "text-chocolate-200 hover:bg-chocolate-700 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-chocolate-700">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 text-chocolate-300 hover:text-white text-sm transition-colors"
        >
          ← חזרה לדף הבית
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-cream flex">

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 bg-chocolate-800 text-white flex-col shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 end-0 h-full w-72 bg-chocolate-800 text-white flex flex-col z-50 transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 start-4 text-chocolate-300 hover:text-white text-2xl"
          aria-label="סגור תפריט"
        >
          ✕
        </button>
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center justify-between bg-chocolate-800 text-white px-4 py-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 bg-white rounded-lg overflow-hidden p-0.5">
              <Image src="/images/logo.png" alt="לוגו" fill className="object-contain" />
            </div>
            <span className="font-bold text-sm">מרחב יוצר</span>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="פתח תפריט"
          >
            <span className="w-6 h-0.5 bg-white rounded" />
            <span className="w-6 h-0.5 bg-white rounded" />
            <span className="w-6 h-0.5 bg-white rounded" />
          </button>
        </div>

        {/* Bottom mobile nav */}
        <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-chocolate-900 border-t border-chocolate-700 flex z-30">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 flex flex-col items-center py-2 text-xs transition-colors ${
                  isActive ? "text-orange-300" : "text-chocolate-400"
                }`}
              >
                <span className="text-xl mb-0.5">{item.icon}</span>
                <span className="text-[10px] leading-tight text-center px-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <main className="flex-1 p-4 md:p-8 overflow-auto pb-20 lg:pb-8">
          <DemoBanner />
          {children}
        </main>
      </div>
    </div>
  );
}
