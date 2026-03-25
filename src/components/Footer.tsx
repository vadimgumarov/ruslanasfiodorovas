export default function Footer() {
  return (
    <footer className="bg-lowest border-t border-border py-6 px-6 ml-64">
      <div className="flex items-center justify-between">
        <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/50">
          SOVEREIGN_INTEL // NEKILNOJAMOJO TURTO OPERACIJOS // VILNIUS_NODE
        </div>
        <div className="text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/50">
          &copy; {new Date().getFullYear()} RUSLANAS FIODOROVAS
        </div>
      </div>
    </footer>
  );
}
