export enum ThemeEnum {
  light = 'light',
  dark = 'dark'
}

export interface ITheme {
  colors: Colors;
  viewports: Viewports;
  font: Font;
  pageIndents: PageIndents
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
