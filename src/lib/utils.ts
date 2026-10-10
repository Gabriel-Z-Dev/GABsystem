export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date | string) {
  const value = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(value);
}

export function formatDateTime(date: Date | string) {
  const value = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(value);
}

export function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}
