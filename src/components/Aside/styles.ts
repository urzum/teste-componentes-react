import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin: 0;
  padding: 12px 0 12px 0;
  margin-top: 6px;
`;

export const MainNav = styled.div`
  display: flex;
  width: 196px;
  height: 100%;
  padding: 8px;
  margin-bottom: 30px;
  margin-left: 20px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.tertiary};
`;
