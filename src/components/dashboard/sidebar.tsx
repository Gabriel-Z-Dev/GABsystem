import { Home, ShieldCheck, ClipboardList, Users, Rocket, BookOpen, Settings } from 'lucide-react';

const links = [
  { label: 'Dashboard', href: '/', icon: Home },
  { label: 'Efetivo', href: '#', icon: Users },
  { label: 'Operações', href: '#', icon: Rocket },
  { label: 'ORBAT', href: '#', icon: ClipboardList },
  { label: 'Doutrina', href: '#', icon: BookOpen },
  { label: 'Config', href: '#', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-tactical-border bg-[#0A0E13] p-5 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-tactical-accent bg-tactical-accent/10 text-lg font-bold text-tactical-accent-light">
          G
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-tactical-accent-light">GAB</div>
          <div className="text-sm text-slate-400">C2 / BRM5</div>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-tactical-border bg-tactical-card p-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
          <span>Sistema</span>
          <span className="status-led bg-green-500" />
        </div>
        <div className="mt-2 text-lg font-semibold text-white">Ativo</div>
      </div>

      <nav className="space-y-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-tactical-border hover:bg-tactical-card"
          >
            <Icon className="h-4 w-4 text-tactical-accent-light" />
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-3">
        <div className="flex items-center gap-2 text-yellow-300">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-xs uppercase tracking-[0.25em]">SuperAdmin</span>
        </div>
        <p className="mt-2 text-sm text-slate-300">Guardado em rota oculta e acesso mestre configurado.</p>
      </div>
    </aside>
  );
}
