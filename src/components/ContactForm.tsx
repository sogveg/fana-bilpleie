"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ navn: "", telefon: "", epost: "", emne: "", melding: "" });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with email API
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-white border border-gray-100 p-10 text-center">
        <CheckCircle2 size={52} className="text-[#d24208] mx-auto mb-5" />
        <h2 className="font-display text-4xl text-[#111111] mb-3">MELDING SENDT!</h2>
        <p className="text-gray-500">Takk for henvendelsen, <strong>{form.navn}</strong>! Vi svarer innen 1 virkedag.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-8">
      <h2 className="font-display text-3xl text-[#111111] mb-6">SEND OSS EN MELDING</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Navn *</label>
            <input required type="text" value={form.navn} onChange={(e) => update("navn", e.target.value)}
              placeholder="Ola Nordmann"
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208]" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Telefon</label>
            <input type="tel" value={form.telefon} onChange={(e) => update("telefon", e.target.value)}
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
        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Emne *</label>
          <select required value={form.emne} onChange={(e) => update("emne", e.target.value)}
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] bg-white">
            <option value="">-- Velg emne --</option>
            <option>Prisforespørsel – Biltjenester</option>
            <option>Prisforespørsel – Båtavdelingen</option>
            <option>Spørsmål om keramisk coating</option>
            <option>Spørsmål om booking</option>
            <option>Annet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">Melding *</label>
          <textarea required value={form.melding} onChange={(e) => update("melding", e.target.value)}
            rows={5}
            placeholder="Beskriv hva du lurer på eller hva du ønsker hjelp med..."
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#d24208] resize-none" />
        </div>
        <button type="submit" className="btn-primary self-start">
          Send melding <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
