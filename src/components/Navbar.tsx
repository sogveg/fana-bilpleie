"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/biltjenester", label: "Biltjenester" },
  { href: "/bat", label: "Båtavdelingen" },
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111111] shadow-lg" : "bg-[#111111]/90 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[var(--orange)] py-1.5 px-4 flex items-center justify-center gap-6 text-white text-xs font-semibold tracking-wide">
        <a href="tel:+4793493484" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={12} />
          934 934 84
        </a>
        <span className="opacity-50">|</span>
        <span>Man–Fre 09–18 &nbsp;·&nbsp; Lør 10–16</span>
        <span className="opacity-50">|</span>
        <span>Gratis lånebil</span>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl text-white tracking-wider">
            FANA <span className="text-[var(--orange)]">BILPLEIE</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+4793493484" className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
            <Phone size={14} />
            Ring oss
          </a>
          <Link href="/booking" className="btn-primary text-xs py-2.5 px-5">
            Book nå
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+4793493484" className="text-[var(--orange)]">
            <Phone size={20} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-1"
            aria-label="Meny"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-white font-medium py-2 border-b border-white/10 last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
            Book time nå
          </Link>
        </div>
      )}
    </header>
  );
}
