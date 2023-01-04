import React from 'react';
import { ThemeProvider, PaletteMode, createTheme } from '@mui/material';

import themes from 'assets/themes';
import { GetLocalStorageTheme } from 'utils/functions/BrowserInfo';

interface ColorContextSchema {
  toggleColorMode: () => void;
}

const ColorContext = React.createContext<ColorContextSchema>({} as ColorContextSchema);

interface Props {
  children: React.ReactElement;
}

function AppThemeProvider({ children }: Props): React.ReactElement {
  const localStorageTheme = GetLocalStorageTheme();

  const [mode, setMode] = React.useState<PaletteMode>(localStorageTheme);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === 'light' ? themes.lightTheme : themes.darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorContext.Provider>
  );
}

export { ColorContext, AppThemeProvider };
