export type UserSession = {
  id: string;
  discordId: string;
  nomeGuerra: string;
  avatarUrl?: string | null;
  patente?: { nome: string; sigla: string; pesoComando: number };
  secaoEstadoMaior?: string | null;
  isOwner: boolean;
};

export type OperacaoTipo = 'PVE' | 'PVP' | 'TREINAMENTO';
export type OperacaoStatus = 'AGENDADA' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'CANCELADA';
export type PermissionMap = Record<string, boolean>;

export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};
