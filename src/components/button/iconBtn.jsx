import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconBtn } from './iconBtnstyle';
// import addBtn from '../../assets/icon/addBtn.svg';
import moreBtn from '../../assets/icon/s-icon-more-vertical.png';
import imgBtn from '../../assets/icon/upload-file.png';
import { CommentModal, SnsPostModal } from '../modal/modal';


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
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams();

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <IconBtn onClick={onClick}icon={moreBtn}></IconBtn>
      {isOpen && <SnsPostModal onClickClose={onClickClose} accountName={accountName} id={id} />}
    </>
  );
}

export function CommentMoreBtn({accountname}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = localStorage.getItem("Account Name");

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <IconBtn onClick={onClick}icon={moreBtn}></IconBtn>
      {isOpen && <CommentModal onClickClose={onClickClose} id={id} accountname={accountname}/>}
    </>
  );
}