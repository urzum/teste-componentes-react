import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  grid-template-rows: 70px auto 30px;

  grid-template-areas:
    'AS MH'
    'AS CT'
    'AS MF';

  height: 100vh;
`;
