import styled, { css } from 'styled-components'

const setPosition = (posi) => {
    switch (posi) {
      case 'in':
        return css`
          position:absolute;
          background-color: orange;
          bottom: 0px;
          right: 0px;
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
  
/* 기본설정: 원형 */
export const IconBtn = styled.button`
  right:10px;
  bottom:70px;
  z-index: 30;
  width: 50px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  background-color: #FFFFFF;
 border-radius: 50%;
  cursor: pointer;
  img{
    width: 28px;
    height: 28px;
    margin: 0px;
  }
  
  /* 위치 설정 */
  ${({ posi }) => {
    return setPosition(posi);
  }}
`;