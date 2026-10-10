import { TacticalShell } from '@/components/dashboard/tactical-shell';
import { SectionCard } from '@/components/dashboard/section-card';

const metrics = [
  { label: 'Efetivo Ativo', value: '128', change: '+12%' },
  { label: 'Assiduidade', value: '94.2%', change: '+3.1%' },
  { label: 'ORBAT pronta', value: '7/9', change: '2 pendentes' },
  { label: 'Disponibilidade', value: '86%', change: '+4%' },
];

export default function DashboardPage() {
  return (
    <TacticalShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-tactical-border bg-tactical-card p-4 shadow-tactical">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</div>
            <div className="mt-4 flex items-end justify-between">
              <div className="text-3xl font-bold text-white">{metric.value}</div>
              <div className="rounded-full border border-tactical-border bg-slate-900/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard title="Operações Ativas">
          <div className="space-y-3">
            {[
              ['Op. Tempestade', 'PVP • 22:30Z', 'AGENDADA'],
              ['Exercício AMAN', 'TREINAMENTO • 19:00Z', 'EM ANDAMENTO'],
              ['Ronda de Patrulha', 'PVE • 18:15Z', 'CONCLUIDA'],
            ].map(([title, subtitle, status]) => (
              <div key={title} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
                <div>
                  <div className="font-medium text-white">{title}</div>
                  <div className="text-xs text-slate-400">{subtitle}</div>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  <span className="status-led bg-green-500" />
                  {status}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Estado-Maior">
          <div className="space-y-3">
            {[
              ['Capitão Nox', 'Comando', 'Online'],
              ['1º Ten. Viper', 'G-3', 'Disponível'],
              ['Sgt. Rook', 'Alpha', 'Em missão'],
              ['Cabo Flint', 'Logística', 'Em serviço'],
            ].map(([title, subtitle, status]) => (
              <div key={title} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
                <div>
                  <div className="font-medium text-white">{title}</div>
                  <div className="text-xs text-slate-400">{subtitle}</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{status}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </TacticalShell>
  );
}
