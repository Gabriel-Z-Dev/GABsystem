import Link from 'next/link';

const links = [
  { label: 'Dashboard', href: '/', icon: 'home' },
  { label: 'Efetivo', href: '/efetivo', icon: 'users' },
  { label: 'Operações', href: '/operacoes', icon: 'rocket' },
  { label: 'ORBAT', href: '/operacoes#orbat', icon: 'clipboard' },
  { label: 'Doutrina', href: '/doctrina', icon: 'book' },
  { label: 'Config', href: '/c2-root-override', icon: 'settings' },
] as const;

const iconMap = {
  home: '⌂',
  users: '◉',
  rocket: '✦',
  clipboard: '▣',
  book: '◫',
  settings: '⚙',
} as const;

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
        {links.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-tactical-border hover:bg-tactical-card"
          >
            <span className="text-tactical-accent-light">{iconMap[icon]}</span>
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-3">
        <div className="flex items-center gap-2 text-yellow-300">
          <span>◈</span>
          <span className="text-xs uppercase tracking-[0.25em]">SuperAdmin</span>
        </div>
        <p className="mt-2 text-sm text-slate-300">Guardado em rota oculta e acesso mestre configurado.</p>
      </div>
    </aside>
  );
}
