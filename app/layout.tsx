import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asanka.one"),
  title: {
    default: "Asanka.one | Strategic Consulting, AI Advisory & Mentoring",
    template: "%s | Asanka.one",
  },
  description:
    "Strategic consulting, AI advisory, mentoring, and practical tools for businesses, leaders, and professionals seeking clarity, execution, and growth.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://asanka.one",
    siteName: "Asanka.one",
    title: "Asanka.one | Strategic Consulting, AI Advisory & Mentoring",
    description:
      "Strategic consulting, AI advisory, mentoring, and practical tools for businesses, leaders, and professionals seeking clarity, execution, and growth.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asanka.one" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asanka.one | Strategic Consulting, AI Advisory & Mentoring",
    description:
      "Strategic consulting, AI advisory, mentoring, and practical tools for businesses, leaders, and professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
