import { requireSession } from '@/lib/session';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

const metrics = [
  { label: 'Efetivo Ativo', value: '128', change: '+12%' },
  { label: 'Assiduidade', value: '94.2%', change: '+3.1%' },
  { label: 'ORBAT pronta', value: '7/9', change: '2 pendentes' },
  { label: 'Disponibilidade', value: '86%', change: '+4%' },
];

const operations = [
  { nome: 'Op. Tempestade', status: 'AGENDADA', horario: '22:30Z', tipo: 'PVP' },
  { nome: 'Exercício AMAN', status: 'EM ANDAMENTO', horario: '19:00Z', tipo: 'TREINAMENTO' },
  { nome: 'Ronda de Patrulha', status: 'CONCLUIDA', horario: '18:15Z', tipo: 'PVE' },
];

const roster = [
  { nome: 'Capitão Nox', papel: 'Comando', status: 'Online' },
  { nome: '1º Ten. Viper', papel: 'G-3', status: 'Disponível' },
  { nome: 'Sgt. Rook', papel: 'Alpha', status: 'Em missão' },
  { nome: 'Cabo Flint', papel: 'Logística', status: 'Em serviço' },
  { nome: 'Soldado Grit', papel: 'Bravo', status: 'Disponível' },
];

export default async function HomePage() {
  await requireSession();

  return (
    <div className="min-h-screen bg-tactical-dark text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <Header />

          <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-tactical-border bg-tactical-card p-4 shadow-tactical">
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">{metric.label}</div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <span className="rounded-full border border-tactical-border bg-slate-900/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Operações Ativas</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">LIVE</span>
              </div>

              <div className="space-y-3">
                {operations.map((op) => (
                  <div key={op.nome} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
                    <div>
                      <div className="font-medium text-white">{op.nome}</div>
                      <div className="text-xs text-slate-400">{op.tipo} • {op.horario}</div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      <span className="status-led bg-green-500" />
                      {op.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Estado-Maior</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">ON</span>
              </div>

              <div className="space-y-3">
                {roster.map((member) => (
                  <div key={member.nome} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
                    <div>
                      <div className="font-medium text-white">{member.nome}</div>
                      <div className="text-xs text-slate-400">{member.papel}</div>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{member.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
