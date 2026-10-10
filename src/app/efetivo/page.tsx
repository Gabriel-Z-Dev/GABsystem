import { TacticalShell } from '@/components/dashboard/tactical-shell';
import { SectionCard } from '@/components/dashboard/section-card';

const roster = [
  { nome: 'Nox', patente: 'Capitão', secao: 'Comando', status: 'ATIVO' },
  { nome: 'Viper', patente: '1º Tenente', secao: 'G-3', status: 'DISPONÍVEL' },
  { nome: 'Rook', patente: 'Sargento', secao: 'Alpha', status: 'MISSÃO' },
  { nome: 'Flint', patente: 'Cabo', secao: 'G-4', status: 'SERVIÇO' },
  { nome: 'Grit', patente: 'Soldado', secao: 'Bravo', status: 'DISPONÍVEL' },
];

export default function EfetivoPage() {
  return (
    <TacticalShell>
      <SectionCard title="Quadro Geral de Efetivo">
        <div className="overflow-hidden rounded-xl border border-tactical-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-950/80 text-slate-300">
              <tr>
                <th className="px-4 py-3">Nome de Guerra</th>
                <th className="px-4 py-3">Patente</th>
                <th className="px-4 py-3">Seção</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((member) => (
                <tr key={member.nome} className="border-t border-tactical-border bg-slate-900/30">
                  <td className="px-4 py-3 font-medium text-white">{member.nome}</td>
                  <td className="px-4 py-3 text-slate-300">{member.patente}</td>
                  <td className="px-4 py-3 text-slate-300">{member.secao}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full border border-tactical-border bg-tactical-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </TacticalShell>
  );
}
