import AppLayout from "@/components/AppLayout";

export default function Home() {
  return (
    <AppLayout activeItem="COMMAND">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0e0e0e] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(100,172,255,0.08),_transparent_60%)]" />
        <div className="relative px-8 py-20">
          <div className="text-[10px] tracking-[0.4em] uppercase text-tertiary mb-4 border border-tertiary/30 inline-block px-3 py-1">
            OPERACINIS CENTRAS
          </div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface uppercase leading-tight max-w-3xl">
            STRATEGINES OPERACIJOS: PRADZIA
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-on-surface-variant max-w-2xl tracking-wide">
            Integruota nekilnojamojo turto valdymo platforma. Realaus laiko turto
            stebejimas, rinkos analitika ir strateginis konsultavimas Baltijos ir
            Europos rinkose.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-3 border-b border-border">
        {[
          { value: "\u20AC1.2B", label: "Valdomas Turtas", sub: "PORTFOLIO_VALUE" },
          { value: "20+", label: "Patirtis (metai)", sub: "EXPERIENCE_YRS" },
          { value: "142", label: "Aktyvus Objektai", sub: "ACTIVE_ASSETS" },
        ].map((m) => (
          <div
            key={m.sub}
            className="border-r border-border last:border-r-0 px-8 py-8"
          >
            <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">
              {m.sub}
            </div>
            <div
              className="text-3xl font-black text-on-surface"
              style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}
            >
              {m.value}
            </div>
            <div className="text-[11px] tracking-widest uppercase text-on-surface-variant mt-1">
              {m.label}
            </div>
          </div>
        ))}
      </section>

      {/* Audit Section */}
      <section className="grid grid-cols-2 border-b border-border">
        {/* Left Info */}
        <div className="px-8 py-10 border-r border-border">
          <h2 className="text-lg font-black tracking-widest uppercase text-on-surface mb-6">
            INICIJUOTI TURTO AUDITA
          </h2>
          <div className="space-y-5">
            {[
              { icon: "verified", text: "Nepriklausomas turto vertinimas pagal tarptautinius standartus" },
              { icon: "analytics", text: "Realaus laiko rinkos duomenu analitika ir prognozes" },
              { icon: "shield", text: "Konfidencialus strateginis konsultavimas" },
            ].map((item) => (
              <div key={item.icon} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">
                  {item.icon}
                </span>
                <span className="text-xs tracking-wide text-on-surface-variant leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="px-8 py-10">
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
                OBJEKTO TIPAS
              </label>
              <select className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 focus:border-tertiary focus:outline-none">
                <option>KOMERCINIS</option>
                <option>REZIDENCINIS</option>
                <option>INDUSTRINIS</option>
                <option>MISRUS</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
                TIKSLINE VERTE
              </label>
              <input
                type="text"
                placeholder="\u20AC 0.00"
                className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
                LOKACIJOS ID
              </label>
              <input
                type="text"
                placeholder="VLN_CENTRAS_01"
                className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
                PAPILDOMA INFORMACIJA
              </label>
              <textarea
                rows={3}
                placeholder="Iveskite papildoma informacija..."
                className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-[11px] tracking-[0.3em] uppercase font-semibold py-3 hover:bg-tertiary/20 transition-colors"
            >
              PATEIKTI UZKLAUSĄ
            </button>
          </form>
        </div>
      </section>

      {/* Telemetry HUD */}
      <section className="px-8 py-8 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">
          SYSTEM_TELEMETRY
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Mini bar chart */}
          <div className="bg-container border border-border p-4 col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-3">
              APKROVOS METRIKA
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 55, 80, 70, 90, 75, 85, 60, 95, 70, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-tertiary/30"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className="bg-container border border-border p-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
              LATENCY
            </div>
            <div
              className="text-2xl font-black text-on-surface"
              style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}
            >
              12ms
            </div>
            <div className="text-[9px] tracking-widest uppercase text-green-500 mt-1">
              OPTIMAL
            </div>
          </div>
          <div className="bg-container border border-border p-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">
              LOAD
            </div>
            <div
              className="text-2xl font-black text-on-surface"
              style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}
            >
              34%
            </div>
            <div className="text-[9px] tracking-widest uppercase text-tertiary mt-1">
              NOMINAL
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative border-b border-border">
        <div className="h-80 bg-gradient-to-br from-[#0d1117] via-[#131820] to-[#0a0e14] relative overflow-hidden">
          {/* Grid overlay to simulate map */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(100,172,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,172,255,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          {/* Pulsing dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-tertiary animate-pulse-dot" />
            <div className="absolute inset-0 w-3 h-3 bg-tertiary/30 animate-ping" />
          </div>
          {/* Address card overlay */}
          <div className="absolute bottom-6 left-8 bg-container/90 border border-border p-4 backdrop-blur-sm">
            <div className="text-[10px] tracking-[0.3em] uppercase text-tertiary mb-1">
              HQ_LOCATION
            </div>
            <div className="text-xs text-on-surface tracking-wide">
              Vilnius, Lietuva
            </div>
            <div className="text-[10px] text-on-surface-variant tracking-wide mt-1">
              54.6872\u00b0N, 25.2797\u00b0E
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
