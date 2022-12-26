import styled, { css } from 'styled-components';


const setPosition = (posi) => {
    switch (posi) {
      case 'in':
        return css`
          position:absolute;
          bottom: 0px;
          right: 0px;
         
        `;
      case 'fixed':
        return css`
        position:fixed;
        z-index:40;
`;
      default:
        return null;
    }
  };
  
/* 기본설정: 원형 */
export const IconBtn = styled.button`
  right:10px;
  bottom:70px;
  z-index: 30;
  width: 30px;
  height: 30px;
  margin: 0px;
  padding: 0px;
  background-color: #FFFFFF;
 border-radius: 50%;
  cursor: pointer;
 
 ${(props) => { 
  return css`
    background: url(${props.icon}) no-repeat center/cover;
  `
  }} 

  /* 위치 설정 */
  ${({ posi }) => {
    return setPosition(posi);
  }}
`;

export const MarketMoreBtn = styled.button`

    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 8px;
    top: 16px;
    padding: 0;

    img {
         width: 24px;
         height: 24px;
     }

`