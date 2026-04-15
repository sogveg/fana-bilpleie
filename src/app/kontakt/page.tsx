import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt oss – Fana Bilpleie Bergen",
  description:
    "Ta kontakt med Fana Bilpleie i Rådal, Bergen. Ring 934 934 84, send e-post til post@fanabilpleie.no eller fyll ut kontaktskjemaet.",
};

export default function Kontakt() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#111111] pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-4">Kontakt</p>
          <h1 className="font-display text-6xl sm:text-7xl text-white leading-none mb-4">
            TA KONTAKT
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            Spørsmål? Tilbud? Vi svarer raskt og hjelper deg gjerne.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-5">Kontaktinformasjon</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="tel:+4793493484" className="flex items-center gap-3 hover:text-[#d24208] transition-colors group">
                    <div className="w-9 h-9 bg-[#d24208] flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Telefon</div>
                      <div className="font-semibold text-[#111111] group-hover:text-[#d24208] text-sm">934 934 84</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:post@fanabilpleie.no" className="flex items-center gap-3 hover:text-[#d24208] transition-colors group">
                    <div className="w-9 h-9 bg-[#d24208] flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">E-post</div>
                      <div className="font-semibold text-[#111111] group-hover:text-[#d24208] text-sm">post@fanabilpleie.no</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#111111] flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Adresse</div>
                    <div className="font-semibold text-[#111111] text-sm">Nedre Nøttveit 62<br />5238 Rådal, Bergen</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-4 flex items-center gap-2">
                <Clock size={15} className="text-[#d24208]" /> Åpningstider
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                {[
                  { day: "Mandag", time: "09:00–18:00" },
                  { day: "Tirsdag", time: "09:00–18:00" },
                  { day: "Onsdag", time: "09:00–18:00" },
                  { day: "Torsdag", time: "09:00–18:00" },
                  { day: "Fredag", time: "09:00–18:00" },
                  { day: "Lørdag", time: "10:00–16:00" },
                  { day: "Søndag", time: "Stengt" },
                ].map((r) => (
                  <li key={r.day} className="flex justify-between">
                    <span>{r.day}</span>
                    <span className={`font-medium ${r.time === "Stengt" ? "text-gray-400" : "text-[#111111]"}`}>{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-4">Følg oss</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/fanabilpleie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111111] hover:bg-[#d24208] text-white text-xs font-bold tracking-wide uppercase px-4 py-2.5 transition-colors"
                >
                  <FacebookIcon /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/fanabilpleie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111111] hover:bg-[#d24208] text-white text-xs font-bold tracking-wide uppercase px-4 py-2.5 transition-colors"
                >
                  <InstagramIcon /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100 h-80 flex items-center justify-center text-gray-400 text-sm border-t border-gray-200">
        <div className="text-center">
          <MapPin size={36} className="mx-auto mb-2 text-gray-300" />
          <div>Google Maps – Nedre Nøttveit 62, Rådal</div>
          <div className="text-xs mt-1">(legges inn ved lansering)</div>
        </div>
      </section>
    </>
  );
}
