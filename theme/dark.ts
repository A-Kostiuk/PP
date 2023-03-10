import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces/theme';
import { defaultTheme } from './default';


export const darkTheme: DefaultTheme = {
  type: ThemeEnum.dark,
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    appBackground: '#1D1D1D',
    primaryBackground: '#2a2a2a',
    text: '#FFFFFF',
    btnBackground: 'rgba(255, 134, 142, 0.2)',
    linkBackground: 'rgba(255, 255, 255, 0.1)',
    votingLogBg: 'rgba(255, 255, 255, 0.05)',
    breedsControlBgPrimary: 'rgba(255, 255, 255, 0.05)',
    breedsControlBgSecondary: 'rgba(255, 255, 255, 0.05)',
  },
};
