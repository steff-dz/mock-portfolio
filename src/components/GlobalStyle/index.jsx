import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
 box-sizing: border-box;
 overflow-x: hidden;
 margin: 0;
 padding: 0;
}

 *::-webkit-scrollbar{
     width: 5px;
 }

 *::-webkit-scrollbar-thumb {
     background-color: #9c9a9a;
     border-radius: 20px;
     border: transparent;
 }

html, body {
    height: 100%;
    width: 100%;
  
}

html {
    font-size: 10px;
}

body {
    font-family: sans-serif;
}
`;

export default GlobalStyle;
