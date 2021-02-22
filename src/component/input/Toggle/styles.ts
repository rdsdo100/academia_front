import styled from 'styled-components';

export const LoginBoxs = styled.div`
  position: relative;
  width: 400px;
  padding: 15px;
  box-sizing: border-box;
`;

export const UserBoxs = styled.div`
  position: relative;
`;

export const  Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  background: transparent;
  
`;

export const  Label = styled.label`
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 12px;
  color: #000000;
  pointer-events: none;
  transition: .5s;


  ${Input}:focus ~ &,
  ${Input}:valid ~ &{
    top: -20px;
    left: 0;
    color: red;
    font-size: 12px;
  }
  
`;