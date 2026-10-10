type StatusItem = {
  title: string;
  subtitle: string;
  status: string;
};

type StatusPanelProps = {
  title: string;
  items: StatusItem[];
};

export function StatusPanel({ title, items }: StatusPanelProps) {
  return (
    <div className="rounded-xl border border-tactical-border bg-tactical-card p-5 shadow-tactical">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Live</span>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-center justify-between rounded-lg border border-tactical-border bg-slate-900/40 p-3">
            <div>
              <div className="font-medium text-white">{item.title}</div>
              <div className="text-xs text-slate-400">{item.subtitle}</div>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
              <span className="status-led bg-green-500" />
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
