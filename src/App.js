import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Layout from './components/layout';
import Theme from './Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Burger from './components/burger/burger';

export default function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Layout>
        <Burger />
      </Layout>
    </MuiThemeProvider>
  );
}
