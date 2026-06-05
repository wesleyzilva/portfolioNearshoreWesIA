import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import StickyCTA from "@/components/StickyCTA";
import TrackingInit from "@/components/TrackingInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const GA_ID = "G-VWMRGK1VK6";
const CLARITY_ID = "x1avi1ev6u";

export const metadata: Metadata = {
  title: "Wesley Zilva · Agile Delivery Manager · LATAM Remote",
  description:
    "Agile Delivery Manager | 14+ yrs | 80M+ tx/day | Available nearshore/remote. Connecting US & LATAM teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className="bg-[#0D1B2A] text-[#E0E1DD] antialiased"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {/* ── Google Analytics 4 ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}</Script>

        {/* ── Microsoft Clarity ── */}
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}</Script>

        {/* ── Delegated event tracker + section_view observer ── */}
        <TrackingInit />

        <Sidebar />
        <StickyCTA />
        {children}
      </body>
    </html>
  );
}
