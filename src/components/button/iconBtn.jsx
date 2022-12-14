import React from 'react'
import { IconBtn } from './iconBtnstyle'
import addBtn from '../../assets/icon/market-plus.png'
import imgUpload from '../../assets/icon/img-button.png'

export function AddBtn() {
  return (
    <IconBtn>
      <img src={addBtn} alt ="게시글 작성하기 버튼" />
    </IconBtn>
  );
}

export function ImgUploadBtn({ posi }) {
  return (
    <IconBtn posi={posi}>
      <img src={imgUpload} alt="이미지 업로드 버튼"/>
    </IconBtn>
  );
}