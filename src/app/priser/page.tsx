import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Priser – Bilvask, Coating og Båtpleie Bergen",
  description:
    "Se priser på alle tjenester hos Fana Bilpleie. Bilvask fra 799 kr, keramisk coating fra 1.400 kr, lakkrenovering fra 1.950 kr. Gratis lånebil.",
};

const priceSections = [
  {
    title: "Bilvask & Vedlikehold",
    rows: [
      { name: "Bilvask Deluxe", desc: "Utvendig vask, felgrens, tørk og glans", price: "Fra 799 kr" },
      { name: "Interiørvask", desc: "Støvsuging, rengjøring av flater og matter", price: "Fra 1.950 kr" },
      { name: "Motorromsvask", desc: "Grundig vask av motorrom", price: "350 kr" },
      { name: "Motorromsdetal", desc: "Komplett detaljering av motorrom", price: "750 kr" },
    ],
  },
  {
    title: "Polering & Renovering",
    rows: [
      { name: "Vask + Maskinpolitur", desc: "Enstegs maskinpolering", price: "Fra 1.790 kr" },
      { name: "Lakkrenovering", desc: "Fullstendig flerstegs renovering", price: "Fra 1.950 kr" },
      { name: "Strip Reduction", desc: "Fjerning av swirl-merker og riper", price: "550 kr/time" },
      { name: "Minilakkering", desc: "Reparasjon av småskader", price: "Fra 1.150 kr" },
    ],
  },
  {
    title: "Spesialbehandling",
    rows: [
      { name: "Lærrens", desc: "Grundig rengjøring av lær", price: "1.190 kr" },
      { name: "Lærpleie", desc: "Nærende lærpleie og beskyttelse", price: "790 kr" },
      { name: "Desinfeksjon", desc: "UV- og dampdesinfeksjon", price: "Fra 1.950 kr" },
      { name: "Luktfjerning", desc: "Profesjonell fjerning av lukter", price: "Fra 1.950 kr" },
    ],
  },
];

const coatingPackages = [
  {
    name: "QP-ON 2.0 Hybrid",
    price: "1.400 kr",
    durability: "1–2 år",
    desc: "Enkel og effektiv coating for hverdagsbeskyttelse.",
    features: ["Vannavvisende effekt", "UV-beskyttelse", "Enkel påføring", "God for nyere biler"],
    popular: false,
  },
  {
    name: "OneCoat Extreme",
    price: "4.990 kr",
    durability: "3–5 år",
    desc: "Premium keramisk coating med kraftig vannavvisning og glans.",
    features: ["Ekstremt vannavvisende", "Ripebestandig", "Dypglans finish", "Kjemikalieresistent", "Sertifikatbehandling"],
    popular: true,
  },
  {
    name: "Titanium Extreme 2K",
    price: "Fra 7.990 kr",
    durability: "5–10 år",
    desc: "Vår beste og mest langvarige coating. For de som vil ha det aller beste.",
    features: ["10 års beskyttelse", "Tokomponent-teknologi", "Hardest keramisk coating", "Komplett lakk-behandling", "Garanti inkludert"],
    popular: false,
  },
];

export default function Priser() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#111111] pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-4">Prisliste</p>
          <h1 className="font-display text-6xl sm:text-7xl text-white leading-none mb-6">
            TYDELIGE PRISER,
            <br />
            <span className="text-[#d24208]">INGEN OVERRASKELSER</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Vi tror på transparens. Her finner du priser på alle våre tjenester.
            Usikker? Ring oss – vi gir uforpliktende veiledning.
          </p>
        </div>
      </section>

      {/* COATING PACKAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Flaggskip-produkt</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[#111111]">KERAMISK COATING</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Velg riktig nivå av beskyttelse for din bil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coatingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 border-2 flex flex-col ${
                  pkg.popular
                    ? "border-[#d24208] bg-white shadow-xl scale-[1.02]"
                    : "border-gray-100 bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d24208] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5">
                    Mest populær
                  </div>
                )}
                <div className="mb-1">
                  <h3 className="font-bold text-[#111111] text-lg">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <Star size={12} className="text-[#d24208] fill-[#d24208]" />
                    <span className="text-sm text-gray-500">Varighet: {pkg.durability}</span>
                  </div>
                  <div className="font-display text-4xl text-[#d24208] mb-3">{pkg.price}</div>
                  <p className="text-gray-500 text-sm mb-5">{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-[#d24208] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className={pkg.popular ? "btn-primary justify-center text-sm" : "btn-outline-dark justify-center text-sm"}>
                  Velg denne <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE TABLES */}
      {priceSections.map((section, idx) => (
        <section key={section.title} className={`py-16 ${idx % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-4xl text-[#111111] mb-8">{section.title.toUpperCase()}</h2>
            <div className="border border-gray-200 overflow-hidden">
              {section.rows.map((row, i) => (
                <div
                  key={row.name}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${i !== 0 ? "border-t border-gray-100" : ""} hover:bg-[#fff8f5] transition-colors`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-[#111111]">{row.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{row.desc}</div>
                  </div>
                  <div className="font-bold text-[#d24208] text-right shrink-0">{row.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Boat note */}
      <section className="bg-[#1a4a7a] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-3">BÅTPLEIE</h2>
          <p className="text-blue-100 mb-6">
            Priser på båttjenester gis på forespørsel – alle båter er forskjellige.
            Kontakt oss for et uforpliktende tilbud.
          </p>
          <Link href="/bat" className="btn-outline text-sm">
            Se båttjenester <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">USIKKER PÅ HVILKEN TJENESTE?</h2>
          <p className="text-gray-400 mb-8">Ring oss – vi hjelper deg å velge riktig behandling for din bil.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary text-sm px-8 py-4">
              Book time <ArrowRight size={16} />
            </Link>
            <a href="tel:+4793493484" className="btn-outline text-sm px-8 py-4">
              Ring 934 934 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
