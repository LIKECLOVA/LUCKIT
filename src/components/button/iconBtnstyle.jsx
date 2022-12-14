import styled, { css } from 'styled-components'

const setPosition = (posi) => {
    switch (posi) {
      case 'in':
        return css`
          position:absolute;
          background-color: orange;
          bottom: 0px;
          right: 0px;
          width: 36px;
          height: 36px;
          img{
            width: 36px;
            height: 36px;
          }
        `;
      case 'fixed':
        return css`
        position:fixed;
`;
      default:
        return null;
    }
  };
  
/* 기본설정: 원형+ 하단 fixed */
export const IconBtn = styled.button`
  position:fixed;
  right:10px;
  bottom:70px;
  z-index: 30;
  width: 50px;
  height: 50px;
  margin: 0px;
  padding: 0px;
 border-radius: 50%;
  cursor: pointer;
  img{
    width: 50px;
    height: 50px;
  }
  
  /* 위치 설정 */
  ${({ posi }) => {
    return setPosition(posi);
  }}
`;