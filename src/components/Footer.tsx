import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <span className="font-display text-2xl text-white tracking-wider block mb-3">
            FANA <span className="text-[var(--orange)]">BILPLEIE</span>
          </span>
          <p className="text-sm leading-relaxed mb-5">
            Bergen sin mest betrodde bilpleie siden oppstart. Vi behandler bilen og båten din med samme omsorg som om det var vår egen.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/fanabilpleie/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 hover:bg-[var(--orange)] flex items-center justify-center transition-colors text-white"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/fanabilpleie/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 hover:bg-[var(--orange)] flex items-center justify-center transition-colors text-white"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Tjenester */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Tjenester</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { href: "/biltjenester#vask", label: "Bilvask & Vedlikehold" },
              { href: "/biltjenester#polering", label: "Polering & Renovering" },
              { href: "/biltjenester#coating", label: "Keramisk Coating" },
              { href: "/biltjenester#klargjoring", label: "Klargjøring" },
              { href: "/bat", label: "Båtavdelingen" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--orange)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Selskap */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Selskap</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { href: "/om-oss", label: "Om oss" },
              { href: "/priser", label: "Priser" },
              { href: "/booking", label: "Book time" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--orange)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Kontakt</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[var(--orange)] mt-0.5 shrink-0" />
              <span>Nedre Nøttveit 62<br />5238 Rådal, Bergen</span>
            </li>
            <li>
              <a href="tel:+4793493484" className="flex items-center gap-2.5 hover:text-[var(--orange)] transition-colors">
                <Phone size={15} className="text-[var(--orange)] shrink-0" />
                934 934 84
              </a>
            </li>
            <li>
              <a href="mailto:post@fanabilpleie.no" className="flex items-center gap-2.5 hover:text-[var(--orange)] transition-colors">
                <Mail size={15} className="text-[var(--orange)] shrink-0" />
                post@fanabilpleie.no
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={15} className="text-[var(--orange)] mt-0.5 shrink-0" />
              <span>Man–Fre: 09:00–18:00<br />Lørdag: 10:00–16:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 sm:px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Fana Bilpleie AS · Org.nr. 920 241 255</span>
        <span>
          Nettside av{" "}
          <a href="https://www.digitalvekst.no" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--orange)] transition-colors">
            Digital Vekst
          </a>
        </span>
      </div>
    </footer>
  );
}
