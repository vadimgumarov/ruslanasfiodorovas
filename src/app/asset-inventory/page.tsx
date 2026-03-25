import AppLayout from "@/components/AppLayout";

const inventoryData = [
  { id: "AST-001", name: "The Glass Pavilion", type: "KOMERCINIS", area: "12 400 m\u00B2", value: "\u20AC84,2M", status: "AKTYVUS" },
  { id: "AST-002", name: "Phase IV Core", type: "REZIDENCINIS", area: "8 200 m\u00B2", value: "\u20AC52,1M", status: "AKTYVUS" },
  { id: "AST-003", name: "Tower Delta", type: "KOMERCINIS", area: "22 800 m\u00B2", value: "\u20AC148,5M", status: "AKTYVUS" },
  { id: "AST-004", name: "Baltic Gateway", type: "MIŠRUS", area: "15 600 m\u00B2", value: "\u20AC96,3M", status: "PERŽIŪRA" },
  { id: "AST-005", name: "Riverside Complex", type: "REZIDENCINIS", area: "6 400 m\u00B2", value: "\u20AC38,7M", status: "AKTYVUS" },
  { id: "AST-006", name: "Northern Logistics Hub", type: "INDUSTRINIS", area: "45 200 m\u00B2", value: "\u20AC122,8M", status: "AKTYVUS" },
];

export default function AssetInventory() {
  return (
    <AppLayout activeItem="TURTAS">
      {/* Header */}
      <section className="px-8 py-8 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">
              TURTO_REGISTRAS // TIESIOGINIS
            </div>
            <h1 className="text-2xl font-black tracking-widest uppercase text-on-surface">
              TURTO INVENTORIUS
            </h1>
          </div>
          <div className="text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-1">
              PORTFELIO_VERTĖ
            </div>
            <div
              className="text-3xl font-black text-on-surface"
              style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}
            >
              &euro;842,12M
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-3 border-b border-border">
        {/* Hero Asset Card */}
        <div className="col-span-2 border-r border-border relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#0d1520] to-[#0a0e14]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
            <div className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-2">
              PAGRINDINIS_TURTAS
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase text-on-surface mb-4">
              The Glass Pavilion
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">BNP</div>
                <div className="text-sm font-bold text-on-surface mt-1" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>
                  12 400 m&sup2;
                </div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">BŪSENA</div>
                <div className="text-sm font-bold text-green-500 mt-1">AKTYVUS</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">KOORDINATĖS</div>
                <div className="text-sm font-bold text-on-surface mt-1" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>
                  54.68&deg;N 25.28&deg;E
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Telemetry Sidebar */}
        <div className="p-6 space-y-6">
          <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">
            SISTEMOS_TELEMETRIJA
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">Rinkos svyravimas</span>
              <span className="text-[10px] tracking-widest text-tertiary">ŽEMAS</span>
            </div>
            <div className="h-1.5 bg-container-high">
              <div className="h-full bg-tertiary/60 w-[28%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">Užimtumas</span>
              <span className="text-[10px] tracking-widest text-green-500" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>98,4%</span>
            </div>
            <div className="h-1.5 bg-container-high">
              <div className="h-full bg-green-500/60 w-[98.4%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">Energinis reitingas</span>
              <span className="text-[10px] tracking-widest text-green-500">A++</span>
            </div>
            <div className="h-1.5 bg-container-high">
              <div className="h-full bg-green-500/60 w-[92%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">Pelningumas</span>
              <span className="text-[10px] tracking-widest text-tertiary" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>6,8%</span>
            </div>
            <div className="h-1.5 bg-container-high">
              <div className="h-full bg-tertiary/60 w-[68%]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Smaller Cards */}
      <section className="grid grid-cols-3 border-b border-border">
        {[
          { name: "Phase IV Core", type: "REZIDENCINIS", value: "\u20AC52,1M", gradient: "from-[#1a1a2e] to-[#0a0a14]" },
          { name: "Tower Delta", type: "KOMERCINIS", value: "\u20AC148,5M", gradient: "from-[#1e2a1a] to-[#0a140a]" },
          { name: "Architektūrinės paslaugos", type: "PASLAUGA", value: "PREMIUM", gradient: "from-[#2a1a1a] to-[#140a0a]" },
        ].map((card) => (
          <div key={card.name} className="relative overflow-hidden border-r border-border last:border-r-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
            <div className="relative p-6 min-h-[180px] flex flex-col justify-end">
              <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-1">{card.type}</div>
              <div className="text-sm font-black uppercase text-on-surface tracking-wide">{card.name}</div>
              <div className="text-lg font-black text-tertiary mt-2" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{card.value}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Notifications */}
      <section className="px-8 py-6 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">PRANEŠIMŲ_SRAUTAS</div>
        <div className="space-y-2">
          {[
            { time: "14:32", msg: "Turto vertinimo ataskaita paruošta: AST-003", level: "info" },
            { time: "11:15", msg: "Naujas nuomininkas patvirtintas: Phase IV Core", level: "success" },
            { time: "09:48", msg: "Rinkos svyravimas padidėjęs sektoriuje CENTRAS_S1", level: "warning" },
          ].map((n) => (
            <div key={n.time} className="flex items-center gap-3 py-2 px-3 bg-container border border-border">
              <span className={`w-1.5 h-1.5 ${n.level === "success" ? "bg-green-500" : n.level === "warning" ? "bg-yellow-500" : "bg-tertiary"}`} />
              <span className="text-[10px] tracking-widest text-on-surface-variant/60 font-mono" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{n.time}</span>
              <span className="text-xs tracking-wide text-on-surface-variant">{n.msg}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Inventory Table */}
      <section className="px-8 py-8">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">INVENTORIAUS_REGISTRAS</div>
        <div className="border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-container-high border-b border-border">
                {["ID", "OBJEKTAS", "TIPAS", "PLOTAS", "VERTĖ", "BŪSENA"].map((h) => (
                  <th key={h} className="text-left text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 font-normal px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0 hover:bg-container transition-colors">
                  <td className="px-4 py-3 text-[10px] tracking-widest text-on-surface-variant font-mono">{row.id}</td>
                  <td className="px-4 py-3 text-xs tracking-wide text-on-surface font-semibold uppercase">{row.name}</td>
                  <td className="px-4 py-3 text-[10px] tracking-widest text-on-surface-variant uppercase">{row.type}</td>
                  <td className="px-4 py-3 text-xs text-on-surface-variant" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.area}</td>
                  <td className="px-4 py-3 text-xs font-bold text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{row.value}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] tracking-widest uppercase ${row.status === "AKTYVUS" ? "text-green-500" : "text-yellow-500"}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppLayout>
  );
}
