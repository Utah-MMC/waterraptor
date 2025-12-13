"use client";

import { useState } from "react";
import IntroSplash from "@/components/IntroSplash";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <IntroSplash onDone={() => setDone(true)} />}
      <div className={done ? "opacity-100 transition-opacity duration-300" : "opacity-0"}>{children}</div>
    </>
  );
}

