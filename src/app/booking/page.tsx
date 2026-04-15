import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book time – Fana Bilpleie Bergen",
  description:
    "Book time hos Fana Bilpleie enkelt online. Velg tjeneste, dato og tid. Gratis lånebil. Vi bekrefter bookingen innen kort tid.",
};

export default function Booking() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#111111] pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-4">Booking</p>
          <h1 className="font-display text-6xl sm:text-7xl text-white leading-none mb-4">
            BOOK TIME
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            Fyll ut skjemaet nedenfor – vi bekrefter bookingen din innen kort tid.
          </p>
        </div>
      </section>

      {/* BOOKING + INFO */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Contact */}
            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-4">Foretrekker du å ringe?</h3>
              <a href="tel:+4793493484" className="btn-primary text-sm w-full justify-center mb-4">
                <Phone size={15} /> 934 934 84
              </a>
              <a href="mailto:post@fanabilpleie.no" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#d24208] transition-colors">
                <Mail size={14} /> post@fanabilpleie.no
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-4 flex items-center gap-2">
                <Clock size={16} className="text-[#d24208]" /> Åpningstider
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Mandag–Fredag</span><span className="font-medium text-[#111111]">09:00–18:00</span></li>
                <li className="flex justify-between"><span>Lørdag</span><span className="font-medium text-[#111111]">10:00–16:00</span></li>
                <li className="flex justify-between"><span>Søndag</span><span className="font-medium text-gray-400">Stengt</span></li>
              </ul>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-100 p-6">
              <h3 className="font-bold text-[#111111] mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-[#d24208]" /> Adresse
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Nedre Nøttveit 62<br />
                5238 Rådal, Bergen
              </p>
              <a
                href="https://maps.google.com/?q=Nedre+N%C3%B8ttveit+62,+5238+R%C3%A5dal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#d24208] hover:underline font-medium"
              >
                Åpne i Google Maps →
              </a>
            </div>

            {/* USPs */}
            <div className="bg-[#111111] p-6">
              <h3 className="font-bold text-white mb-4">Når du booker hos oss</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Bekreftelse på SMS og e-post",
                  "Gratis lånebil tilgjengelig",
                  "Henting og levering mulig",
                  "Påminnelse dagen før",
                  "Enkel avbestilling inntil 24t før",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 size={14} className="text-[#d24208] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
