import './App.css';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: "rgba(50, 50, 50, 1)", main: "rgba(25, 25, 25, 1)", dark: "rgba(0, 0, 0, 1)"},
    primary: { light: "rgba(200, 200, 200, 1)", main: "rgba(150, 150, 150, 1)", dark: "rgba(100, 100, 100, 1)" },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(','),
  },
}));


const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
