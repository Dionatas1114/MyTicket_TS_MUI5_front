const getScreenWidth = (): number => {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

const getScreenHeight = (): number => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

const getBrowserTheme = (): string => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return isDark;
};

const heightScreenSize = {
  large: 1080,
  medium: 660,
  little: 450,
};

const marginSize = {
  large: 12,
  medium: 6,
  little: 3,
};

const marginTop =
  getScreenHeight() > heightScreenSize.medium ? marginSize.large : marginSize.medium;

export { getScreenWidth, getScreenHeight, getBrowserTheme, marginTop };
