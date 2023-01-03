import styled from 'styled-components';
import ImgButtonIcon from '../../../assets/icon/upload-file.png';

export const Container = styled.section`
  margin-top: 70px;
  padding: 50px;
`;

export const ImgUploadWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ImgPreviewContainer = styled.div`
  width: 290px;
  height: 260px;
  background: #dbdbdb;
  border-radius: 10px;
  position: relative;
  margin-bottom: 70px;
  background-size: cover;
`;

export const PreviewImg = styled.img`
  width: 290px;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
`;

export const UploadImg = styled.img`
  width: 290px;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgLabel = styled.label`
  margin-bottom: 10px;
`;

// -----------------------------------

export const MarketForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 0 50px;
`;

export const MarketInput = styled.input`
  padding: 15px;
  background: #f2f2f2;
  border-radius: 10px;
  border: 1px solid #f2f2f2;

  &::placeholder {
    color: #a0a0a0;
  }
  :focus {
    outline: 2px solid #85ce2d;
  }
`;

export const TextLabel = styled.label`
  float: left;
  margin-bottom: 10px;
`;

export const UploadLabel = styled.label`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  background: url(${ImgButtonIcon});
  background-size: contain;
`;

export const ErrorMessage = styled.em`
  font-size: 10px;
  margin-top: 7px;
  margin-bottom: 50px;
  color: red;
`;
