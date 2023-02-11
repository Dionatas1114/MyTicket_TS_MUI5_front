import { ptBR, enUS, es } from 'date-fns/locale';

interface Languages {
  [language: string]: Locale;
}

const languages: Languages = { enUS, ptBR, es };

export const locale = (language: string) => languages[language];
