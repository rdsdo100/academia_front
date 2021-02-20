import styled from 'styled-components';
import {RiUserAddLine} from "react-icons/ri";

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

  border: 1px solid #03e9f4;
`;


export const TesteIcons = styled(RiUserAddLine)`

 
  width: 50px;
  height: 50px;
  color: white;

`;
