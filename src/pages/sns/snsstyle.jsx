import styled from 'styled-components';
import imgBtn from '../../assets/icon/upload-file.png';
import deleteBtn from '../../assets/icon/x.png';
import { palette } from '../../styles/global/globalColor';

/* SnsUpload 페이지 */

export const SnsUploadSec = styled.section`
  padding: 30px 15px;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

export const SnsTextLable = styled.label`
  display: none;
`;

export const SnsTextInput = styled.textarea`
  width: 100%;
  height: 45%;
  padding: 35px 0;
  font-size: 14px;
  box-sizing: border-box;
  border: none;
  outline: 0px none transparent;
  resize: none;
`;

export const SnsUploadImg = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  bottom: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileUploader = styled.label`
  background: url(${imgBtn});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  cursor: pointer;
  width: 45px;
  height: 45px;
  bottom: 20px;
  right: 20px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const SingleImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  background: url(${deleteBtn});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img = styled.img`
  object-fit: cover;
  position: relative;
  margin: 5px;
  width: 200px;
  height: 130px;
  border-radius: 10px;
`;

/* sns 페이지 */
export const SnsPageArt = styled.article`
  align-items: center;
  box-sizing: border-box;
  width: 95%;
  height: 90px;
  margin: 55px 15px 0px 15px;
  background: #fff;
  display: flex;
  ul {
    display: flex;
    list-style: none;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      height: 24px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${palette.연한회색};
      border-radius: 20px;
      border: 8px solid #fff;
    }
    ::-webkit-scrollbar-track {
    }
  }
  li {
    margin-right: 15px;
    width: 60px;
    height: 60px;
  }
`;

export const SnsStoryImg = styled.img`
  box-sizing: border-box;
  object-fit: cover;
  border: 3px solid ${palette.초록초록};
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const SnsPageSec = styled.section`
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  height: 79%;
  background: #fff;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  h1 {
    margin: 10px 10px 30px 10px;
    padding: 14px 60px;
    background-color: #edf8e1;
    color: #457907;
    border-radius: 20px;
    font-size: 14px;
  }
  .SnsDefalutPage {
    align-items: center;
  }
  .SnsText {
    margin-top: 180px;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const MainPostArea = styled.div`
  align-items: left;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px -8px 0 0px ${palette.연한회색};
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
