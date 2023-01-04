export default function ConvertByTimeZone(dateTime: Date = new Date()) {
  const date = new Date(dateTime).toLocaleDateString().split('/').join('/');
  const hour = new Date(dateTime)
    .toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    .split(':')
    .join('h')
    .slice(0, 5);

  return date + ' ' + hour;
}
