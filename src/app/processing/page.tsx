"use client";

import ProcessingIndicator from "@/components/ProcessingIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProcessingPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 py-12 px-6">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the Water Raptor site
          </Link>
          <h1 className="text-3xl font-bold text-white">Creating Your 3D Model</h1>
          <p className="text-lg text-slate-300">
            Your equipment video is being processed by Polycam so you can download the 3D result. Track
            the status below and we&rsquo;ll alert you when it&rsquo;s ready.
          </p>
        </div>

        <ProcessingIndicator />

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-6">What Happens Next?</h3>
          <div className="grid gap-6 text-sm md:grid-cols-3">
            {[
              {
                step: "Email Notification",
                detail: "You&rsquo;ll be notified when the GLB is ready to download.",
              },
              {
                step: "Download GLB",
                detail: "Grab the 3D file and preview the model in your own tools.",
              },
              {
                step: "Website Integration",
                detail: "We&rsquo;ll help embed the viewer inside your Water Raptor story.",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  {index + 1}
                </div>
                <p className="font-medium text-white">{item.step}</p>
                <p className="text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
