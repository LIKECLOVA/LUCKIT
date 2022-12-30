import styled from 'styled-components';
import imgBtn from '../../assets/icon/img-button.png';
import deleteBtn from '../../assets/icon/x.png'

/* SnsUpload 페이지 */
const SnsUploadArt = styled.article`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 8px 11px;
    margin: 0px auto;
    position: fixed;
    top: 0px;
    background: #EDF8E1;
    display: flex;
    z-index: 10;
    button {
      cursor: pointer;
        :last-child{
            margin-left:80%;
    }}
`;

export { SnsUploadArt }

const SnsUploadSec = styled.section`
top:4%;
  padding : 30px 34px;
  justify-content: center;
  width: 100%;
  height: 90%;
    & > input{
  }
`;

export { SnsUploadSec }

const SnsTextLable = styled.label`
display: none;
`

export { SnsTextLable }

const SnsTextInput = styled.textarea`
  width: 100%;
  height: 40vh;
  padding: 32px 0;
  box-sizing:border-box;
  border:none;
  outline:0px none transparent;
  resize: none;
`

export { SnsTextInput }

const SnsUploadImg = styled.div`
 box-sizing:border-box;
  width:100%;
  height:300px;
  bottom: 130px;
  left : 0;
  right:0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  margin-top: 25px; 
  `;

export { SnsUploadImg }

export const FileUploader = styled.label`
  background: url(${imgBtn});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  cursor: pointer;
  width: 36px;
  height: 36px;
  bottom: 20px;
  right : 20px;
  z-index: 90;
`

export const FileInput = styled.input`
  display: none;
`

export const SingleImg = styled.img`
  width: 400px;
  height:300px;
  border-radius:10px;
  object-fit: cover;
  @media screen and (max-width:380px){
    width:150px;
    height:90px;
  }
`
export const DeleteBtn = styled.button`
  cursor: pointer;
  position:absolute;
  width:20px;
  height:20px;
  background: url(${deleteBtn});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Img = styled.img`
  object-fit: cover;
  position: relative;
  margin:5px;
  width:200px;
  height:130px;
  border-radius:10px;
  @media screen and (max-width:380px){
    width:150px;
    height:90px;
  }
`

/* sns 페이지 */

const SnsPageArt = styled.article`
  align-items: center;
    box-sizing: border-box;
    width: 95%;
    height: 110px;
    margin: 55px 15px 0px 15px;
    top: 0px;
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    ul{
      display: flex;
      list-style: none;
      white-space:nowrap;
      overflow-x: scroll;
      overflow-y:hidden;
      -ms-overflow-style: none;
      ::-webkit-scrollbar {
    height: 1.4rem;
    }
    ::-webkit-scrollbar-thumb {
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
    border: 0.5rem solid #fff;
    }
    ::-webkit-scrollbar-track {
    }
    }
   li{
        margin-right:15px;
        width: 60px;
        height:60px;
    }
`;

export { SnsPageArt }

const SnsStoryImg =styled.img`
      box-sizing: border-box;
      object-fit: cover;
      border: 3px solid #85CE2D;
      border-radius: 50%;
      width: 60px;
      height:60px;
`;

export { SnsStoryImg }

const SnsPageSec= styled.section`
  align-items: center;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
    height: 79%;
    top: 0px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    z-index: 10;
    white-space:nowrap;
      overflow: scroll;
      -ms-overflow-style: none;
      ::-webkit-scrollbar{
        display: none;
      }
h1{
  margin: 0px 15px 30px 15px;
  padding:14px 70px;
  background-color: #EDF8E1;
  color: #457907;
  border-radius: 20px;
  font-size:14px;
}
.test1{
  align-items: center;
}
`;

export { SnsPageSec }

const MainPostArea= styled.div`
  align-items: left;
    box-sizing: border-box;
    width: 100%;
    top: 0px;
    box-shadow: 0px -7px 0 0px rgb(237, 237, 237);
    border-radius: 20px;
    border: 1px solid #F5F4F4;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
`;

export { MainPostArea }
