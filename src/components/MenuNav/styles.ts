import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ISbubMenuProps {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  padding: 4px;
  color: ${props => props.theme.colors.white};
`;

export const SidebarNav = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-decoration: none;
`;

export const SidebarWrap = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
`;

export const ContainerSubMenu = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

export const SubMenuLabel = styled(Link)<ISbubMenuProps>`
  display: flex;
  padding: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.white};

  &:hover {
    color: ${props => props.theme.colors.heavy_white};
    transition: color 0.2s;
  }

  ${props =>
    props.isOpen &&
    css`
      transition: 1s;
    `}
`;

export const DropdownMenu = styled.div`
  font-size: 14px;
  margin-left: 6px;
  color: ${props => props.theme.colors.white};
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.white};
`;
