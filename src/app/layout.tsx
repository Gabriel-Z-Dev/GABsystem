import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GAB C2 / BRM5',
  description: 'Sistema Integrado de Comando e Controle e Gestão MILSIM',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
