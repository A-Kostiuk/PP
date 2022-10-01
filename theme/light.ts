import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces/theme';
import { defaultTheme } from './default';


export const lightTheme: DefaultTheme = {
  type: ThemeEnum.light,
  ...defaultTheme,
};
