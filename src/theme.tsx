import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
      main: '#19857b',
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
      main: '#6DB75F',
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
  },
});

export default theme;
