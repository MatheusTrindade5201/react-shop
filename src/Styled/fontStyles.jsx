import { createGlobalStyle } from "styled-components";
import NunitaWoff from '../assets/fonts/nunito-v25-latin-regular.woff'
import NunitaWoff2 from '../assets/fonts/nunito-v25-latin-regular.woff2'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitaWoff}) format('woff'),
             url(${NunitaWoff2}) format('woff2');
    }
`
export default FontStyles;