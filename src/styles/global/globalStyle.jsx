import { createGlobalStyle } from 'styled-components';
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`


    ${reset}
    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
