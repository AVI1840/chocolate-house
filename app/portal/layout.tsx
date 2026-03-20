"use client";

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

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-chocolate-800 text-white flex flex-col shrink-0">
        <div className="p-5 border-b border-chocolate-700">
          <Link href="/" className="block group">
            <div className="flex items-center gap-3 mb-1">
              <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shrink-0 p-1">
                <Image
                  src="/images/logo.png"
                  alt="מרחב יוצר - המעבדה לקקאו"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-sm font-extrabold leading-tight">מרחב יוצר</h1>
                <p className="text-chocolate-300 text-xs">המעבדה לקקאו</p>
              </div>
            </div>
            <p className="text-chocolate-400 text-xs mt-2 ps-0">פלטפורמת הפעלה חינוכית | גפ״ן</p>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
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
            className="flex items-center gap-2 text-chocolate-300 hover:text-white text-sm transition-colors"
          >
            ← חזרה לדף הבית
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <DemoBanner />
        {children}
      </main>
    </div>
  );
}
