import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';

import { persistor, store } from './store';
import Routes from './routes';

import { createTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

type SupportedLocales = keyof typeof locales;

const [locale, setLocale] = useState<SupportedLocales>('enUS');

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

useEffect(() => {
  const i18nlocale = localStorage.getItem('i18nextLng');
  const browserLocale = i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

  if (browserLocale === 'ptBR') setLocale('ptBR');
}, []);
