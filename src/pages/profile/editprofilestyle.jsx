import styled from "styled-components";
import { palette } from "../../styles/global/globalColor";

export const EditProfilePageWrap = styled.div`
    padding:25px;
`
export const EditProfilePageUserInfo = styled.div`

    /* 컴포넌트 만들 부분 */
    margin-top: 80px;
    margin-bottom:50px;
    display: flex;
    img {
      width: 120px;
      height: 120px;
      margin-right:10px;
      object-fit: cover;
      border-radius:50%;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
`
export const EditProfileImgLabel =styled.label`
  position: relative;
 
`
export const EditProfileImgInput = styled.input`
  display:none;
`

// ////////////////////////////
export const EditProfileUserInput = styled.input`
    display: block;
  width: 100%;
  height: 50px;
  border-radius:50px;
  padding:10px 15px;
  border: none;
  background-color:#f1f1f1;
  font-size: 14px;
  &:focus{
    outline: 3px solid ${palette.초록초록};
    
  }
`

export const EditProFileUserLabel = styled.label`
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
`

export const EditProfileTextarea = styled.textarea`
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