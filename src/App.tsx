import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Routes from './routes';

import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
