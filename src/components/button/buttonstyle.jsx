import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        width: 100%;
        padding: 12px 0;
        font-size: 20px;
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
  padding: 20px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;

  color: white;
  

  
  background-color: ${(props) => {
    console.log('배경색', props);
    //  
    return props.disabled === 'disabled' ? '#b9d795' : '#78d00c' ;
  }};
  
  cursor: ${(props) => {
    return props.disabled === 'disabled' ? 'not-allowed' : 'pointer';
  }};

&:hover {
  background-color: ${(props) => {
    return props.disabled !== 'disabled' ? '#47a902' : '#b9d795;';
  }};
  }
  
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

/* ***************업로드 버튼************** */
export const UploadButton = styled.button`
  /* 기본셋팅 */
  padding: 20px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;
  color: #fff;
  &.true {
    background: #74d004;
    :hover {
      background: #47a902;
    }
  }

  &.false {
    background: #b9d795;
    cursor: default;
  }
  cursor: pointer;

  /* 사이즈 설정 */
  ${({ size }) => {
    return setSize(size);
  }}
`;
