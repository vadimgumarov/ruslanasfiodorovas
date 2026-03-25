import AppLayout from "@/components/AppLayout";

const neighborhoodData = [
  { id: "CENTRAS_S1", velocity: "+8,2%", volume: "342", avgPrice: "\u20AC3 840/m\u00B2", trend: "up" },
  { id: "SENAMIESTIS_A", velocity: "+5,1%", volume: "187", avgPrice: "\u20AC4 920/m\u00B2", trend: "up" },
  { id: "NAUJAMIESTIS_D3", velocity: "-1,4%", volume: "256", avgPrice: "\u20AC2 680/m\u00B2", trend: "down" },
  { id: "ŽIRMŪNAI_B2", velocity: "+3,7%", volume: "198", avgPrice: "\u20AC2 150/m\u00B2", trend: "up" },
  { id: "ANTAKALNIS_C1", velocity: "+6,3%", volume: "124", avgPrice: "\u20AC3 210/m\u00B2", trend: "up" },
];

export default function MarketIntelligence() {
  return (
    <AppLayout activeItem="STRATEGIJA">
      {/* Header */}
      <section className="px-8 py-8 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">
              ŽVALGYBOS_MODULIS // KLASIFIKUOTA
            </div>
            <h1 className="text-2xl font-black tracking-widest uppercase text-on-surface">
              RINKOS ŽVALGYBA
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 animate-pulse-dot" />
            <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
              ATNAUJINTA: 2026-03-24 09:42 UTC
            </span>
          </div>
        </div>
      </section>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-3 border-b border-border">
        {/* Main KPI with bar chart */}
        <div className="col-span-2 border-r border-border p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-1">
                VIDUTINĖ SANDORIŲ VERTĖ
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>
                  &euro;2,84M
                </span>
                <span className="text-sm font-bold text-green-500">+12,4%</span>
              </div>
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/40">12MĖN_SLENKANTIS</div>
          </div>
          <div className="flex items-end gap-2 h-40">
            {[35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 82, 88].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full ${i === 11 ? "bg-tertiary" : "bg-tertiary/30"}`} style={{ height: `${h}%` }} />
                <span className="text-[8px] text-on-surface-variant/40" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right KPI column */}
        <div className="flex flex-col">
          <div className="p-6 border-b border-border flex-1">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">LIKVIDUMO KOEFICIENTAS</div>
            <div className="text-4xl font-black text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>0,84</div>
            <div className="mt-3 h-1.5 bg-container-high">
              <div className="h-full bg-tertiary/60 w-[84%]" />
            </div>
            <div className="text-[9px] tracking-widest uppercase text-tertiary mt-2">AUKŠTESNIS NEI VIDURKIS</div>
          </div>
          <div className="p-6 flex-1">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">RINKOS ĮSISAVINIMAS</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>68,2</span>
              <span className="text-sm font-bold text-on-surface-variant uppercase">Dienos</span>
            </div>
            <div className="mt-3 h-1.5 bg-container-high">
              <div className="h-full bg-secondary/60 w-[68%]" />
            </div>
            <div className="text-[9px] tracking-widest uppercase text-secondary mt-2">VIDUTINIS LAIKOTARPIS</div>
          </div>
        </div>
      </section>

      {/* Neighborhood Velocity Table */}
      <section className="px-8 py-8 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">KVARTALŲ_DINAMIKA</div>
        <div className="border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-container-high border-b border-border">
                {["SEKTORIUS", "GREITIS", "APIMTIS", "VID. KAINA", "TENDENCIJA"].map((h) => (
                  <th key={h} className="text-left text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 font-normal px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {neighborhoodData.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0 hover:bg-container transition-colors">
                  <td className="px-4 py-3 text-xs tracking-widest text-on-surface font-bold font-mono uppercase">{row.id}</td>
                  <td className={`px-4 py-3 text-xs font-bold ${row.trend === "up" ? "text-green-500" : "text-red-400"}`} style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.velocity}</td>
                  <td className="px-4 py-3 text-xs text-on-surface-variant" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.volume}</td>
                  <td className="px-4 py-3 text-xs font-bold text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.avgPrice}</td>
                  <td className="px-4 py-3">
                    <span className="material-symbols-outlined text-sm" style={{ color: row.trend === "up" ? "#22c55e" : "#f87171" }}>
                      {row.trend === "up" ? "trending_up" : "trending_down"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Map + Telemetry */}
      <section className="grid grid-cols-3 border-b border-border">
        <div className="col-span-2 relative border-r border-border overflow-hidden">
          <div className="h-72 bg-gradient-to-br from-[#0d1117] via-[#131820] to-[#0a0e14] relative">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(100,172,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,172,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
            </div>
            {[
              { top: "30%", left: "40%", size: "w-4 h-4" },
              { top: "50%", left: "55%", size: "w-3 h-3" },
              { top: "35%", left: "65%", size: "w-2.5 h-2.5" },
              { top: "60%", left: "35%", size: "w-2 h-2" },
              { top: "45%", left: "48%", size: "w-3.5 h-3.5" },
            ].map((dot, i) => (
              <div key={i} className={`absolute ${dot.size} bg-tertiary/40 animate-pulse-dot`} style={{ top: dot.top, left: dot.left, animationDelay: `${i * 0.4}s` }} />
            ))}
            <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/40">VILNIUS_METRO // ŠILUMOS_ŽEMĖLAPIS</div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">ŽEMĖLAPIO_TELEMETRIJA</div>
          {[
            { label: "AKTYVŪS TAŠKAI", value: "2 847" },
            { label: "SANDORIŲ / 24V", value: "156" },
            { label: "VID. KAINA / M\u00B2", value: "\u20AC3 240" },
            { label: "ZONOS EKSPANSIJA", value: "+4,2%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-container border border-border p-3">
              <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">{stat.label}</div>
              <div className="text-lg font-black text-on-surface mt-1" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Insights */}
      <section className="px-8 py-8">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">STRATEGINĖS_ĮŽVALGOS</div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "trending_up", title: "KOMERCINIO SEKTORIAUS AUGIMAS", text: "Vilniaus komercinio NT sektorius rodo 12,4% metinius augimo rodiklius, viršijant Baltijos vidurkius." },
            { icon: "warning", title: "REGULIACINIS ATNAUJINIMAS", text: "Nauji energinio efektyvumo reikalavimai įsigalios 2026 III ketv. Rekomenduojamas išankstinis auditas." },
            { icon: "psychology", title: "INVESTICIJŲ GALIMYBĖ", text: "Naujamiesčio D3 sektorius rodo neįprastai didelių nuolaidų. Strateginė akumuliacija rekomenduojama." },
          ].map((insight) => (
            <div key={insight.title} className="bg-container border border-border p-5">
              <span className="material-symbols-outlined text-tertiary text-lg mb-3 block">{insight.icon}</span>
              <div className="text-[11px] tracking-widest uppercase text-on-surface font-bold mb-2">{insight.title}</div>
              <p className="text-[11px] leading-relaxed text-on-surface-variant tracking-wide">{insight.text}</p>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
