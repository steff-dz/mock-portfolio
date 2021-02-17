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

// const GlobalStyle = createGlobalStyle`

// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     overflow-x: hidden;
//     scrollbar-width: thin;
// }

// *::-webkit-scrollbar{
//     width: 5px;
// }

// *::-webkit-scrollbar-thumb {
//     background-color: #9c9a9a;
//     border-radius: 20px;
//     border: transparent;
// }

// body {
//     height: 100vh;
//     width: 100vw;

// }

// html {
//     font-size: 10px;
// }

// body {
//     font-family: sans-serif;
//     color: #333;
//     overflow: hidden;

// }

// `;

export default GlobalStyle;
