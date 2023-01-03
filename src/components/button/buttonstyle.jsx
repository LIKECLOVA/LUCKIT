import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        width: 340px;
        padding: 12px 0;
        font-size: 14px;
        line-height: 18px;
      `;
    case 'middle':
      return css`
        width: 120px;
        height: 38px;
        padding: 12px;
        font-size: 14px;
        line-height: 14px;
      `;
    case 'middle-sm':
      return css`
        width: 72px;
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
  padding: 20px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #d7ecbd;

  color: white;

  background-color: ${(props) => {
    return props.disabled === 'disabled' ? '#d7ecbd' : '#78d00c';
  }};

  cursor: ${(props) => {
    return props.disabled === 'disabled' ? 'not-allowed' : 'pointer';
  }};

  &:hover {
    background-color: ${(props) => {
      return props.disabled !== 'disabled' ? '#47a902' : '#d7ecbd;';
    }};
  }

  /* 사이즈 설정 */
  ${({ size }) => {
    return setSize(size);
  }}
`;

// 팔로우 버튼

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

// 업로드 버튼

export const UploadButton = styled.button`
  /* 기본셋팅 */
  padding: 20px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 2px #d7ecbd;
  color: #fff;
  background: #d7ecbd;
  &.true {
    background: #78d00c;
    :hover {
      background: #47a902;
      cursor: pointer;
    }
  }

  /* 사이즈 설정 */
  ${({ size }) => {
    return setSize(size);
  }}
`;

export const SnsBtnWrap = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
    background-color: transparent;
  }

  button + button {
    margin-left: 8px;
  }

  button > img {
    width: 100%;
    height: 100%;
  }
`;
