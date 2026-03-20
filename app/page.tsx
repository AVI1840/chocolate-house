import TopKPIBar from "@/components/marketing/TopKPIBar";
import HeroSection from "@/components/marketing/HeroSection";
import VisionAbout from "@/components/marketing/VisionAbout";
import WhyNow from "@/components/marketing/WhyNow";
import ValueCards from "@/components/marketing/ValueCards";
import HowItWorks from "@/components/marketing/HowItWorks";
import AICompanion from "@/components/marketing/AICompanion";
import ProductCard from "@/components/marketing/ProductCard";
import Testimonial from "@/components/marketing/Testimonial";
import SocialProof from "@/components/marketing/SocialProof";
import GefenSection from "@/components/marketing/GefenSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-11">
      <TopKPIBar />
      <HeroSection />
      <VisionAbout />
      <WhyNow />
      <ValueCards />
      <HowItWorks />
      <AICompanion />
      <ProductCard />
      <Testimonial />
      <SocialProof />
      <GefenSection />

      <footer className="bg-chocolate-900 text-chocolate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 bg-white rounded-2xl overflow-hidden p-1.5 shrink-0">
                <Image src="/images/logo.png" alt="מרחב יוצר - המעבדה לקקאו" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">מרחב יוצר</p>
                <p className="text-chocolate-300 text-sm font-medium">המעבדה לקקאו · The Cacao Lab</p>
                <p className="text-xs text-chocolate-500 mt-0.5">פלטפורמת הפעלה חינוכית | SEL | גפ״ן</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <Link
                href="/portal/dashboard"
                className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                כניסה לפורטל הדגמה
              </Link>
              <p className="text-chocolate-600 text-xs">
                מוצג כ-POC | בהלימה לחוזר מנכ״ל 0402
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-chocolate-600">
              © 2026 מרחב יוצר - המעבדה לקקאו | כל הזכויות שמורות
            </p>
            <p className="text-xs text-chocolate-700 text-center">
              הנתונים המוצגים מבוססים על פיילוט ראשוני בלבד ואינם מייצגים היקף פעילות לאומי
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
