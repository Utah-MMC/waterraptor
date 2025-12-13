import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BriefCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm p-8 text-center shadow-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">Download</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Water Raptor services brief</h2>
        <p className="mt-4 text-sm text-slate-200">
          Request the one-sheet packed with capabilities, regional availability, and how we pair harvesting, herbicide, and dredging.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-950">
            <Link href="#contact-form">Request the brief</Link>
          </Button>
          <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
            <Link href="/resources">Explore resources</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
