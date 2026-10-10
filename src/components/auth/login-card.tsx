'use client';

import { signIn } from 'next-auth/react';

export function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-tactical-border bg-tactical-card p-8 shadow-tactical">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-tactical-accent bg-tactical-accent/10 text-2xl font-black text-tactical-accent-light">
          G
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">GAB / BRM5</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Sistema C2</h1>
      </div>

      <div className="space-y-4 text-sm text-slate-300">
        <div className="rounded-lg border border-tactical-border bg-slate-900/40 p-3">
          Acesso exclusivo via Discord para membros do Grupamento.
        </div>
        <div className="rounded-lg border border-tactical-border bg-slate-900/40 p-3">
          Controle de patente, operações, ORBAT e permissões dinâmicas.
        </div>
      </div>

      <button
        onClick={() => signIn('discord', { callbackUrl: '/' })}
        className="mt-6 w-full rounded-lg bg-[#5865F2] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4752c4]"
      >
        Entrar com Discord
      </button>
    </div>
  );
}
