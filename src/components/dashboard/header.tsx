export function Header() {
  return (
    <header className="flex flex-col gap-4 border-b border-tactical-border pb-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Comando & Controle</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">GAB / BRM5</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-lg border border-tactical-border bg-tactical-card px-3 py-2 text-right">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Status</div>
          <div className="mt-1 text-sm font-medium text-tactical-accent-light">OPERACIONAL</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-tactical-border bg-tactical-card px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tactical-accent text-sm font-bold text-white">CN</div>
          <div>
            <div className="text-sm font-medium text-white">Capitão Nox</div>
            <div className="text-xs text-slate-400">Comando</div>
          </div>
        </div>
      </div>
    </header>
  );
}
