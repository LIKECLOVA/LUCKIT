import styled from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const JoinProfileWrap = styled.div`
  padding: 25px;
  height: 100%;

  h2 {
    margin-top: 10px;
    font-size: 40px;
  }
  .title:nth-of-type(1) {
    font-size: 20px;
    margin-top: 14px;
  }
  .title:nth-of-type(2) {
    font-size: 20px;
    margin-top: 14px;
  }
  // 컴포넌트 부분
  .profileMidWrap {
    margin-top: 60px;
    display: flex;
    height:140px;
    img {
      width: 120px;
      height: 120px;
      margin-right: 10px;
      object-fit: cover;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start
    }
  }
  .buttonFlexBox {
    margin-top: 30px;
  }
`;

export const ProfileImgLabel = styled.label`
  position: relative;
`;
export const ProfileImgInput = styled.input`
  display: none;
`;

export const ProfileLabel = styled.label`
  position: relative;
  display: block;
  .profileMidWrap + & {
    margin-top: 20px;
  }
  .message {
    color: red;
    font-size: 12px;
    padding: 5px 10px;
    position: absolute;
  }
`;

export const ProfileInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  padding: 10px 15px;
  border: none;
  background-color: #f1f1f1;
  font-size: 14px;
  &:focus {
    outline: 3px solid ${palette.초록초록};
  }
`;

export const ProfileTextarea = styled.textarea`
  width: 100%;
  height: 195px;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
  &:focus {
    outline: 3px solid ${palette.초록초록};
  }
`;
