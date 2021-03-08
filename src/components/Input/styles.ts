import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}
const colorButton = css`
  ${props => props.theme.colors.button}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
  margin: 5px;
`;

export const DescriptionInput = styled.span<ContainerProps>`
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.gray};

  ${props =>
    props.isFilled
      ? css`
          color: ${colorButton};
          transition: color 0.2s;
        `
      : css`
          color: props.theme.colors.gray;
          transition: color 0.2s;
        `}
`;

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  flex-grow: 1;
  box-sizing: border-box;

  background: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.secondary};
  padding: 10px;
  width: 100%;
  color: ${props => props.theme.colors.gray};

  ${props =>
    props.isFocused &&
    css`
      color: ${colorButton};
      border-color: ${colorButton};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colorButton};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.white};

    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }

  > svg {
    margin-right: 10px;
    align-items: center;
    size: 16px;
  }

  input + svg {
    margin-left: 10px;
    margin-right: 5px;
    align-items: center;
  }

  svg + svg {
    margin-left: 10px;
    margin-right: 5px;
    align-items: center;
  }
`;
