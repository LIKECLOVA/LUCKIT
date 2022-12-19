import styled from 'styled-components';
import ImgButtonIcon from '../../../assets/icon/upload-file.png';

export const MarketHeader = styled.section`
  display: flex;
  position: relative;
  border-bottom: 1px solid rgb(219, 219, 219);
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 8px 11px;
  margin: 0px auto;
  position: fixed;
  top: 0px;
  background: #edf8e1;
  display: flex;
  z-index: 10;
  button {
    cursor: pointer;
    :last-child {
      margin-left: 80%;
    }
  }
`;

export const Form = styled.section`
  margin-top: 70px;
  padding: 50px;
`;

export const ImgUploadWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ImgPreviewContainer = styled.div`
  width: 500px;
  height: 300px;
  background: #dbdbdb;
  border-radius: 10px;
  position: relative;
  margin-bottom: 70px;
`;

export const PreviewImg = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const UploadImg = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const UploadLabel = styled.label`
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background: url(${ImgButtonIcon});
  background-size: contain;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgLabel = styled.label`
  margin-bottom: 10px;
`;

export const TextLabel = styled.label`
  margin-bottom: 10px;
`;

export const MarketInput = styled.input`
  width: 500px;
  padding: 12px;
  background: #f2f2f2;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  margin-bottom: 50px;

  &::placeholder {
    color: #a0a0a0;
  }

  :focus {
    outline: 2px solid #85ce2d;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
