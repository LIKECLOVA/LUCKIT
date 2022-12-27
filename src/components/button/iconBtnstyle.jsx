import styled, { css } from 'styled-components';
import addBtn from '../../assets/icon/addBtn.svg';
import IconArrow from '../../assets/icon/icon-arrow-left.png';

const setPosition = (posi) => {
  switch (posi) {
    case 'in':
      return css`
        position: absolute;
        bottom: 0px;
        right: 0px;
      `;
    case 'fixed':
      return css`
        position: fixed;
        z-index: 40;
      `;
    default:
      return null;
  }
};

/* 기본설정: 원형 */
export const IconBtn = styled.button`
  right: 10px;
  bottom: 70px;
  z-index: 30;
  width: 30px;
  height: 30px;
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;

  ${(props) => {
    return css`
      background: url(${props.icon}) no-repeat center/cover;
    `;
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
`;

export const PostUploadImg = styled.img`
  width: 25px;
  height: 25px;
  padding: 7px;
  border-radius: 50%;
  background-color: #f5f3f3;
  vertical-align: top;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 70px;
  width: 70px;
  height: 70px;
  padding: 0px;
  background: url(${addBtn});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 90;
`;

export const BackArrowBtn = styled.button`
  width:24px;
  height:24px;
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
