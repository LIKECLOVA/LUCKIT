import React from 'react';
import { ImgInput, ImgPreviewContainer, PreviewImg, UploadImg, UploadLabel } from './marketuploadstyle';

export const ImgUpload = ({ onChange, fileref, src, defaultImg }) => {
  return (
    <>
      <ImgPreviewContainer>
        {!!src === false && !!defaultImg === false ? (
          <PreviewImg
            onClick={() => {
              fileref.current.click();
            }}
          />
        ) : (
          <UploadImg
            src={src ? src : defaultImg}
            alt='럭킷 메이트 이미지 등록'
            onClick={() => {
              fileref.current.click();
            }}
          />
        )}
        <UploadLabel htmlFor='inputFile'>
          <ImgInput
            id='inputFile'
            type='file'
            accept='.jpg, .gif, .jpeg, .bmp, .tif, .heic'
            name='luckitImg'
            onChange={onChange}
            ref={fileref}
          />
        </UploadLabel>
      </ImgPreviewContainer>
    </>
  );
};
