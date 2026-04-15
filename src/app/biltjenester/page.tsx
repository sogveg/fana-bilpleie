import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Biltjenester – Bilvask, Coating & Renovering i Bergen",
  description:
    "Komplett oversikt over alle biltjenester hos Fana Bilpleie i Bergen. Bilvask, keramisk coating, lakkrenovering, klargjøring og spesialbehandling.",
};

const categories = [
  {
    id: "vask",
    label: "Bilvask & Vedlikehold",
    tagline: "Ren bil, lengre levetid",
    desc: "Vi bruker skånsomme, profesjonelle produkter som fjerner smuss uten å skade lakken. Perfekt til jevnlig vedlikehold.",
    services: [
      { name: "Bilvask Deluxe", desc: "Utvendig vask, felgrens, tørk og glans", price: "Fra 799 kr" },
      { name: "Interiørvask", desc: "Støvsuging, rengjøring av alle flater og matter", price: "Fra 1.950 kr" },
      { name: "Motorromsvask", desc: "Grundig rengjøring av motorrom", price: "350–750 kr" },
      { name: "Motorromsdetal", desc: "Komplett detaljering av motorrom", price: "350–750 kr" },
    ],
  },
  {
    id: "polering",
    label: "Polering & Renovering",
    tagline: "Tilbake til showroom-standard",
    desc: "Riper fra steinsprut, veisalt og hærverk. Vi restorer bilens opprinnelige lakk og glans med maskinpolering.",
    services: [
      { name: "Vask + Maskinpolitur", desc: "Enstegs maskinpolering etter vask", price: "Fra 1.790 kr" },
      { name: "Lakkrenovering", desc: "Fullstendig flerstegs lakkrenovering", price: "Fra 1.950 kr" },
      { name: "Strip Reduction", desc: "Fjerning av swirl-merker og riper", price: "550 kr/time" },
      { name: "Minilakkering", desc: "Reparasjon av småskader og steinsprut", price: "Fra 1.150 kr" },
    ],
  },
  {
    id: "coating",
    label: "Keramisk Coating",
    tagline: "Opp til 10 års beskyttelse",
    desc: "Keramisk coating gir permanent beskyttelse mot riper, UV-stråler, syre og smuss. En investering som lønner seg.",
    highlight: true,
    services: [
      {
        name: "QP-ON 2.0 Hybrid",
        desc: "Enkel coating – god hverdagsbeskyttelse",
        price: "1.400 kr",
        durability: "1–2 år",
      },
      {
        name: "OneCoat Extreme",
        desc: "Premium coating med sterk vannavvisning",
        price: "4.990 kr",
        durability: "3–5 år",
        popular: true,
      },
      {
        name: "Titanium Extreme 2K",
        desc: "Vår beste coating – for de som vil ha det aller beste",
        price: "Fra 7.990 kr",
        durability: "5–10 år",
      },
    ],
  },
  {
    id: "klargjoring",
    label: "Klargjøring",
    tagline: "Perfekt til salg og innlevering",
    desc: "Skal du selge bilen eller levere den tilbake etter leasing? Vi klargjør bilen slik at den presenterer seg fra sin aller beste side.",
    services: [
      { name: "Bruktbilklargjøring", desc: "Komplett innvendig og utvendig klargjøring", price: "Kontakt for pris" },
      { name: "Leasinginnlevering", desc: "Klargjøring etter leasingstandard", price: "Kontakt for pris" },
      { name: "Studiofotografering", desc: "Profesjonelle bilder til salgsannonse", price: "Inkludert" },
      { name: "Ny bil-pakke", desc: "Beskytt nyinnkjøpt bil fra dag én", price: "Kontakt for pris" },
    ],
  },
  {
    id: "spesial",
    label: "Spesialbehandling",
    tagline: "De ekstra detaljene som teller",
    desc: "Noen ganger kreves det litt ekstra. Vi tilbyr et bredt utvalg spesialbehandlinger for alle behov.",
    services: [
      { name: "Lærrens", desc: "Grundig rengjøring av lærinte­riør", price: "1.190 kr" },
      { name: "Lærpleie", desc: "Nærende pleie og beskyttelse av lær", price: "790 kr" },
      { name: "Desinfeksjon", desc: "UV- og dampdesinfeksjon av hele interiøret", price: "Fra 1.950 kr" },
      { name: "Luktfjerning", desc: "Profesjonell fjerning av uønskede lukter", price: "Fra 1.950 kr" },
    ],
  },
];

export default function Biltjenester() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#111111] pt-[88px] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-4">Biltjenester</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
            ALT FOR <br />
            <span className="text-[#d24208]">BILEN DIN</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-8">
            Fra en rask vask til full lakkrenovering og langvarig coating-beskyttelse.
            Vi har tjenesten du trenger.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="bg-white/10 hover:bg-[#d24208] text-white text-sm px-4 py-2 transition-colors font-medium"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"} ${cat.highlight ? "relative overflow-hidden" : ""}`}
        >
          {cat.highlight && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#d24208]" />
          )}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left: info */}
              <div className="md:w-1/3">
                {cat.highlight && (
                  <span className="inline-block bg-[#d24208] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 mb-3">
                    Mest populær
                  </span>
                )}
                <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-2">{cat.tagline}</p>
                <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-4">{cat.label.toUpperCase()}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
                <Link href="/booking" className="btn-primary text-xs">
                  Book denne tjenesten <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right: service cards */}
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className={`p-6 border-2 ${
                      "popular" in s && s.popular
                        ? "border-[#d24208] bg-[#fff8f5]"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    {"popular" in s && s.popular && (
                      <span className="inline-block bg-[#d24208] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 mb-3">
                        Anbefalt
                      </span>
                    )}
                    <h3 className="font-bold text-[#111111] mb-1">{s.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                    {"durability" in s && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                        <Star size={11} className="text-[#d24208] fill-[#d24208]" />
                        Varighet: {s.durability}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#d24208]">{s.price}</span>
                      <Link href="/booking" className="text-xs text-gray-400 hover:text-[#d24208] transition-colors font-medium">
                        Book →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* USP-banner */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Gratis lånebil", desc: "Toyota Yaris tilgjengelig mens vi jobber med bilen din." },
              { title: "Henting & levering", desc: "Vi henter og leverer bilen din der du er." },
              { title: "Fornøyd-garanti", desc: "Ikke fornøyd? Vi gjør det om til du er det." },
            ].map((u) => (
              <div key={u.title} className="flex flex-col items-center gap-3">
                <CheckCircle2 size={28} className="text-[#d24208]" />
                <h3 className="font-bold text-white">{u.title}</h3>
                <p className="text-gray-500 text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d24208] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl text-white mb-4">KLAR TIL Å BOOKE?</h2>
          <p className="text-white/80 mb-8">Velg tjeneste, dato og tid – vi bekrefter innen kort tid.</p>
          <Link href="/booking" className="btn-outline text-sm px-10 py-4">
            Book time nå <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
