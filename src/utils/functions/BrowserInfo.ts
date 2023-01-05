import { useMediaQuery, PaletteMode } from '@mui/material';
import { heightScreenSize, marginSize } from 'utils/constants';

const getScreenWidth = (): number => {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

const getScreenHeight = (): number => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

const GetBrowserTheme = (): string => {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
};

const GetLocalStorageTheme = (): PaletteMode => {
  const storageKey = 'theme';
  const browserTheme = GetBrowserTheme();

  localStorage.setItem(storageKey, browserTheme);
  return localStorage?.getItem(storageKey) as PaletteMode;
};

const marginTop = (): number => {
  return getScreenHeight() < heightScreenSize.medium ? marginSize.medium : marginSize.large;
};

export { getScreenWidth, getScreenHeight, GetBrowserTheme, GetLocalStorageTheme, marginTop };
