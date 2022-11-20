import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

// import { persistor, store } from './store';
import Routes from './routes';

type SupportedLocales = keyof typeof locales;

const [locale, setLocale] = React.useState<SupportedLocales>('ptBR');

export const Theme = createTheme(
  {
    // scrollbarStyles: {
    //   '&::-webkit-scrollbar': {
    //     width: '8px',
    //     height: '8px',
    //   },
    //   '&::-webkit-scrollbar-thumb': {
    //     boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    //     backgroundColor: '#e8e8e8',
    //   },
    // },
    palette: {
      primary: { main: '#2576d2' },
    },
  }
  // locale
);

React.useEffect(() => {
  const browserLocale = localStorage.getItem('i18nextLng');
  console.log(browserLocale);

  if (browserLocale === 'pt') setLocale('ptBR');
  console.log(locale);
}, []);
