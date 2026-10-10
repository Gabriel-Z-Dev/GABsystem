# GAB / BRM5 C2 System

Sistema Integrado de Comando e Controle (C2) e Gestão MILSIM para o Grupamento de Ações Brasileiro.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth + Discord OAuth
- Radix UI + Lucide

## Iniciar projeto local

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

## Acesso
- Dashboard principal: `/`
- Rota oculta do superadmin: `/${process.env.NEXT_PUBLIC_ADMIN_SECRET_ROUTE ?? 'c2-root-override'}`

## Observações
Este repositório foi inicializado com a base da arquitetura e a identidade visual tática do GAB, pronta para extensão dos módulos de operacional, efetivo, ORBAT, permissões e auditoria.
