import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        width: 100%;
        padding: 19px 0;
        font-size: 24px;
        line-height: 30px;
      `;
    case 'middle':
      return css`
        width: 15%;
        height: 40px;
        padding: 10px;
        font-size: 14px;
        line-height: 12px;
      `;
    case 'middle-sm':
      return css`
        width: 16%;
        height: 32px;
        font-size: 14px;
        padding: 0;
      `;
    default:
      return null;
  }
};

export const Button = styled.button`
  /* 기본셋팅 */
  background-color: ${palette.마이너스초록};
  &:hover {
    background-color: ${palette.초록초록};
  }
  padding: 20px;
  border-radius: 30px;
  color: white;
  /* 사이즈 설정 */
  ${({ size }) => {
    return setSize(size);
  }}
`;

/**  ***********팔로우 버튼************ **/

export const FollowButton = styled.button`
  padding: 20px;
  border-radius: 30px;
  color: white;
  ${({ isFollow }) => {
    return isFollow
      ? css`
          background-color: white;
          border: 1px solid ${palette.내부텍스트};
          color: ${palette.내부텍스트};
        `
      : css`
          background-color: ${palette.초록초록};
        `;
  }};
  /* 사이즈 설정 */
  ${({ size }) => {
    return setSize(size);
  }}
`;