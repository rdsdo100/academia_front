import styled from "styled-components";


export const Tabelas = styled.div`
    
`;

export const NavTabs = styled.nav `
  width:1200px;
  height: 700px;
  background-color: ${props => props.theme.colors.secondary};
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
  width: 300px;
  padding: 25px;
  background-color: ${props => props.theme.colors.black};
  display: block;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  text-align: center;

`;

export const Content = styled.div`
  
    border-top: 5px solid #e54e43;
    background-color: ${props => props.theme.colors.secondary};
    display: none;
    position: absolute;
    height: 631px;
    width: 1200px;
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
