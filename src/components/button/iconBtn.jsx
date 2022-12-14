import React from 'react'
import { IconBtn } from './iconBtnstyle'
import addBtn from '../../assets/icon/market-plus.png'
import imgUpload from '../../assets/icon/img-button.png'
import moreBtn  from "../../assets/icon/s-icon-more-vertical.png";

export function AddBtn({posi}) {
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

export function MoreBtn() {
  return (
    <IconBtn>
      <img src={moreBtn} alt="더보기버튼"/>
    </IconBtn>
  );
}
