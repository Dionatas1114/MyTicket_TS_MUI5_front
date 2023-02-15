interface Options {
  weekday?: 'long' | 'short' | 'narrow';
  timeZone?: string;
}

const timeZone = 'America/Sao_Paulo';
const language = 'pt-BR';

const date = new Date();

const options: Options = {
  weekday: 'long',
  timeZone,
};

const getToday = new Intl.DateTimeFormat(language, options).format(date);

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const weekDay = (day: number) => days[day] || 'Informe um dia válido';

export { weekDay, getToday };
