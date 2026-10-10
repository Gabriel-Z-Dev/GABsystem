import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { MetricCard } from '@/components/dashboard/metric-card';
import { StatusPanel } from '@/components/dashboard/status-panel';

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
              <MetricCard key={metric.label} label={metric.label} value={metric.value} change={metric.change} />
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <StatusPanel
              title="Operações Ativas"
              items={operations.map((op) => ({
                title: op.nome,
                subtitle: `${op.tipo} • ${op.horario}`,
                status: op.status,
              }))}
            />

            <StatusPanel
              title="Estado-Maior"
              items={roster.map((member) => ({
                title: member.nome,
                subtitle: member.papel,
                status: member.status,
              }))}
            />
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Missão do Dia</h2>
                <span className="rounded-full border border-tactical-accent bg-tactical-accent/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-tactical-accent-light">
                  OPORD Nº 04
                </span>
              </div>

              <p className="mb-4 text-sm text-slate-300">
                Operação Tempestade no Deserto — foco em infiltração, destruição de ponto de rádio e extração segura.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <span className="font-medium text-white">Objetivo principal:</span> neutralizar comunicações hostis.
                </div>
                <div>
                  <span className="font-medium text-white">Facção inimiga:</span> Milícia de Ronograd
                </div>
                <div>
                  <span className="font-medium text-white">ROE:</span> resposta proporcional e priorização da preservação da equipe.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">ORBAT</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-tactical-gold">Alpha / Bravo / HQ</span>
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
