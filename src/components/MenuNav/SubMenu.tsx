import React, { useState } from 'react';
import { MenuItem } from '../../models/MenuItem';

import {
  ContainerSubMenu,
  SubMenuLabel,
  DropdownMenu,
  MenuIcon,
} from './styles';

interface ISubMenuProps {
  item: MenuItem;
}
const SubMenu: React.FC<ISubMenuProps> = ({ item }) => {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = (): void => setSubmenu(!submenu);

  return (
    <>
      <ContainerSubMenu to={item.path} onClick={showSubmenu}>
        <MenuIcon>
          <SubMenuLabel isOpen to={item.path}>
            {item.icon}
            <h4>{item.title}</h4>{' '}
          </SubMenuLabel>
        </MenuIcon>
        <div>{item?.submenu ? item?.iconClosed : item?.iconOpened}</div>
      </ContainerSubMenu>
      {submenu &&
        item.submenu?.map((subitem, index) => {
          return (
            <DropdownMenu>
              <SubMenuLabel isOpen={submenu} to={subitem.path}>
                {subitem.title}
              </SubMenuLabel>
            </DropdownMenu>
          );
        })}
    </>
  );
};

export default SubMenu;
