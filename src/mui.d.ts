import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: {
      layoutBorder?: {
        default?: string;
      };
      tabBackground?: {
        default?: string;
      };
      contentBackground?: {
        default?: string;
      };
      activeBackground?: {
        default?: string;
      };
    };
  }
  interface Components {
    AnimatedGrid: {
      styleOverrides?: {
        root?: Record<string, any>;
      };
    };
  }
}


