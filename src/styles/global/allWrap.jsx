import styled from 'styled-components';

export const Bg = styled.div`
  background: #dbdbdb;
  background-image: url('https://user-images.githubusercontent.com/102042383/209568548-356801f4-a2b6-4e04-a445-54b2bbff93c2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 30px;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    background: #dbdbdb;
  }
`;

const Allwrap = styled.div`
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf') format('truetype');
    font-display: swap;
  }
  font-family: 'GmarketSans';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: 770px;
  overflow: hidden;
  outline: 10px solid #e6e6e6;
  border-radius: 30px;
  box-shadow: rgba(152, 152, 152, 0.24) 0px 3px 8px;
  background: #fff;
`;

export { Allwrap };
