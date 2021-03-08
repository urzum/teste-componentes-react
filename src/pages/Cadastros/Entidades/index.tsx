import React from 'react';

import { MdPermIdentity } from 'react-icons/md';
import MainContent from '../../../components/MainContent';
import ContentHeader from '../../../components/ContentHeader';
import Content from '../../../components/Content';

const Entidades: React.FC = () => {
  return (
    <>
      <MainContent>
        <ContentHeader
          description="Entidades"
          icon={MdPermIdentity}
          breadcrumb="Cadastros Essências > Entidades"
        />
        <Content />
      </MainContent>
    </>
  );
};

export default Entidades;
