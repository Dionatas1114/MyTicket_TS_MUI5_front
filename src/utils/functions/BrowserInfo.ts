const getScreenWidth = (): number => {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

const getScreenHeight = (): number => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

const getBrowserTheme = (): string => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}; // dark or light

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

export { getScreenWidth, getScreenHeight, getBrowserTheme, marginTop };
