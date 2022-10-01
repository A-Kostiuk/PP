import { ITheme } from '../interfaces/theme';

export const defaultTheme: ITheme = {
  colors: {
    baseWhite: '#FFFFFF',
    baseBlack: '#000000',
    text: '#1D1D1D',
    green100: '#97EAB9',
    purple100: '#B4B7FF',
    orange100: '#FFD280',
    pink100: '#FF868E',
    appBackground: '#F8F8F7',
    grey100: '#F8F8F7',
    grey200: '#8C8C8C',
    primary: '#FBE0DC',
    secondary: '#FF868E',
    primaryBackground: '#FFFFFF',
  },
  viewports: {
    mobileWidth: '375px',
    tabletWidth: '768px',
    laptopWidth: '1024px',
    desktopWidth: '1440px',
  },
  pageIndents: {
    mobilePadding: '20px',
    tabletPadding: '30px',
    laptopPadding: '30px',
    desktopPadding: '30px',
  },
  font: {
    fontFamily: 'Jost',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '400',
  },
};
