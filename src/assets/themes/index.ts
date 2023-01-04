import { ThemeOptions } from '@mui/material';

interface Themes {
  [theme: string]: ThemeOptions;
}

const themes: Themes = {
  darkTheme: {
    palette: {
      mode: 'dark',
    },
  },
  lightTheme: {
    palette: {
      mode: 'light',
    },
  },
};

export default themes;
