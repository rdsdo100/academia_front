import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT ;  
  
  display: grid;

    grid-template-columns:  70px calc(100% - 70px)  ;
    grid-template-rows:   calc(100vh - 70px) ; 

    grid-template-areas:
    'OP CTT';
  
`;

export const Teste = styled.div`
    position: relative;
    box-sizing: border-box;
  width: 70px;
  height: 70px;
  padding : 5px;
  background-color: black;
  border: 1px solid #03e9f4;
`;



