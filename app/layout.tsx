import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "מרחב יוצר - המעבדה לקקאו | פלטפורמת הפעלה חינוכית",
  description: "למידה התנסותית מבוססת SEL לשיפור אקלים, הכלה וחוסן רגשי - מרחב יוצר: המעבדה לקקאו בבית הספר שלך",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased bg-cream text-chocolate-900`}>
        {children}
      </body>
    </html>
  );
}
