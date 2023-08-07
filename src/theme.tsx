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
      main: 'rgb(253,243,231)',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: 'rgb(192,229,254)'
    },
    error: {
      main: red.A400,
    },
    custom: {
      layoutBorder: {
        default: 'rgb(93,80,65)'
      },
      layoutBackground: {
        default: 'rgb(214,184,148)'
      },
    }
  },
});

export default theme;
