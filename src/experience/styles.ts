import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  background-color: black;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 0;
    width: 100vh;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }
`;
