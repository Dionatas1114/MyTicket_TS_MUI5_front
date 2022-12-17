export default function GetTimezone(hourOnly: boolean = false) {
  const date = new Date().toISOString().slice(0, 10);
  const hour = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const dateHourTimeZone = date + ' ' + hour;

  return hourOnly ? hour : dateHourTimeZone;
}
