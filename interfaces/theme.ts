export enum ThemeEnum {
  light = 'light',
  dark = 'dark'
}

export interface ITheme {
  colors: Colors;
  viewports: Viewports;
  font: Font;
  pageIndents: PageIndents;
}

interface Viewports {
  mobileWidth: string;
  tabletWidth: string;
  laptopWidth: string;
  desktopWidth: string;
}

interface Colors {
  baseWhite: string;
  baseBlack: string;
  green100: string;
  purple100: string;
  orange100: string;
  pink100: string;
  appBackground: string;
  primary: string;
  secondary: string;
  grey100: string;
  grey200: string;
  text: string;
  primaryBackground: string;
  btnBackground: string;
  linkBackground: string;
  votingLogBg: string;
  breedsControlBgPrimary: string;
  breedsControlBgSecondary: string;
  photoHover: string;
}

interface Font {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

interface PageIndents {
  mobilePadding: string;
  tabletPadding: string;
  laptopPadding: string;
  desktopPadding: string;
}
