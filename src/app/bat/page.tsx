import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Anchor, Waves, Shield, Sparkles } from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "Båtavdelingen – Profesjonell båtpleie i Bergen",
  description:
    "Fana Bilpleie sin båtavdeling tilbyr profesjonell båtpleie i Bergen. Polering, renovering, skrogbehandling og interiørrengjøring. Kontakt for tilbud.",
};

const services = [
  {
    icon: Sparkles,
    title: "Polering & Renovering",
    desc: "Fjerner oksidering, UV-skader og slitasje fra lakk og gelcoat. Gir tilbake den opprinnelige glanssen.",
    details: ["Maskinpolering av skrog og dekk", "Fjerning av oksidering", "Gelcoat-behandling", "Sluttbehandling med marine voks"],
  },
  {
    icon: Shield,
    title: "Skrogbehandling",
    desc: "Beskyttelse mot begroing, saltvann og UV. Langvarig beskyttelse som sparer deg for kostbar renovering.",
    details: ["Antifouling-behandling", "Keramisk coating for båt", "Vannlinjerengjøring", "Bunnsliping og maling"],
  },
  {
    icon: Waves,
    title: "Interiørrengjøring",
    desc: "Grundig rengjøring av hele innvendig skrog, sitteputer, skap og teknisk utstyr.",
    details: ["Støvsuging og damp-rengjøring", "Rengjøring av koffertrom", "Rens av polstringer", "Lukktfjerning"],
  },
  {
    icon: Anchor,
    title: "Komplett Sesongpakke",
    desc: "Alt i én – klargjøring til sjøsetting om våren eller opplag på høsten. Skreddersydd for norske forhold.",
    details: ["Vår: vask, polering og sjøsetting", "Høst: oppvask, beskyttelse og opplag", "Innvendig og utvendig", "Skreddersydd tilbud"],
    highlight: true,
  },
];

const reasons = [
  "Saltvann, UV og biologisk vekst sliter hardt på overflater",
  "Profesjonell pleie forlenger båtens levetid betraktelig",
  "En velstelt båt beholder høyere verdi ved salg",
  "Vi bruker produkter spesielt utviklet for marine overflater",
  "Samme kvalitetsnivå og presisjon som på biltjenestene",
];

export default function Bat() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d2f52] pt-[88px] pb-20 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80&auto=format&fit=crop"
          alt="Båtpleie Bergen – Fana Bilpleie Båtavdelingen"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2f52]/70 to-[#0d2f52]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <div className="flex items-center gap-3 mb-6">
            <Anchor size={22} className="text-blue-400" />
            <p className="text-blue-300 font-bold text-xs tracking-widest uppercase">Båtavdelingen</p>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
            PROFESJONELL
            <br />
            <span className="text-blue-400">BÅTPLEIE</span>
            <br />
            I BERGEN
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl leading-relaxed mb-10">
            Norske fjorder er vakre – men harde mot båten din. Saltvann, UV-stråler og
            biologisk vekst sliter. Vi gir båten din den behandlingen den trenger, med
            samme presisjon og stolthet som vi viser alle kjøretøy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+4793493484" className="btn-primary text-sm px-8 py-4">
              <Phone size={16} /> Ring for tilbud
            </a>
            <Link href="/kontakt" className="btn-outline text-sm px-8 py-4">
              Send forespørsel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="text-[#1a4a7a] font-bold text-xs tracking-widest uppercase mb-3">Tjenester</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[#111111]">HVA VI TILBYR</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Skreddersydde båtpleiepakker tilpasset norske forhold og din båt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`p-8 border-2 ${s.highlight ? "border-[#1a4a7a] bg-[#f0f5fb]" : "border-gray-100 bg-white"}`}
                >
                  {s.highlight && (
                    <span className="inline-block bg-[#1a4a7a] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 mb-4">
                      Anbefalt
                    </span>
                  )}
                  <div className="w-12 h-12 bg-[#1a4a7a] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#111111] text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-[#1a4a7a] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FØR / ETTER */}
      <section className="py-20 bg-[#0d2f52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-blue-300 font-bold text-xs tracking-widest uppercase mb-3">Resultater</p>
            <h2 className="font-display text-5xl text-white">FØR &amp; ETTER</h2>
            <p className="text-blue-200 mt-3 max-w-lg mx-auto">Se hva profesjonell båtpleie gjør for utseendet og holdbarheten.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <BeforeAfter
              before="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=900&q=80&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80&auto=format&fit=crop"
              label="Skrogpolering"
            />
            <BeforeAfter
              before="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=900&q=80&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=900&q=80&auto=format&fit=crop"
              label="Dekkrenovering"
            />
          </div>
          <p className="text-center text-blue-900 text-xs mt-5">* Illustrasjonsbilder – erstattes med kundebilder ved lansering</p>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-[#1a4a7a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">PRISER PÅ FORESPØRSEL</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Alle båter er forskjellige – størrelse, materiale og tilstand påvirker prisen.
            Kontakt oss for et uforpliktende og skreddersydd tilbud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4793493484" className="btn-primary text-sm px-8 py-4">
              <Phone size={16} /> Ring 934 934 84
            </a>
            <Link href="/kontakt" className="btn-outline text-sm px-8 py-4">
              Send forespørsel
            </Link>
          </div>
        </div>
      </section>

      {/* HVORFOR */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <p className="text-[#1a4a7a] font-bold text-xs tracking-widest uppercase mb-3">Hvorfor velge oss</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-6">
                BÅTEN FORTJENER DET BESTE
              </h2>
              <ul className="flex flex-col gap-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1a4a7a] mt-0.5 shrink-0" />
                    <span className="text-gray-600">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-[#0d2f52] p-10 text-white">
              <h3 className="font-display text-3xl mb-4">SESONGSTART OG OPPLAG</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Vi er ekstra travle i april–mai (sjøsetting) og september–oktober (opplag).
                Book god tid i forveien for å sikre din plass.
              </p>
              <a href="tel:+4793493484" className="btn-primary text-xs">
                Book din plass <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
