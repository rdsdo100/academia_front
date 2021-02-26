import styled from 'styled-components';

export const Container = styled.div`
  
  display: grid;
  grid-template-columns:  100% ;
  grid-template-rows:  50px auto ;
  background-color: ${props => props.theme.colors.primary};
  grid-template-areas:
          'MH'
          'CT';

`;

