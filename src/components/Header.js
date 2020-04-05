import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  }
})

function Header () {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Home />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;