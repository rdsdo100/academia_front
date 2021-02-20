import styled from "styled-components";


export const Component = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( ${props => props.theme.colors.primary}, ${props => props.theme.colors.success} );
    
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: linear-gradient( rgba(21,31,50,1), rgba(36,59,85,1));
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;

`;

export const H2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;

`;


export const  UserBox = styled.div`
  position: relative;

`;


export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export const Label = styled.label`
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;

  ${Input}:focus ~ & {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }


`;
export  const  A = styled.a`
 
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
  

  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  }

`;