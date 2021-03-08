import React from 'react';

import { AiOutlineDashboard } from 'react-icons/ai';
import MainContent from '../../components/MainContent';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import DataGrid from '../../components/DataGridBrowser';

const Dashboard: React.FC = () => {
  return (
    <>
      <MainContent>
        <ContentHeader
          description="Dashboard"
          icon={AiOutlineDashboard}
          breadcrumb="Dashboard"
        />

        <DataGrid />
      </MainContent>
    </>
  );
};

export default Dashboard;
