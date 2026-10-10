import { TacticalShell } from '@/components/dashboard/tactical-shell';
import { SectionCard } from '@/components/dashboard/section-card';

const ops = [
  {
    nome: 'Op. Tempestade',
    tipo: 'PVP',
    status: 'AGENDADA',
    objetivo: 'Destruir emissor de rádio e extrair no ponto LZ-B.',
  },
  {
    nome: 'Exercício AMAN',
    tipo: 'TREINAMENTO',
    status: 'EM ANDAMENTO',
    objetivo: 'Coordenação de infiltração e triagem de equipe em ROE simulada.',
  },
  {
    nome: 'Ronda de Patrulha',
    tipo: 'PVE',
    status: 'CONCLUIDA',
    objetivo: 'Inspeção de zona de risco e apreensão de intel de facção hostil.',
  },
];

export default function OperacoesPage() {
  return (
    <TacticalShell>
      <div className="grid gap-6">
        <SectionCard title="Operações em Curso">
          <div className="space-y-4">
            {ops.map((op) => (
              <div key={op.nome} className="rounded-xl border border-tactical-border bg-slate-900/30 p-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{op.nome}</h3>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{op.tipo}</div>
                  </div>
                  <span className="rounded-full border border-tactical-border bg-tactical-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
                    {op.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{op.objetivo}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="ORBAT Builder">
          <div id="orbat" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {['HQ', 'Alpha', 'Bravo', 'Charlie'].map((team, idx) => (
              <div key={team} className="rounded-xl border border-tactical-border bg-slate-900/30 p-4">
                <div className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-400">{team}</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>SL {idx + 1}</div>
                  <div>TL {idx + 1}</div>
                  <div>Medic</div>
                  <div>DM</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </TacticalShell>
  );
}
