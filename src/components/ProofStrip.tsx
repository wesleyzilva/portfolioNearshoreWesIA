"use client";

import { useState, useEffect } from "react";

const PROOF_ITEMS = [
  { value: "14+", label: "years in tech delivery" },
  { value: "80M+", label: "transactions / day" },
  { value: "99.9%", label: "SLA maintained" },
  { value: "45%", label: "MTTR reduction" },
  { value: "R$500M+", label: "reconciled / month" },
  { value: "50+", label: "engineers led" },
  { value: "8", label: "countries · 3 continents" },
  { value: "UTC-3", label: "aligned with NY & London" },
];

const VISIBLE = 4;

export default function ProofStrip() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setOffset((o) => (o + 1) % PROOF_ITEMS.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  const items = Array.from(
    { length: VISIBLE },
    (_, i) => PROOF_ITEMS[(offset + i) % PROOF_ITEMS.length]
  );

  return (
    <div className="w-full border-t border-[#415A77]/30 bg-[#0A2540]/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-8 py-4">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-sm text-[#E0E1DD]/60"
          >
            <strong className="text-[#4CC9F0] font-bold text-base tabular-nums">
              {item.value}
            </strong>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
