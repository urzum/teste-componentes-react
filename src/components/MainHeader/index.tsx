import React from 'react';

import { IoMdLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BiSupport } from 'react-icons/bi';
import { FaRegQuestionCircle } from 'react-icons/fa';

import imgProfile from '../../assets/rezinaldim.jpeg';

import { Container, Links, Welcome, Profile } from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Links>
        <FaRegQuestionCircle size={26} />
        <BiSupport size={26} />
        <CgProfile size={26} />
        <IoMdLogOut size={26} />
      </Links>

      <Profile>
        <img src={imgProfile} alt="Usuário" />
      </Profile>
      <Welcome>
        <h4>Olá,</h4>
        <h5>Armando Urzum</h5>
      </Welcome>
    </Container>
  );
};

export default MainHeader;
