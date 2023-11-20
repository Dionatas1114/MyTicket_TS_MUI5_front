import { ThemeOptions } from '@mui/material';

interface Themes {
  [theme: string]: ThemeOptions;
}

const themes: Themes = {
  dark: {
    palette: {
      mode: 'dark',
    },
  },
  light: {
    palette: {
      mode: 'light',
    },
  },
};

export default themes;
