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
    };
  }
  interface Components {
    AnimatedGrid: {
      styleOverrides?: {
        root?: Record<string, any>;
        // 你可以在此添加其他的子類別 (e.g., label, etc.) 如果需要
      };
    };
  }
}


