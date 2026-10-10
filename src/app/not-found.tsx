export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090D12] px-6 text-slate-100">
      <div className="rounded-2xl border border-tactical-border bg-tactical-card p-8 text-center shadow-tactical">
        <div className="text-[10px] uppercase tracking-[0.35em] text-slate-400">404</div>
        <h1 className="mt-4 text-3xl font-bold text-white">Rota não identificada</h1>
        <p className="mt-2 text-sm text-slate-300">O alvo solicitado não foi localizado na rede operacional.</p>
      </div>
    </main>
  );
}
