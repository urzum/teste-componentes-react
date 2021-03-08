import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import MainContent from '../MainContent';
import MainFooter from '../MainFooter';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <MainContent>{children}</MainContent>
      <MainFooter />
    </Grid>
  );
};

export default Layout;
