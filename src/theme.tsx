import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { border } from '@mui/system';

/**
 * 外部背景 #C0E5FE
 * 卡片內部背景 #FDF3E7
 * 卡片外框/台灣外框 #5F5346
 * tab背景/台灣顏色 #D6B894
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#D6B894',
    },
    secondary: {
      main: '#5F5346',
    },
    background: {
      default: 'rgb(192,229,254)',
      paper: '#FDF3E7'
    },
    error: {
      main: '#E74C3C',
      contrastText: '#FDF3E7',
    },
    success: {
      main: '#52b27b',
      contrastText: '#FDF3E7',
    },
    warning: {
      main: '#d38735',
      contrastText: '#FDF3E7',
    },
    info: {
      main: '#2395e1',
      contrastText: '#FDF3E7',
    },
    custom: {
      layoutBorder: {
        default: '#5F5346'
      },
      tabBackground: {
        default: '#FDF3E7'
      },
      contentBackground: {
        default: '#FDF3E7'
      },
      activeBackground: {
        default: '#d38735'
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1040,
      lg: 1220,
      xl: 1920,
    }
  },
  components: {
    AnimatedGrid: {
      styleOverrides: {
        root: {
          transition: `flex-basis 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSuccess: {
          '&:hover': {
            backgroundColor: '#5AA74C',
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#D6B894',
          body: {
            '&:nth-of-type(odd)': {
              backgroundColor: '#f4f4f4', // 這裡可以改為你想要的斑馬紋顏色
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1em",
          fontWeight: "bold",
          color: "#635649",
          backgroundColor: "#e8c8a0",
          border: "1px solid #a5a09c",
        }
      }
    }
  },
});

export default theme;
