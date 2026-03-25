import AppLayout from "@/components/AppLayout";

export default function Advisory() {
  return (
    <AppLayout activeItem="ADVISORY">
      {/* Header */}
      <section className="px-8 py-8 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">
              SECURE_CHANNEL // ENCRYPTED
            </div>
            <h1 className="text-2xl font-black tracking-widest uppercase text-on-surface">
              UZKLAUSĄ
            </h1>
          </div>
          <div className="flex items-center gap-2 border border-tertiary/30 px-3 py-1">
            <span className="material-symbols-outlined text-tertiary text-sm">lock</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-tertiary">CONFIDENTIAL ACCESS</span>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Terminal */}
      <section className="grid grid-cols-5 border-b border-border">
        {/* Main Form */}
        <div className="col-span-3 border-r border-border p-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-6">
            INQUIRY_FORM // SUBMIT_REQUEST
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">SUBJEKTAS / VARDAS</label>
                <input type="text" placeholder="Iveskite varda..." className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">KONTAKTINIS EL. PASTAS</label>
                <input type="email" placeholder="email@domain.lt" className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">TURTO KATEGORIJA</label>
              <select className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 focus:border-tertiary focus:outline-none">
                <option>KOMERCINIS NEKILNOJAMASIS TURTAS</option>
                <option>REZIDENCINIS NEKILNOJAMASIS TURTAS</option>
                <option>INDUSTRINIS NEKILNOJAMASIS TURTAS</option>
                <option>INVESTICINIU FONDU VALDYMAS</option>
                <option>STRATEGINIS KONSULTAVIMAS</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-2">UZKLAUSOS TURINYS</label>
              <textarea rows={6} placeholder="Detalizuokite savo uzklausą..." className="w-full bg-container border border-border text-on-surface text-xs tracking-wide px-3 py-2.5 placeholder:text-on-surface-variant/40 focus:border-tertiary focus:outline-none resize-none" />
            </div>

            <div className="flex items-center gap-2 py-2">
              <span className="material-symbols-outlined text-green-500 text-sm">enhanced_encryption</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">AES-256 ENCRYPTION // END-TO-END SECURED</span>
            </div>

            <button type="submit" className="w-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-[11px] tracking-[0.3em] uppercase font-semibold py-3 hover:bg-tertiary/20 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">send</span>
              TRANSMIT_INQUIRY
            </button>
          </form>
        </div>

        {/* Terminal Output */}
        <div className="col-span-2 flex flex-col">
          <div className="p-6 border-b border-border">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">SYSTEM_STATUS</div>
            <div className="space-y-2">
              {[
                { label: "ENCRYPTION", status: "ACTIVE", color: "text-green-500" },
                { label: "CHANNEL", status: "SECURED", color: "text-green-500" },
                { label: "PROTOCOL", status: "TLS 1.3", color: "text-tertiary" },
                { label: "NODE", status: "VLN_PRIMARY", color: "text-on-surface-variant" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">{item.label}</span>
                  <span className={`text-[9px] tracking-widest uppercase ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-6 bg-lowest">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">TERMINAL_OUTPUT</div>
            <div className="font-mono text-[11px] leading-relaxed text-on-surface-variant/70 space-y-1">
              <div><span className="text-tertiary">$</span> initializing secure channel...</div>
              <div><span className="text-tertiary">$</span> encryption: AES-256-GCM</div>
              <div><span className="text-tertiary">$</span> handshake: <span className="text-green-500">COMPLETE</span></div>
              <div><span className="text-tertiary">$</span> node: VLN_PRIMARY_01</div>
              <div><span className="text-tertiary">$</span> latency: <span style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>8ms</span></div>
              <div><span className="text-tertiary">$</span> status: <span className="text-green-500">READY</span></div>
              <div className="mt-2">
                <span className="text-tertiary">$</span> awaiting_input<span className="animate-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Analytics Preview */}
      <section className="px-8 py-8">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">ADVISORY_ANALYTICS</div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-container border border-border p-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">TOTAL INQUIRIES</div>
            <div className="text-3xl font-black text-on-surface" style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>1,284</div>
            <div className="text-[9px] tracking-widest uppercase text-green-500 mt-1">+18.3% YOY</div>
          </div>
          {[
            { label: "AKTYVIOS", value: "47", color: "text-tertiary" },
            { label: "ISSPR\u0116STOS", value: "1,198", color: "text-green-500" },
            { label: "VID. ATSAKYMO LAIKAS", value: "2.4h", color: "text-secondary" },
          ].map((stat) => (
            <div key={stat.label} className="bg-container border border-border p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-2">{stat.label}</div>
              <div className={`text-2xl font-black ${stat.color}`} style={{ fontFeatureSettings: '"tnum" 1, "onum" 1' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
