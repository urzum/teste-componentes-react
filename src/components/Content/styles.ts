import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 6px 0 0 6px;
  padding: 10px;
`;
