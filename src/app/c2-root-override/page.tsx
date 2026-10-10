import { requireOwnerSession } from '@/lib/session';

export default async function AdminOverridePage() {
  await requireOwnerSession();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090D12] px-6 py-12 text-slate-100">
      <div className="w-full max-w-4xl rounded-2xl border border-red-500/40 bg-[#1A232E] p-8 shadow-2xl shadow-red-500/10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xs uppercase tracking-[0.35em] text-red-300">SuperAdmin</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">C2 ROOT OVERRIDE</h1>
          </div>
          <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-red-200">
            Lockdown: OFF
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-tactical-border bg-slate-900/50 p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Patentes</div>
            <div className="mt-2 text-2xl font-semibold text-white">12</div>
          </div>
          <div className="rounded-xl border border-tactical-border bg-slate-900/50 p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Permissões</div>
            <div className="mt-2 text-2xl font-semibold text-white">38</div>
          </div>
          <div className="rounded-xl border border-tactical-border bg-slate-900/50 p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Auditoria</div>
            <div className="mt-2 text-2xl font-semibold text-red-300">ONLINE</div>
          </div>
        </div>
      </div>
    </main>
  );
}
