import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import GlobalStyle from '../assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  </>
);

export default MainLayout;
