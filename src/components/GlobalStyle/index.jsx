import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

html {
    font-size: 10px;
}

body {
    font-family: sans-serif;
    color: #333;
}

`;

export default GlobalStyle;
