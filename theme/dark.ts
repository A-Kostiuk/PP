import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces/theme';
import { defaultTheme } from './default';


export const darkTheme: DefaultTheme = {
  type: ThemeEnum.dark,
  ...defaultTheme,
};
