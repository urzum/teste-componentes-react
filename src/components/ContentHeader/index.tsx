import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import {
  Container,
  ContainerHeader,
  ContainerH1,
  ContainerIcon,
  ContainerBreadC,
} from './styles';

interface IContentHeaderProps {
  description: string;
  icon?: React.ComponentType<IconBaseProps>;
  breadcrumb?: string;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  description,
  icon: Icon,
  breadcrumb,
}) => {
  return (
    <Container>
      <ContainerBreadC>
        <h5>{breadcrumb}</h5>
      </ContainerBreadC>
      <ContainerHeader>
        <ContainerIcon>{Icon && <Icon size={28} />}</ContainerIcon>
        <ContainerH1>
          <h1>{description}</h1>
        </ContainerH1>
      </ContainerHeader>
    </Container>
  );
};

export default ContentHeader;
