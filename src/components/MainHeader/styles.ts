import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
`;

export const Welcome = styled.div``;

export const Profile = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
  }
`;

export const Links = styled.div`
  margin-right: 40px;
  svg {
    margin-right: 10px;
    align-items: center;
  }
`;
