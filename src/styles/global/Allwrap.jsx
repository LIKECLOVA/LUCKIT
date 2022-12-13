import styled from 'styled-components';

const Allwrap = styled.div`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GmarketSansMedium';
  position: absolute;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 1180px;
  overflow: hidden;
  box-shadow: rgba(152, 152, 152, 0.24) 0px 3px 8px;
`;

export { Allwrap };
