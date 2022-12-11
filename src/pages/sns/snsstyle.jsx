import styled from 'styled-components';

/* SnsUpload 페이지 */
const Snsuploadart = styled.article`
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
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    button {
        :last-child{
            margin-left:80%;
    }}
`;

export { Snsuploadart }

const Snsuploadsec = styled.section`
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

export { Snsuploadsec }
const SnsuploadForm = styled.form`
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

export { SnsuploadForm }

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
