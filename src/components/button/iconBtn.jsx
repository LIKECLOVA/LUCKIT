import React from 'react';
import { IconBtn } from './iconBtnstyle';
// import addBtn from '../../assets/icon/addBtn.svg';
import moreBtn from '../../assets/icon/s-icon-more-vertical.png';
import imgBtn from '../../assets/icon/upload-file.png';


// export function AddBtn({ posi }) {
//   return (
//     <IconBtn>
//       <img src={addBtn} posi={posi} alt='게시글 작성하기 버튼' />
//     </IconBtn>
//   );
// }

export function ImgUploadBtn({ posi, click }) {
  return <IconBtn onClick={click} icon={imgBtn} posi={posi}></IconBtn>;
}

export function MoreBtn() {
  return (
    <IconBtn icon={moreBtn}></IconBtn>
  );
}