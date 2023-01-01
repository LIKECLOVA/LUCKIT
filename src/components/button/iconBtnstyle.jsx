import styled, { css } from 'styled-components';
import addBtn from '../../assets/icon/addBtn.svg';
import IconArrow from '../../assets/icon/icon-arrow-left.png';
import moreBtn from '../../assets/icon/s-icon-more-vertical.png';

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
    case 'profileIn':
      return css`
        position: absolute;
        bottom: 10px;
        right: 10px;
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
  width: 40px;
  height: 40px;
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

export const SnsMoreBtn = styled.button`
  background: url(${moreBtn});
  background-size: cover;
  width: 15px;
  height: 15px;
  position: absolute;
  margin-top: 2px;
  right: 0px;
  padding: 0;
`;
export const CommentBtn = styled.button`
  background: url(${moreBtn});
  background-size: cover;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  padding: 0;
`;

export const MarketMoreBtn = styled.button`
  background-color: transparent;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 8px;
  top: 16px;
  padding: 0;
`;

export const PostUploadImg = styled.img`
  width: 22px;
  height: 22px;
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
  width: 65px;
  height: 65px;
  padding: 0px;
  background: url(${addBtn});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 90;
`;

export const BackArrowBtn = styled.button`
  width: 15px;
  height: 15px;
  vertical-align: top;
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
`;
