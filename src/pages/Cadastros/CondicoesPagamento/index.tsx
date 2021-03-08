import React from 'react';

import { FaCommentDollar } from 'react-icons/fa';
import MainContent from '../../../components/MainContent';
import ContentHeader from '../../../components/ContentHeader';
import Content from '../../../components/Content';

const CondicoesPagamento: React.FC = () => {
  return (
    <>
      <MainContent>
        <ContentHeader
          description="Condições de Pagamento"
          icon={FaCommentDollar}
          breadcrumb="Cadastros Financeiros > Condições de Pagamento"
        />
        <Content />
      </MainContent>
    </>
  );
};

export default CondicoesPagamento;
