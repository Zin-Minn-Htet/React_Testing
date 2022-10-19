import { createGlobalStyle } from "styled-components";

export const  GlobalCSS = createGlobalStyle`
    * {
        margin : 0;
        padding : 0
    }
    a{
        text-decoration: none;
    }
    ul,li{
        list-style-type: none;
    }
`