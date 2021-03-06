import styled from "styled-components";


export const Tabelas = styled.div`
    
`;

export const NavTabs = styled.nav `
  width:1110px;
  height: 600px;
  background-color: ${props => props.theme.colors.primary};
  position: relative ;
  left: 70px;
  box-shadow: 0 0 1em ${props => props.theme.colors.black};
  display: flex;

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
  width: 370px;
  padding: 25px;
  background-color: ${props => props.theme.colors.black};
  display: block;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  text-align: center;

`;

export const Content = styled.div`
  
    border-top: 5px solid ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.secondary};
    display: none;
    position: absolute;
    height: 531px;
    width: 1110px;
    left: 0;
    
`;

export const RdTabs = styled.input`
  display: none;
  
  &:checked ~ ${LabelTabs} {
    background-color: ${props => props.theme.colors.tertiary};
  }

  :checked ~ ${Content} {
    display: block;
  }
   
`;

export const DivLinha = styled.div`
display: flex;
`;

export const Div10 = styled.div`
  width: 10%;
`;
export const Div20 = styled.div`
  width: 20%;
`;
export const Div30 = styled.div`
  width: 30%;
`;
export const Div40 = styled.div`
  width: 40%;
`;
export const Div50 = styled.div`
  width: 50%;
`;

export const Div60 = styled.div`
  width: 60%;
`;
export const Div70 = styled.div`
  width: 70%;
`;
export const Div80 = styled.div`
  width: 80%;
`;
export const Div90 = styled.div`
  width: 90%;
`;
export const Div100 = styled.div`
  width: 100%;
`;