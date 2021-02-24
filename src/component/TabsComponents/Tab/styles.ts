import styled from "styled-components";

export const NavTabs = styled.nav `
  width:1110px;
  height: 600px;
  background-color: ${props => props.theme.colors.primary};
  position: relative ;
  left: 70px;
  box-shadow: 0 0 1em black;
  display: flex;

`;
export const UL = styled.div`
  list-style: none;
  top: 0;

`;