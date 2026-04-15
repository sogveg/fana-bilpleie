import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  Shield,
  Droplets,
  Sparkles,
  Wrench,
  Car,
  Anchor,
  Phone,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";

// Curated Unsplash photos – swap with real customer photos before launch
const IMGS = {
  hero:       "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=85&auto=format&fit=crop",
  heroMobile: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80&auto=format&fit=crop",
  // Before/after pairs
  ba1Before:  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d0d?w=900&q=80&auto=format&fit=crop",
  ba1After:   "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=900&q=80&auto=format&fit=crop",
  ba2Before:  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&q=80&auto=format&fit=crop",
  ba2After:   "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80&auto=format&fit=crop",
  ba3Before:  "https://images.unsplash.com/photo-1504222490345-c075b7b90571?w=900&q=80&auto=format&fit=crop",
  ba3After:   "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop",
};

const services = [
  {
    icon: Droplets,
    title: "Bilvask & Vedlikehold",
    desc: "Grundig innvendig og utvendig vask med profesjonelle produkter. Fra 799 kr.",
    href: "/biltjenester#vask",
    badge: null,
    boat: false,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=75&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Polering & Renovering",
    desc: "Fjerner riper, oksidering og lakkavslit. Restorer bilens opprinnelige glans.",
    href: "/biltjenester#polering",
    badge: null,
    boat: false,
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=75&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Keramisk Coating",
    desc: "Opp til 10 års beskyttelse mot riper, UV og smuss. Titanium Extreme 2K.",
    href: "/biltjenester#coating",
    badge: "Populær",
    boat: false,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=75&auto=format&fit=crop",
  },
  {
    icon: Car,
    title: "Klargjøring",
    desc: "Perfekt til bruktbilsalg eller leasinginnlevering. Studiofotografering inkludert.",
    href: "/biltjenester#klargjoring",
    badge: null,
    boat: false,
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=75&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Spesialbehandling",
    desc: "Lærrens, desinfeksjon, luktfjerning, motorrom og mye mer.",
    href: "/biltjenester#spesial",
    badge: null,
    boat: false,
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=75&auto=format&fit=crop",
  },
  {
    icon: Anchor,
    title: "Båtavdelingen",
    desc: "Profesjonell båtpleie – polering, renovering, skrogbehandling og interiør.",
    href: "/bat",
    badge: "Ny avdeling",
    boat: true,
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=75&auto=format&fit=crop",
  },
];

const stats = [
  { value: "10+", label: "År i bransjen" },
  { value: "500+", label: "Fornøyde kunder" },
  { value: "4.9★", label: "Google-snitt" },
  { value: "1–3", label: "Dager leveringstid" },
];

const reviews = [
  {
    name: "Petter Skille",
    title: "Google · 9 anmeldelser",
    text: "Hentet min svarte Model Y 2023 som har vært inne for ripefjerning og lakkforsegling. Bilen har gått 40 000 km og var full i riper. Nå ser den ny ut! Dette var bare helt rått! Den stod der i 3 dager og jeg fikk gratis lånebil. Anbefales på det sterkeste!",
    stars: 5,
  },
  {
    name: "Henrik Tvedt",
    title: "Google · 4 anmeldelser",
    text: "Fikk behandlet min Tesla Model X 2023 med keramisk coating, inkludert coating på alle svarte deksler. Alle små lakkskader ble lakkert over, og resultatet ble helt fantastisk – bilen ser ut som ny og glansen er utrolig bra!",
    stars: 5,
  },
  {
    name: "Dag Koteng",
    title: "Google · 4 anmeldelser",
    text: "Vi har nå brukt Fana Bilpleie AS det siste året, og makan til god service, faglig dyktighet, særdeles bra arbeid må man lete lenge etter. Jeg kan gi dem de aller beste anbefalinger.",
    stars: 5,
  },
  {
    name: "Rita Niederhauser",
    title: "Google-anmeldelse",
    text: "Utførte en veldig god jobb. Det var enkelt og fleksibelt å avtale en time, og servicen var rask, imøtekommende og veldig god. I tillegg var han svært hyggelig å snakke med, høflig og vennlig.",
    stars: 5,
  },
  {
    name: "Nordisk Bilpleie",
    title: "Google · 3 anmeldelser",
    text: "Vi ønsker å gi en sterk anbefaling til Tommy hos Fana Bilpleie. Han har imponerende erfaring innen bilpleie og er spesielt dyktig på keramisk coating. Arbeidet hans holder høy faglig standard, og resultatene taler for seg selv.",
    stars: 5,
  },
  {
    name: "Karl Andre Stenevik",
    title: "Google · 4 anmeldelser",
    text: "Veldig dyktig! De tre gangene vi har vært hos Fana Bilpleie har vi vært storfornøyd hver gang. Vi kommer til å fortsette å være kunder her.",
    stars: 5,
  },
];

