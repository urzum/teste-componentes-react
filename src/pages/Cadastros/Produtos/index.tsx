import React from 'react';

import { AiFillSetting } from 'react-icons/ai';
import MainContent from '../../../components/MainContent';
import ContentHeader from '../../../components/ContentHeader';
import Content from '../../../components/Content';

const Produtos: React.FC = () => {
  return (
    <>
      <MainContent>
        <ContentHeader
          description="Produtos"
          icon={AiFillSetting}
          breadcrumb="Cadastros Essências > Produtos"
        />
        <Content />
      </MainContent>
    </>
  );
};

export default Produtos;
