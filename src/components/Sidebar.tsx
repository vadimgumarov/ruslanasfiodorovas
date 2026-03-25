"use client";

import Link from "next/link";

interface SidebarProps {
  activeItem: "COMMAND" | "STRATEGY" | "ASSETS" | "ADVISORY" | "ARCHIVE";
}

const navItems = [
  { label: "COMMAND", icon: "dashboard", href: "/" },
  { label: "STRATEGY", icon: "query_stats", href: "/market-intelligence" },
  { label: "ASSETS", icon: "domain", href: "/asset-inventory" },
  { label: "ADVISORY", icon: "forum", href: "/advisory" },
  { label: "ARCHIVE", icon: "inventory_2", href: "/valuation" },
];

export default function Sidebar({ activeItem }: SidebarProps) {
  return (
    <aside className="fixed top-16 left-0 bottom-0 w-64 bg-sidebar border-r border-border z-40 flex flex-col">
      <div className="px-5 py-6 border-b border-border">
        <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
          NODE_01
        </div>
        <div className="text-[11px] tracking-widest uppercase text-primary mt-1 font-semibold">
          STRATEGIC_CORE
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
            SYSTEM_STATUS: ONLINE
          </span>
        </div>
        <button className="flex items-center gap-3 px-5 py-3 text-[11px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors w-full">
          <span className="material-symbols-outlined text-lg">logout</span>
          LOGOUT
        </button>
      </div>
    </aside>
  );
}
