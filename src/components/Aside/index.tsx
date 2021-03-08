import React from 'react';
import logoImg from '../../assets/logo_afill_aside.png';

import MenuNav from '../MenuNav';

import { Container, ContainerLogo, MainNav } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <ContainerLogo>
        <img src={logoImg} alt="aFill" />
      </ContainerLogo>
      <MainNav>
        <MenuNav />
      </MainNav>
    </Container>
  );
};

export default Aside;
