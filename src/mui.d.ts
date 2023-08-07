import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: {
      layoutBorder?: {
        default?: string;
      };
      layoutBackground?: {
        default?: string;
      };
    };
  }
}


