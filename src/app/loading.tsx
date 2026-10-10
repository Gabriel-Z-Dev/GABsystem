export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090D12] text-slate-100">
      <div className="rounded-full border border-tactical-border bg-tactical-card px-6 py-3 text-sm uppercase tracking-[0.35em] text-tactical-accent-light">
        Initializing...
      </div>
    </div>
  );
}
