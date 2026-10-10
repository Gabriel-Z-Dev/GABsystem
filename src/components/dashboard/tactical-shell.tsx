import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export function TacticalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-tactical-dark text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <Header />
          <div className="mt-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
