import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 16px
    }
`; 

export default GlobalStyles