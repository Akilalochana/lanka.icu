import type { Metadata } from "next";
import Navbar from "@/src/components/navigation/Navbar";
import Footer from "@/src/components/navigation/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Lanka.icu | Sri Lanka Travel Agency", template: "%s | Lanka.icu" },
  description: "Discover Sri Lanka with Lanka.icu. Explore tour packages, destinations, travel stories, and traveler reviews to plan your adventure.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[100] focus:bg-white focus:p-4">Skip to content</a><div className="flex flex-col min-h-screen"><Navbar /><main id="main-content" className="flex-grow">{children}</main><Footer /></div></body></html>;
}
