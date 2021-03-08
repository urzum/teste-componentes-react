import styled, { css } from 'styled-components';
import { shade } from 'polished';

const colorButton = css`
  ${props => props.theme.colors.button}
`;

export const Container = styled.button`
  background: ${props => props.theme.colors.button};
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${props => props.theme.colors.white};
  width: 50%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#2196f3')};
  }
`;
