"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
const links = [["/", "Home"], ["/packages", "Tour Packages"], ["/destinations", "Destinations"], ["/testimonials", "Testimonials"], ["/blog", "Blog"], ["/about", "About"], ["/contact", "Contact"]];
export default function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isMenuOpen = menuPath === pathname;
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const active = (href: string) => href === "/" ? pathname === href : pathname === href || pathname.startsWith(href + "/");
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
    <div className="container flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2" onClick={() => setMenuPath(null)}><img src="/favicon.png" alt="Lanka.icu logo" className="w-12 h-12" /><span className="text-2xl font-bold text-primary">Lanka.icu</span></Link>
      <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-6">{links.map(([href, label]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`font-medium transition-colors hover:text-primary ${active(href) ? "text-primary" : scrolled ? "text-neutral-800" : "text-white"}`}>{label}</Link>)}</nav>
      <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">Book Now</Link>
      <button className={`lg:hidden ${scrolled || isMenuOpen ? "text-neutral-800" : "text-white"}`} onClick={() => setMenuPath(isMenuOpen ? null : pathname)} aria-label="Toggle Menu" aria-expanded={isMenuOpen} aria-controls="mobile-navigation">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
    </div>
    {isMenuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden container py-4 flex flex-col space-y-4 bg-white">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuPath(null)} aria-current={active(href) ? "page" : undefined} className={`text-sm font-medium py-2 ${active(href) ? "text-primary" : "text-neutral-800"}`}>{label}</Link>)}<Link href="/contact" onClick={() => setMenuPath(null)} className="btn btn-primary w-full">Book Now</Link></nav>}
  </header>;
}
