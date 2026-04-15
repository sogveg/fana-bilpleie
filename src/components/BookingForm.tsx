"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Car, Anchor } from "lucide-react";

const bilTjenester = [
  "Bilvask Deluxe",
  "Interiørvask",
  "Vask + Maskinpolitur",
  "Lakkrenovering",
  "Keramisk Coating – QP-ON 2.0",
  "Keramisk Coating – OneCoat Extreme",
  "Keramisk Coating – Titanium Extreme 2K",
  "Klargjøring (salg/leasing)",
  "Lærrens & Lærpleie",
  "Desinfeksjon",
  "Luktfjerning",
  "Annet – beskriv i kommentarfeltet",
];

const batTjenester = [
  "Polering & Renovering",
  "Skrogbehandling",
  "Interiørrengjøring",
  "Komplett Sesongpakke",
  "Annet – beskriv i kommentarfeltet",
];

type Step = 1 | 2 | 3 | "done";

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [department, setDepartment] = useState<"bil" | "bat" | "">("");
  const [form, setForm] = useState({
    tjeneste: "",
    dato: "",
    tid: "",
    navn: "",
    telefon: "",
    epost: "",
    regNr: "",
    lånebil: false,
    henting: false,
    kommentar: "",
  });

  const tjenester = department === "bil" ? bilTjenester : department === "bat" ? batTjenester : [];

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with backend/email API
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="bg-white border border-gray-100 p-10 text-center">
        <CheckCircle2 size={52} className="text-[#d24208] mx-auto mb-5" />
        <h2 className="font-display text-4xl text-[#111111] mb-3">BOOKING MOTTATT!</h2>
        <p className="text-gray-500 text-lg mb-2">
          Takk, <strong>{form.navn}</strong>! Vi bekrefter bookingen din innen kort tid.
        </p>
        <p className="text-gray-400 text-sm">
          Bekreftelse sendes til <strong>{form.epost}</strong> og <strong>{form.telefon}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-8">
      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-8">
        {([1, 2, 3] as const).map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors ${step === s ? "bg-[#d24208] text-white" : (step as number) > s ? "bg-[#111111] text-white" : "bg-gray-100 text-gray-400"}`}>
              {(step as number) > s ? "✓" : s}
            </div>
            {s < 3 && <div className={`h-px w-8 ${(step as number) > s ? "bg-[#d24208]" : "bg-gray-200"}`} />}
          </div>
        ))}
        <span className="ml-3 text-sm text-gray-500 font-medium">
          {step === 1 ? "Velg avdeling og tjeneste" : step === 2 ? "Velg dato og tid" : "Dine opplysninger"}
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Avdeling + tjeneste */}
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-3 tracking-wide">
                Velg avdeling *
              </label>
              <div className="grid grid-cols-2 gap-4">
                {(["bil", "bat"] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => { setDepartment(d); update("tjeneste", ""); }}
                    className={`flex flex-col items-center gap-3 p-6 border-2 transition-all ${department === d ? (d === "bil" ? "border-[#d24208] bg-[#fff8f5]" : "border-[#1a4a7a] bg-[#f0f5fb]") : "border-gray-100 hover:border-gray-300"}`}
                  >
                    {d === "bil" ? <Car size={28} className={department === "bil" ? "text-[#d24208]" : "text-gray-400"} /> : <Anchor size={28} className={department === "bat" ? "text-[#1a4a7a]" : "text-gray-400"} />}
                    <span className={`font-bold text-sm uppercase tracking-wide ${department === d ? (d === "bil" ? "text-[#d24208]" : "text-[#1a4a7a]") : "text-gray-500"}`}>
                      {d === "bil" ? "Biltjenester" : "Båtavdelingen"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {department && (
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                  Velg tjeneste *
                </label>
                <select
                  required
                  value={form.tjeneste}
                  onChange={(e) => update("tjeneste", e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] bg-white"
                >
                  <option value="">-- Velg tjeneste --</option>
                  {tjenester.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="button"
              disabled={!department || !form.tjeneste}
              onClick={() => setStep(2)}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Neste steg <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Dato + tid */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Ønsket dato *</label>
              <input
                required
                type="date"
                value={form.dato}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => update("dato", e.target.value)}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Ønsket tid *</label>
              <select
                required
                value={form.tid}
                onChange={(e) => update("tid", e.target.value)}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] bg-white"
              >
                <option value="">-- Velg tid --</option>
                {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.lånebil}
                  onChange={(e) => update("lånebil", e.target.checked)}
                  className="w-4 h-4 accent-[#d24208]"
                />
                <span className="text-sm text-gray-600">Jeg ønsker gratis lånebil (Toyota Yaris)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.henting}
                  onChange={(e) => update("henting", e.target.checked)}
                  className="w-4 h-4 accent-[#d24208]"
                />
                <span className="text-sm text-gray-600">Jeg ønsker henting og levering av kjøretøyet</span>
              </label>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-outline-dark flex-1 justify-center">
                Tilbake
              </button>
              <button
                type="button"
                disabled={!form.dato || !form.tid}
                onClick={() => setStep(3)}
                className="btn-primary flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Neste <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Kontaktinfo */}
        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Navn *</label>
                <input required type="text" value={form.navn} onChange={(e) => update("navn", e.target.value)}
                  placeholder="Ola Nordmann"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Telefon *</label>
                <input required type="tel" value={form.telefon} onChange={(e) => update("telefon", e.target.value)}
                  placeholder="934 934 84"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">E-post *</label>
              <input required type="email" value={form.epost} onChange={(e) => update("epost", e.target.value)}
                placeholder="ola@eksempel.no"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208]" />
            </div>
            {department === "bil" && (
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                  Registreringsnummer <span className="text-gray-400 font-normal">(valgfritt)</span>
                </label>
                <input type="text" value={form.regNr} onChange={(e) => update("regNr", e.target.value.toUpperCase())}
                  placeholder="AB 12345"
                  maxLength={8}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] uppercase" />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                Kommentar <span className="text-gray-400 font-normal">(valgfritt)</span>
              </label>
              <textarea value={form.kommentar} onChange={(e) => update("kommentar", e.target.value)}
                rows={3}
                placeholder="Beskriv gjerne tilstanden på bilen eller spesielle ønsker..."
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] resize-none" />
            </div>

            {/* Summary */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-gray-600 border border-gray-100">
              <div className="font-bold text-[#111111] mb-2">Oppsummering</div>
              <div className="flex justify-between"><span>Avdeling:</span><span className="font-medium">{department === "bil" ? "Biltjenester" : "Båtavdelingen"}</span></div>
              <div className="flex justify-between"><span>Tjeneste:</span><span className="font-medium">{form.tjeneste}</span></div>
              <div className="flex justify-between"><span>Dato:</span><span className="font-medium">{form.dato} kl. {form.tid}</span></div>
              {form.lånebil && <div className="flex justify-between"><span>Lånebil:</span><span className="font-medium text-[#d24208]">Ja</span></div>}
              {form.henting && <div className="flex justify-between"><span>Henting/levering:</span><span className="font-medium text-[#d24208]">Ja</span></div>}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="btn-outline-dark flex-1 justify-center">
                Tilbake
              </button>
              <button type="submit" className="btn-primary flex-1 justify-center">
                Send booking <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
