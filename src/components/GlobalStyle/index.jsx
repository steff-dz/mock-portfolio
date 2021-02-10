import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    color: #333;

}

`;

export default GlobalStyle;
