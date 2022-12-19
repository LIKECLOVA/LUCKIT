import styled from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const JoinProfileWrap = styled.div`
  padding: 25px;

  h2 {
    margin-top: 50px;
    font-size: 60px;
  }
  .title:nth-of-type(1) {
    font-size: 30px;
    margin-top: 14px;
  }
  .title:nth-of-type(2) {
    font-size: 20px;
    margin-top: 14px;
  }
  .profileMidWrap {
    margin-top: 100px;
    display: flex;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius:50%;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .buttonFlexBox {
    margin-top: 30px;
  }
`;

export const ProfileImgLabel =styled.label`
  position: relative;
 
`
export const ProfileImgInput = styled.input`
  display:none;
`


export const ProfileLabel = styled.label`
 position: relative;
  display: block;
  .profileMidWrap + & {
    margin-top: 50px;
  }
  .message {
    color:red;
    font-size: 14px;
    padding: 10px 30px;
    position: absolute;
  }
`;

export const ProfileInput = styled.input`
  display: block;
  width: 300px;
  height: 70px;
  border-radius:50px;
  padding:15px 30px;
  border: none;
  background-color:#f1f1f1;
  font-size: 20px;
  &:focus{
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
  &:focus{
    outline: 3px solid ${palette.초록초록};
  }
`;
