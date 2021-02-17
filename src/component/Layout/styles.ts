import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns:  70px 100% ;
  grid-template-rows:  70px auto;

  grid-template-areas:
    'MH MH'
    'CT CT';

  height: 100vh;
  min-width: 315px;
`;