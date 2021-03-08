import styled from 'styled-components';
import singInBackgroundImg from '../../assets/background_sigin01.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;

  img {
    max-width: 300px;
  }

  form {
    margin: 80px 0;
    width: 300px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
