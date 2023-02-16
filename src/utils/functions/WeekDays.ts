const languageBR = 'pt-BR';
const timeZoneBR = 'America/Sao_Paulo';

const date = new Date();

const getToday = (language = languageBR, timeZone = timeZoneBR) =>
  new Intl.DateTimeFormat(language, {
    weekday: 'long',
    timeZone,
  }).format(date);

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const weekDay = (day: number) => days[day] || 'Informe um dia válido';

export { weekDay, getToday };
