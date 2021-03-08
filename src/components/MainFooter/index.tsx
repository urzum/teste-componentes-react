import React from 'react';

import { Container } from './styles';
import formatDate from '../../utils/formatDate';

const MainFooter: React.FC = () => {
  const dataBase = new Date(Date.now());
  const dateNow = String(
    `${dataBase.getDay()}/${dataBase.getMonth() + 1}/${dataBase.getFullYear()}`,
  );
  const dateUse = formatDate(dateNow);

  console.log(dataBase);

  return (
    <Container>
      <span>
        Empresa: <strong>aFill</strong>{' '}
      </span>
      <span>Data: {dateUse}</span>
    </Container>
  );
};

export default MainFooter;
