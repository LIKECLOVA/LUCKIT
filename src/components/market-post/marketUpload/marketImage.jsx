import axios from 'axios';
import React, { useRef } from 'react';
import { ImgInput, ImgPreviewContainer, UploadLabel } from './marketinputstyle';

export const MarketImage = ({ itemImage, setItemImage }) => {
  const imgStyle = {
    backgroundImage: `url(${itemImage})`,
  };
  const previewImage = useRef();

  function handleOnChange(e) {
    const loadImage = e.target.files;
    const formData = new FormData();

    formData.append('image', loadImage[0]);
    onLoadImage(formData, loadImage);
  }

  async function onLoadImage(formData, loadImage) {
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData, {
        'Content-Type': 'multipart/form-data',
      });

      if (res.data.filename) {
        setItemImage(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);
        preview(loadImage);
      } else {
        alert('.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic 파일만 업로드 가능합니다.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  function preview(loadImage) {
    const reader = new FileReader();

    reader.onload = () => {
      previewImage.current.style.backgroundImage = `url(${reader.result})`;
      previewImage.current.style.backgroundSize = 'cover';
      previewImage.current.style.backgroundRepeat = 'no-repeat';
    };
    reader.readAsDataURL(loadImage[0]);
  }

  return (
    <ImgPreviewContainer ref={previewImage} style={imgStyle}>
      <UploadLabel htmlFor='uploadImg' />
      <ImgInput
        className='a11yHidden'
        type='file'
        name='marketImg'
        id='uploadImg'
        accept='image/*'
        onChange={handleOnChange}
      />
    </ImgPreviewContainer>
  );
};
