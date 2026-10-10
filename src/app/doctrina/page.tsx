import { TacticalShell } from '@/components/dashboard/tactical-shell';
import { SectionCard } from '@/components/dashboard/section-card';

const doctrine = [
  {
    title: 'Manual de Conduta',
    summary: 'Regulamento interno, postura profissional, disciplina, comportamento e reputação do efetivo.',
  },
  {
    title: 'Regulamento de Uniformes',
    summary: 'Padrões de camuflagem, equipamentos, uso de insígnias e conformidade visual da unidade.',
  },
  {
    title: 'Código Penal Militar / GAB',
    summary: 'Normas disciplinares e procedimentos para sanções, elogios e registros de conduta.',
  },
  {
    title: 'Instrução Tática',
    summary: 'Algoritmos de infiltração, cobertura, extração, rádio e emprego de esquadras em operações.',
  },
];

export default function DoutrinaPage() {
  return (
    <TacticalShell>
      <SectionCard title="Central de Doutrina Tática">
        <div className="grid gap-4 md:grid-cols-2">
          {doctrine.map((item) => (
            <div key={item.title} className="rounded-xl border border-tactical-border bg-slate-900/30 p-4">
              <div className="mb-2 text-lg font-semibold text-white">{item.title}</div>
              <p className="text-sm text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </TacticalShell>
  );
}
