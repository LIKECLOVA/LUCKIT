import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { palette } from './globalColor';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf') format("truetype");
    font-display: swap;
} 

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
        font-family: 'GmarketSans';
        font-weight: 500;
        color: ${palette.내부텍스트};
    }

    p {
        font-family: 'GmarketSans';
    }
`;

export default GlobalStyle;
