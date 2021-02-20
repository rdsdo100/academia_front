import styled from 'styled-components';

export const Container = styled.div`
  grid-area: OP ;
  position: relative;
  width: 70px;
  height: calc(100vh - 50px);
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  
  
  
`;



