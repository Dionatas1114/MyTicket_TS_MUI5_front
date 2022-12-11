import { useMediaQuery, PaletteMode } from '@mui/material';

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

const heightScreenSize = {
  large: 1080,
  medium: 700,
  little: 450,
};

const marginSize = {
  large: 12,
  medium: 6,
  little: 3,
};

const marginTop = (): number => {
  return getScreenHeight() < heightScreenSize.medium ? marginSize.medium : marginSize.large;
};

export { getScreenWidth, getScreenHeight, GetBrowserTheme, GetLocalStorageTheme, marginTop };
