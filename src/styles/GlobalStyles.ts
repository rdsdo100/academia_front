import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  * {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
`;