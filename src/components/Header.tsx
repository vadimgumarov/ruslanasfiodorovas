"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-border z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-on-surface font-black text-sm tracking-[0.3em] uppercase">
          SOVEREIGN_INTEL
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/market-intelligence"
            className="text-on-surface-variant text-[11px] tracking-widest uppercase hover:text-on-surface transition-colors"
          >
            STRATEGIJA
          </Link>
          <Link
            href="/asset-inventory"
            className="text-on-surface-variant text-[11px] tracking-widest uppercase hover:text-on-surface transition-colors"
          >
            TURTAS
          </Link>
          <Link
            href="/advisory"
            className="text-on-surface-variant text-[11px] tracking-widest uppercase hover:text-on-surface transition-colors"
          >
            KONSULTACIJOS
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
        <div className="w-8 h-8 bg-container-high border border-border flex items-center justify-center">
          <span className="text-on-surface-variant text-[10px] tracking-widest uppercase font-bold">RF</span>
        </div>
      </div>
    </header>
  );
}
