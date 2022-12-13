import styled from 'styled-components';

/* SnsUpload 페이지 */
const SnsUploadArt = styled.article`
  display: flex;
  position: relative;
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
position: absolute;
top:4%;
  display: flex;
  justify-content: center;
  align-content: space-around;
  width: 100%;
  height: 90%;
  background-color: #000;
    & > input{
  }
`;

export { SnsUploadSec }
const SnsUploadForm = styled.form`
display: flex;
flex-direction: column;
position: relative;
width: 80%;
textarea {
  flex-grow:2;
  width: 100%;
  height: 60%;
  line-height: 2.5rem;
  margin: 0px;
  border: none;
  outline: none;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  border-bottom: 0.1rem solid #000;
  :focus {
    border-bottom: 0.1rem solid #000
    };
  };
`;

export { SnsUploadForm }

const SnsUploadImg = styled.section`
& > input{
    box-sizing:border-box;
    width:100%;
    height:80px;
    left : 0;
    right:0;
  };
  `;

export { SnsUploadImg }

const ImgUploadBtn = styled.button`
  position:fixed;
  right:0px;
  bottom: 10px;
  cursor: pointer;
  `;

export { ImgUploadBtn }


/* sns 페이지 */

const SnsPageArt = styled.article`
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
    box-sizing: border-box;
    width: 95%;
    height: 110px;
    margin: 65px 15px 15px 15px;
    top: 0px;
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    ul{
      display: flex;
      list-style: none;
      white-space:nowrap;
      overflow: scroll;
      -ms-overflow-style: none;
      ::-webkit-scrollbar{
        display: none;
      }
    }
    ul > li{
        margin-right:15px;
      :last-child{
        margin-right:0px;
      }
    }
    li > img{
      border: 3px solid #85CE2D;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
`;

export { SnsPageArt }

const SnsPageSec= styled.section`
  align-items: center;
    box-sizing: border-box;
    width: 95%;
    margin: 15px;
    height: 70%;
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
  margin: 35px 15px;
  padding:14px 144px;
  background-color: #EDF8E1;
  color: #457907;
  border-radius: 20px;
  font-size:14px;
}
`;

export { SnsPageSec }


const MainPostArea= styled.div`
  align-items: left;
    box-sizing: border-box;
    width: 100%;
    top: 0px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    z-index: 10;
`;

export { MainPostArea }