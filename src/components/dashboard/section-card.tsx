type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">LIVE</span>
      </div>
      {children}
    </section>
  );
}
