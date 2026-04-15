import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss – Fana Bilpleie Bergen",
  description:
    "Lær mer om Fana Bilpleie i Rådal, Bergen. Vi er lidenskapelige bilpleiespesialister med fokus på kvalitet, ærlighet og stolthet i arbeidet.",
};

const values = [
  {
    title: "Kvalitet over alt",
    desc: "Vi tar aldri snarveier. Hvert eneste kjøretøy behandles med samme omsorg og presisjon, uansett merke eller modell.",
  },
  {
    title: "Ærlighet alltid",
    desc: "Du får en ærlig pris og ærlige råd. Vi anbefaler kun det bilen faktisk trenger – ikke mer.",
  },
  {
    title: "Stolthet i arbeidet",
    desc: "Vi er stolte av håndverket vårt. Bilen din forlater oss bare når vi selv er 100% fornøyde med resultatet.",
  },
  {
    title: "Kunden i sentrum",
    desc: "Gratis lånebil, henting og levering, og tydelig kommunikasjon. Vi gjør det enkelt for deg.",
  },
];

export default function OmOss() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#111111] pt-[88px] pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1600&q=80&auto=format&fit=crop"
          alt="Fana Bilpleie verksted Bergen"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/50 to-[#111]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-4">Om oss</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
            LIDENSKAPELIG
            <br />
            <span className="text-[#d24208]">BILPLEIE</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Vi er et lokalt verksted i Rådal som brenner for at bilen din alltid
            skal se og føles best mulig – enten det er en daglig bruker eller en
            spesiell bil som fortjener ekstra kjærlighet.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Vår historie</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-6">
              STARTET MED<br />LIDENSKAP
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                Fana Bilpleie ble grunnlagt av folk som elsker biler – og mener at alle biler
                fortjener profesjonell pleie. Fra enkle vaskejobber til komplekse lakkreparsjoner
                og keramisk coating, har vi bygget oss opp til å bli Bergen-regionens foretrukne
                bilpleiespesialister.
              </p>
              <p>
                Vi holder til på Nedre Nøttveit i Rådal, lett tilgjengelig fra hele Bergensregionen.
                Med gratis lånebil og henting/levering gjør vi det enkelt å ta vare på bilen – uten
                at det skal gå ut over hverdagen din.
              </p>
              <p>
                I 2025 åpnet vi vår nye <strong>Båtavdeling</strong> – fordi vi vet at
                norske fjorder er vakre, men harde mot båten din. Samme presisjon, samme
                produkter, samme stolthet.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=900&q=80&auto=format&fit=crop"
                alt="Fana Bilpleie – profesjonelt håndverk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10+", label: "År i bransjen" },
                { num: "500+", label: "Fornøyde kunder" },
                { num: "4.9★", label: "Google-snitt" },
                { num: "100%", label: "Fornøyd-garanti" },
              ].map((s) => (
                <div key={s.label} className="bg-[#111111] p-6 text-center">
                  <div className="font-display text-4xl text-[#d24208] mb-1">{s.num}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Hva vi står for</p>
            <h2 className="font-display text-5xl text-[#111111]">VÅRE VERDIER</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-gray-100">
                <div className="w-2 h-10 bg-[#d24208] mb-5" />
                <h3 className="font-bold text-[#111111] text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Finn oss</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-6">LOKASJONEN</h2>
            <ul className="flex flex-col gap-5 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d24208] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111]">Adresse</div>
                  <div className="text-sm mt-1">Nedre Nøttveit 62, 5238 Rådal, Bergen</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#d24208] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111]">Åpningstider</div>
                  <div className="text-sm mt-1">Man–Fre: 09:00–18:00<br />Lørdag: 10:00–16:00<br />Søndag: Stengt</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#d24208] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111]">Telefon</div>
                  <a href="tel:+4793493484" className="text-sm mt-1 hover:text-[#d24208] transition-colors block">934 934 84</a>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <Link href="/booking" className="btn-primary text-sm">
                Book time <ArrowRight size={14} />
              </Link>
              <a
                href="https://maps.google.com/?q=Nedre+N%C3%B8ttveit+62,+5238+R%C3%A5dal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark text-sm"
              >
                Kart
              </a>
            </div>
          </div>
          {/* Map embed placeholder */}
          <div className="w-full h-80 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
              Google Maps embed<br />
              <span className="text-xs">(legges inn ved lansering)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d24208] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl text-white mb-4">LA OSS BEVISE DET</h2>
          <p className="text-white/80 mb-8">Book en time og opplev forskjellen selv.</p>
          <Link href="/booking" className="btn-outline text-sm px-10 py-4">
            Book time nå <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
