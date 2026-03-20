"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-l from-chocolate-900 to-chocolate-700 text-white px-6 py-3 flex items-center justify-between text-sm rounded-2xl mb-6 shadow-md">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
        <span className="font-semibold">מצב הדגמה חיה</span>
        <span className="text-chocolate-300">|</span>
        <span className="text-chocolate-200">
          פלטפורמת מרחב יוצר — גרסת POC פעילה | נתוני פיילוט מאומתים
        </span>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <Link
          href="/"
          className="text-orange-300 hover:text-orange-200 font-semibold transition-colors text-xs"
        >
          ← דף שיווקי
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="text-chocolate-400 hover:text-white transition-colors text-lg leading-none"
          aria-label="סגור"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
