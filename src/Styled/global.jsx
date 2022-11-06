import { createGlobalStyle } from "styled-components";
import FontStyles from "./fontStyles";

const GlobalStyle = createGlobalStyle`
    * {
            margin: 0;
            padding: 0;
        }
    
    body{
        font-family: 'Nunita', sans-serif;
        background-color: ${porps => porps.theme.settings.primary}
    }
`

export default GlobalStyle