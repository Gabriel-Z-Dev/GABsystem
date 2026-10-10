type MetricCardProps = {
  label: string;
  value: string;
  change: string;
};

export function MetricCard({ label, value, change }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-tactical-border bg-tactical-card p-4 shadow-tactical">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</div>
      <div className="mt-4 flex items-end justify-between">
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="rounded-full border border-tactical-border bg-slate-900/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-tactical-accent-light">
          {change}
        </div>
      </div>
    </div>
  );
}