const usps = [
  "Gratis lånebil under behandling",
  "Henting og levering",
  "3–10 års coating-garanti",
  "Studiofotografering",
  "Åpent lørdag",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden pt-[88px]">
        {/* Background photo */}
        <Image
          src={IMGS.hero}
          alt="Profesjonell bilpleie Bergen – Fana Bilpleie"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-[#111111]/40 to-[#111111]/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d24208] opacity-10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2.5 text-white text-sm mb-8">
            {/* Google G */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-[#d24208] fill-[#d24208]" />
              ))}
            </div>
            <span className="font-bold">4,6</span>
            <span className="text-gray-300 text-xs">· 36 Google-anmeldelser</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white leading-none mb-6">
            BERGENS
            <br />
            <span className="text-[#d24208]">BESTE</span> BILPLEIE
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Fra bilvask til keramisk coating – vi gir bilen din den behandlingen den fortjener.
            Gratis lånebil. Henting og levering. Alltid fornøyd-garanti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/booking" className="btn-primary text-sm px-8 py-4">
              Book time nå <ArrowRight size={16} />
            </Link>
            <Link href="/biltjenester" className="btn-outline text-sm px-8 py-4">
              Se tjenester
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {usps.map((usp) => (
              <div
                key={usp}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 text-gray-300 text-xs"
              >
                <CheckCircle2 size={12} className="text-[#d24208]" />
                {usp}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll ned</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#d24208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl sm:text-5xl text-white">{s.value}</div>
              <div className="text-white/80 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FØR / ETTER */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Resultatene taler for seg</p>
            <h2 className="font-display text-5xl sm:text-6xl text-white">FØR &amp; ETTER</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Dra i slideren og se forskjellen profesjonell bilpleie gjør.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfter
              before={IMGS.ba1Before}
              after={IMGS.ba1After}
              label="Lakkrenovering"
            />
            <BeforeAfter
              before={IMGS.ba2Before}
              after={IMGS.ba2After}
              label="Maskinpolering"
            />
            <BeforeAfter
              before={IMGS.ba3Before}
              after={IMGS.ba3After}
              label="Keramisk Coating"
            />
          </div>
          <p className="text-center text-gray-600 text-xs mt-6">
            * Illustrasjonsbilder – erstattes med kundebilder ved lansering
          </p>
        </div>
      </section>

      {/* TJENESTER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Hva vi tilbyr</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[#111111]">VÅRE TJENESTER</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Alt fra daglig vedlikehold til fullstendig lakkrenovering og langvarig coating-beskyttelse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className={`group relative flex flex-col overflow-hidden border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    s.boat
                      ? "border-[#1a4a7a] hover:border-[#2563a8]"
                      : "border-gray-100 hover:border-[#d24208]"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {s.badge && (
                      <span className={`absolute top-3 right-3 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 ${s.boat ? "bg-[#1a4a7a]" : "bg-[#d24208]"}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  {/* Content */}
                  <div className={`p-6 flex flex-col flex-1 ${s.boat ? "bg-[#f0f5fb]" : "bg-white"}`}>
                    <div className={`w-10 h-10 flex items-center justify-center mb-4 ${s.boat ? "bg-[#1a4a7a]" : "bg-[#d24208]"}`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-bold text-[#111111] text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                    <span className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${s.boat ? "text-[#1a4a7a]" : "text-[#d24208]"} group-hover:gap-2.5 transition-all`}>
                      Les mer <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BÅTAVDELING PROMO */}
      <section className="bg-[#1a4a7a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-blue-300 font-bold text-xs tracking-widest uppercase mb-3">Ny avdeling</p>
            <h2 className="font-display text-5xl sm:text-6xl text-white leading-none mb-5">BÅTAVDELINGEN</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              Vi tar like godt vare på båten din som vi gjør med bilen. Polering, skrogbehandling,
              interiørrengjøring og renovering – med de beste produktene og håndverkerne.
            </p>
            <Link href="/bat" className="btn-outline text-sm">
              Se båttjenester <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 text-blue-100">
            {["Polering & Renovering", "Skrogbehandling", "Interiørrengjøring", "Tilbud på forespørsel"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-3 text-sm font-medium">
                <CheckCircle2 size={15} className="text-blue-300 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANMELDELSER */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="text-[#d24208] font-bold text-xs tracking-widest uppercase mb-3">Hva kundene sier</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[#111111]">ANMELDELSER</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#d24208] fill-[#d24208]" />
                ))}
              </div>
              <span className="font-bold text-[#111111]">4,6</span>
              <span className="text-gray-400 text-sm">basert på 36 Google-anmeldelser</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white p-7 border border-gray-100 flex flex-col">
                {/* Google logo + stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#d24208] fill-[#d24208]" />
                    ))}
                  </div>
                  {/* Google G icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic mb-5">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-[#111111] text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{r.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-5">
            KLAR FOR EN HELT NY <span className="text-[#d24208]">BILOPPLEVELSE?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">Book time i dag – gratis lånebil mens vi jobber.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary px-10 py-4">
              Book time nå <ArrowRight size={16} />
            </Link>
            <a href="tel:+4793493484" className="btn-outline px-10 py-4">
              <Phone size={16} /> Ring 934 934 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
