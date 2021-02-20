import styled from "styled-components";
import {Label} from "../InputLogin/styles";

export const Tabelas = styled.div`



`;

export const NavTabs = styled.nav `
  width:1100px;
  height: 800px;
  background-color: black;
  position: relative ;
  left: 70px;
  box-shadow: 0 0 1em black;
`;

export const UL = styled.div`
  list-style: none;
  top: 0;

`;

export const LI = styled.div`
  float: left;

`;


export  const LabelTabs = styled.label`
  position: relative;
  width: 275px;
  padding: 25px;
  background-color: #363b48;
  display: block;
  color: #fff;
  cursor: pointer;
  text-align: center;

`;



export const Content = styled.div`
  
    border-top: 5px solid #e54e43;
    background-color: #8F8F8F;
    display: none;
    position: absolute;
    height: 731px;
    width: 1100px;
    left: 0;

  
`;

export const RdTabs = styled.input`
  display: none;


  &:checked ~ ${LabelTabs} {
    background-color: #e54e43;
  }

  :checked ~ ${Content} {
    display: block;
  }
  
`;





