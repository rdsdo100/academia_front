import styled from 'styled-components';

export const Container = styled.div`
  
  display: grid;
  grid-template-columns:  auto ;
  grid-template-rows:  50px ;
  background-color: ${props => props.theme.colors.primary};
  grid-template-areas:
          'MH'
          'CT';
  
`;

