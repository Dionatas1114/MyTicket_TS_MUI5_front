import React from 'react';
import { useTheme } from '@mui/material';

import { ColorContext } from 'context/Color';
import MuiThemeSwitch from './styles';

const ThemeSwitch = () => {
  const colorMode = React.useContext(ColorContext);
  const isDarkTheme = useTheme().palette.mode === 'dark';

  return <MuiThemeSwitch sx={{ m: 1 }} checked={isDarkTheme} onClick={colorMode.toggleColorMode} />;
};

export default ThemeSwitch;
