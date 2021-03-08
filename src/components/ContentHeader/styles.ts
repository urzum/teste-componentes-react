import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  border-bottom: solid ${props => props.theme.colors.secondary};
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12px;
`;

export const ContainerH1 = styled.div`
  margin-left: 10px;
`;

export const ContainerBreadC = styled.div``;

export const ContainerIcon = styled.div``;
