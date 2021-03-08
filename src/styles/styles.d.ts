import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      heavy_white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;

      button: string;
    };
  }
}
