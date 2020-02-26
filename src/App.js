import './App.css';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, rgbToHex } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: "rgba(20, 20, 20, 1)", main: "rgba(20, 20, 20, 1)", dark: "rgba(20, 20, 20, 1)"},
    primary: { light: "rgba(200, 200, 200, 1)", main: "rgba(150, 150, 150, 1)", dark: "rgba(100, 100, 100, 1)" },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(','),
  },
}));


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </div>
);

export default App;
