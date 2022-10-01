import { createTheme } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: common.white,
    },
    primary: {
      main: '#263252',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: common.white,
      secondary: '#37383D',
    },
  },
  typography: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: 20,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default theme;
