import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudySection() {
  return (
    <section className="bg-slate-900/85 backdrop-blur-sm py-16">
      <div className="container mx-auto space-y-6 px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Field proof</p>
          <h2 className="text-3xl font-bold text-white">Regional case studies with The Water Raptor</h2>
          <p className="text-sm text-slate-200 max-w-3xl mx-auto">
            Every deployment includes data, imagery, and a clear plan for the next maintenance cycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.title}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-sm shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* Claw trademark in top right */}
                <div className="absolute top-3 right-3 z-10">
                  <img
                    src="/images/graphics/clawssss.svg"
                    alt="Water Raptor trademark"
                    className="w-8 h-8 opacity-80"
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7499%) hue-rotate(200deg) brightness(100%) contrast(100%)' }}
                  />
                </div>
              </div>
              <div className="space-y-2 p-5 text-sm text-slate-200">
                <div className="text-emerald-200 text-xs uppercase tracking-[0.3em]">
                  {study.focus}
                </div>
                <h3 className="text-lg font-bold text-white">{study.title}</h3>
                <p>{study.summary}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{study.metrics}</p>
                <Button variant="ghost" className="text-emerald-300 hover:text-white" asChild>
                  <Link href={study.href}>See the deployment</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
