"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, Search, Users } from "lucide-react";

export function BookingWidget({ hotelName }: { hotelName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const checkIn = String(data.get("checkIn") || "");
    const checkOut = String(data.get("checkOut") || "");
    if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 650);
  };
  return (
    <aside id="booking-widget" aria-label={`Quick booking for ${hotelName}`} className="relative z-20 mx-auto -mt-8 max-w-[1280px] px-6 sm:px-10 lg:sticky lg:top-24">
      <form onSubmit={submit} aria-busy={status === "loading"} className="grid gap-4 rounded-[24px] border border-white/50 bg-[#fffdf8]/94 p-5 shadow-[0_24px_65px_rgba(21,48,36,.18)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_.85fr_.75fr_auto] lg:items-end lg:p-6">
        <Field label="Check-in" icon={CalendarDays}><input required name="checkIn" aria-label="Check-in date" type="date" className="w-full bg-transparent text-sm outline-none" /></Field>
        <Field label="Check-out" icon={CalendarDays}><input required name="checkOut" aria-label="Check-out date" type="date" className="w-full bg-transparent text-sm outline-none" /></Field>
        <Field label="Guests" icon={Users}><select aria-label="Number of guests" className="w-full bg-transparent text-sm outline-none"><option>2 Guests</option><option>1 Guest</option><option>3 Guests</option><option>4 Guests</option></select></Field>
        <Field label="Rooms" icon={Search}><select aria-label="Number of rooms" className="w-full bg-transparent text-sm outline-none"><option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option></select></Field>
        <button disabled={status === "loading"} type="submit" className="h-14 rounded-full bg-[var(--emerald)] px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)]">{status === "loading" ? "Checking…" : "Book Now"}</button>
        {status === "error" && <p role="alert" className="text-[11px] text-[#9b392f] sm:col-span-2 lg:col-span-5">Choose valid check-in and check-out dates.</p>}
        {status === "success" && <p role="status" className="text-[11px] text-[var(--emerald)] sm:col-span-2 lg:col-span-5">Dates received. Continue with Call or WhatsApp for live availability and confirmation.</p>}
      </form>
    </aside>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof CalendarDays; children: React.ReactNode }) {
  return <label className="block rounded-[16px] border border-[#173c2b]/10 bg-white px-4 py-3"><span className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[#637168]"><Icon size={13} className="text-[var(--emerald)]" />{label}</span>{children}</label>;
}
