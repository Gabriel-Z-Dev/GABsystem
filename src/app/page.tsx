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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-tactical-dark text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <Header />

          <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-tactical-border bg-tactical-card p-4 shadow-tactical transition hover:border-tactical-accent/60 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.3)]"
              >
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

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Operações Ativas</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">LIVE</span>
              </div>

              <div className="space-y-3">
                {operations.map((op) => (
                  <div
                    key={op.nome}
                    className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3 transition hover:border-tactical-accent/40"
                  >
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
                  <div
                    key={member.nome}
                    className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3 transition hover:border-tactical-accent/40"
                  >
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

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">OPORD</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Operação Tempestade no Deserto</h2>
                </div>
                <span className="rounded-full border border-tactical-accent bg-tactical-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
                  Nº 04
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-tactical-border bg-slate-900/40 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Objetivo principal</div>
                  <p className="mt-2 text-sm text-slate-200">Neutralizar comunicações hostis em Ronograd e garantir extração segura.</p>
                </div>

                <div className="rounded-xl border border-tactical-border bg-slate-900/40 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Facção inimiga</div>
                  <p className="mt-2 text-sm text-slate-200">Milícia de Ronograd / Força de interdição.</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-tactical-border bg-slate-900/40 p-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">ROE</div>
                <p className="mt-2 text-sm text-slate-200">
                  Resposta proporcional, evacuação prioritária da equipe e neutralização somente quando houver risco imediato.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">ORBAT</h2>
                <span className="text-[10px] uppercase tracking-[0.2em] text-tactical-gold">ALPHA / BRAVO / HQ</span>
              </div>

              <div className="space-y-3">
                {['HQ', 'Alpha', 'Bravo', 'Charlie'].map((team, index) => (
                  <div key={team} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
                    <div>
                      <div className="font-medium text-white">{team}</div>
                      <div className="text-xs text-slate-400">Líder designado</div>
                    </div>
                    <div className="text-right text-xs text-slate-300">
                      <div>SL {index + 1}</div>
                      <div className="text-tactical-accent-light">{index === 0 ? 'Disponível' : 'Aguardando'}</div>
                    </div>
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
