export function createComponents() {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('/webfonts/Vazir-Regular.woff2') format('woff2');
        }
      `,
    },
  };
}
