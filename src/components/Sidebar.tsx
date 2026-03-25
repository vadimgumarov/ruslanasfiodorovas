"use client";

import Link from "next/link";

interface SidebarProps {
  activeItem: "VALDYMAS" | "STRATEGIJA" | "TURTAS" | "KONSULTACIJOS" | "ARCHYVAS";
}

const navItems = [
  { label: "VALDYMAS", icon: "dashboard", href: "/" },
  { label: "STRATEGIJA", icon: "query_stats", href: "/market-intelligence" },
  { label: "TURTAS", icon: "domain", href: "/asset-inventory" },
  { label: "KONSULTACIJOS", icon: "forum", href: "/advisory" },
  { label: "ARCHYVAS", icon: "inventory_2", href: "/valuation" },
];

export default function Sidebar({ activeItem }: SidebarProps) {
  return (
    <aside className="fixed top-16 left-0 bottom-0 w-64 bg-sidebar border-r border-border z-40 flex flex-col">
      <div className="px-5 py-6 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
          MAZGAS_01
        </div>
        <div className="text-[11px] tracking-widest uppercase text-primary mt-1 font-semibold">
          STRATEGINIS_CENTRAS
        </div>
      </div>

      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive = item.label === activeItem;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3 text-[11px] tracking-widest uppercase transition-colors ${
                isActive
                  ? "bg-container-high border-l-2 border-tertiary text-primary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-container border-l-2 border-transparent"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border py-4">
        <div className="px-5 py-2 flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 animate-pulse-dot" />
          <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
            SISTEMOS_BŪSENA: AKTYVI
          </span>
        </div>
        <button className="flex items-center gap-3 px-5 py-3 text-[11px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors w-full">
          <span className="material-symbols-outlined text-lg">logout</span>
          ATSIJUNGTI
        </button>
      </div>
    </aside>
  );
}
