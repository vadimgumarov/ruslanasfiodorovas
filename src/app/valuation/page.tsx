import AppLayout from "@/components/AppLayout";

export default function Valuation() {
  return (
    <AppLayout activeItem="ARCHYVAS">
      {/* Header */}
      <section className="px-8 py-8 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">
              ARCHYVO_MODULIS // VERTINIMO_VARIKLIS
            </div>
            <h1 className="text-2xl font-black tracking-widest uppercase text-on-surface">
              VERTINIMO ARCHYVAS
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">schedule</span>
            <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">PASKUTINIS ATNAUJINIMAS: 2026-03-24</span>
          </div>
        </div>
      </section>

      {/* Summary KPIs */}
      <section className="grid grid-cols-4 border-b border-border">
        {[
          { label: "BENDRAS VERTINIMŲ SK.", value: "847", sub: "VISI_VERTINIMAI" },
          { label: "BENDRA VERTĖ", value: "\u20AC2,4B", sub: "BENDRA_VERTĖ" },
          { label: "VID. TIKSLUMAS", value: "97,2%", sub: "TIKSLUMO_RODIKLIS" },
          { label: "AKTYVŪS MODELIAI", value: "12", sub: "AKTYVŪS_MODELIAI" },
        ].map((kpi) => (
          <div key={kpi.sub} className="border-r border-border last:border-r-0 px-6 py-6">
            <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">{kpi.sub}</div>
            <div className="text-2xl font-black text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{kpi.value}</div>
            <div className="text-[10px] tracking-widest uppercase text-on-surface-variant mt-1">{kpi.label}</div>
          </div>
        ))}
      </section>

      {/* Recent Valuations Table */}
      <section className="px-8 py-8 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">PASKUTINIAI_VERTINIMAI</div>
        <div className="border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-container-high border-b border-border">
                {["ID", "OBJEKTAS", "TIPAS", "VERTĖ", "DATA", "STATUSAS"].map((h) => (
                  <th key={h} className="text-left text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 font-normal px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { id: "VAL-0847", name: "The Glass Pavilion", type: "KOMERCINIS", value: "\u20AC84,2M", date: "2026-03-22", status: "PATVIRTINTAS" },
                { id: "VAL-0846", name: "Phase IV Core", type: "REZIDENCINIS", value: "\u20AC52,1M", date: "2026-03-20", status: "PATVIRTINTAS" },
                { id: "VAL-0845", name: "Tower Delta", type: "KOMERCINIS", value: "\u20AC148,5M", date: "2026-03-18", status: "PERŽIŪRIMAS" },
                { id: "VAL-0844", name: "Baltic Gateway", type: "MIŠRUS", value: "\u20AC96,3M", date: "2026-03-15", status: "PATVIRTINTAS" },
                { id: "VAL-0843", name: "Northern Logistics Hub", type: "INDUSTRINIS", value: "\u20AC122,8M", date: "2026-03-12", status: "PATVIRTINTAS" },
              ].map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0 hover:bg-container transition-colors">
                  <td className="px-4 py-3 text-[10px] tracking-widest text-on-surface-variant font-mono">{row.id}</td>
                  <td className="px-4 py-3 text-xs tracking-wide text-on-surface font-semibold uppercase">{row.name}</td>
                  <td className="px-4 py-3 text-[10px] tracking-widest text-on-surface-variant uppercase">{row.type}</td>
                  <td className="px-4 py-3 text-xs font-bold text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.value}</td>
                  <td className="px-4 py-3 text-[10px] tracking-widest text-on-surface-variant font-mono" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.date}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] tracking-widest uppercase ${row.status === "PATVIRTINTAS" ? "text-green-500" : "text-yellow-500"}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Valuation Models */}
      <section className="px-8 py-8">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">VERTINIMO_MODELIAI</div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "calculate", title: "DCF MODELIS", desc: "Diskontuotų pinigų srautų analizė. Standartinis vertinimo metodas komerciniams objektams.", status: "AKTYVUS" },
            { icon: "compare_arrows", title: "PALYGINAMASIS", desc: "Rinkos palyginimo metodas pagal panašių objektų sandorių duomenis.", status: "AKTYVUS" },
            { icon: "precision_manufacturing", title: "PAJAMŲ METODAS", desc: "Pajamų kapitalizacijos metodas investiciniam nekilnojamajam turtui.", status: "AKTYVUS" },
          ].map((model) => (
            <div key={model.title} className="bg-container border border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="material-symbols-outlined text-tertiary text-lg">{model.icon}</span>
                <span className="text-[9px] tracking-widest uppercase text-green-500">{model.status}</span>
              </div>
              <div className="text-[11px] tracking-widest uppercase text-on-surface font-bold mb-2">{model.title}</div>
              <p className="text-[11px] leading-relaxed text-on-surface-variant tracking-wide">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
