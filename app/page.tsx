import HeroSection from "@/components/marketing/HeroSection";
import ValueCards from "@/components/marketing/ValueCards";
import HowItWorks from "@/components/marketing/HowItWorks";
import ProductCard from "@/components/marketing/ProductCard";
import Testimonial from "@/components/marketing/Testimonial";
import GefenSection from "@/components/marketing/GefenSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValueCards />
      <HowItWorks />
      <ProductCard />
      <Testimonial />
      <GefenSection />

      <footer className="bg-chocolate-900 text-chocolate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-white rounded-2xl overflow-hidden p-1 shrink-0">
                <Image src="/images/logo.png" alt="מרחב יוצר - המעבדה לקקאו" fill className="object-contain" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">מרחב יוצר - המעבדה לקקאו</p>
                <p className="text-sm text-chocolate-400">פלטפורמת הפעלה חינוכית | מבוסס SEL | מימון דרך גפ״ן</p>
              </div>
            </div>
            <Link
              href="/portal/dashboard"
              className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              כניסה לפורטל
            </Link>
          </div>
          <p className="text-center text-sm text-chocolate-500">
            © 2026 מרחב יוצר - המעבדה לקקאו | בשיתוף משרד החינוך | כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </main>
  );
}
