import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
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
/* Sns게시글 더보기 버튼 */
export function MoreBtn({postId, accountname}) {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <IconBtn onClick={onClick}icon={moreBtn}></IconBtn>
      {isOpen && <SnsPostModal onClickClose={onClickClose} accountName={accountName} postId={postId} accountname={accountname}/>}
    </>
  );
}
/* 댓글 더보기 버튼 */
export function CommentMoreBtn({postId, commentId, accountname}) {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <IconBtn onClick={onClick}icon={moreBtn}></IconBtn>
      {isOpen && <CommentModal onClickClose={onClickClose} accountName={accountName} postId={postId} commentId={commentId} accountname={accountname}/>}
    </>
  );
}