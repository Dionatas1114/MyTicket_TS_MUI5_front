import { ptBR, enUS, es } from 'date-fns/locale';

interface Languages {
  [language: string]: Locale;
}

export default function locale(language: string) {
  const languages: Languages = {
    enUS,
    ptBR,
    es,
  };

  return languages[language];
}
