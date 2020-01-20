import React from 'react';
import {ThemeProvider} from 'theme-ui';
import ky from 'ky-universal';
import Main from './main';
import theme from './theme';

export default function App() {
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
}
