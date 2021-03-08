import React from 'react';

import { GiExpense } from 'react-icons/gi';
import MainContent from '../../../components/MainContent';
import ContentHeader from '../../../components/ContentHeader';
import Content from '../../../components/Content';

const Despesas: React.FC = () => {
  return (
    <>
      <MainContent>
        <ContentHeader
          description="Despesas"
          icon={GiExpense}
          breadcrumb="Cadastros Financeiros > Despesas"
        />
        <Content />
      </MainContent>
    </>
  );
};

export default Despesas;
