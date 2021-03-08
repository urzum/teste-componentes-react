import React from 'react';

import { IconContext } from 'react-icons';

import { Container, SidebarNav, SidebarWrap } from './styles';

import { MenuData } from './MenuData';
import Submenu from './SubMenu';

const MenuNav: React.FC = () => {
  return (
    <Container>
      <IconContext.Provider value={{ size: '20px' }}>
        <SidebarNav>
          {MenuData.map((item, index) => {
            return <Submenu item={item} key={item.key} />;
          })}
        </SidebarNav>
      </IconContext.Provider>
    </Container>
  );
};

export default MenuNav;
