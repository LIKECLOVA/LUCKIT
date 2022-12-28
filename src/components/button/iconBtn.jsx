import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AddBtn, BackArrowBtn, IconBtn, MarketMoreBtn, PostUploadImg } from './iconBtnstyle';
// import addBtn from '../../assets/icon/addBtn.svg';
import moreBtn from '../../assets/icon/s-icon-more-vertical.png';
import imgBtn from '../../assets/icon/upload-file.png';
import { CommentModal, MarketPreviewModal, SnsPostModal } from '../modal/modal';
import IconPostUpload from '../../assets/icon/market-plus.png'



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
export function MoreBtn({postId, accountname, postContent, postImg}) {
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
      {isOpen && <SnsPostModal onClickClose={onClickClose} accountName={accountName} postId={postId} accountname={accountname} postContent={postContent} postImg={postImg}/>}
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

export const MarketPostMoreBtn  = ({productId}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onClick = () => {
    setIsOpen(true);
  };

  const onClickClose = (value) => {
    setIsOpen(value);
  };

  return (
    <>
      <MarketMoreBtn onClick={onClick}>
        <img src={moreBtn} alt='더보기 버튼'/>
      </MarketMoreBtn>
      {isOpen && <MarketPreviewModal onClickClose={onClickClose} productId={productId}/>}
    </>
  )
}

// 프로필 페이지 게시글 업로드 버튼

export const ProfilePostUploadBtn = ({pathName}) => {
  return (
    <NavLink to={pathName}>
      <PostUploadImg src={IconPostUpload} alt='게시글 등록 버튼' />
    </NavLink>
  )
}

// 홈페이지, sns 페이지 게시글 업로드 버튼

export const PostUploadBtn = ({pathName}) => {
  return (
    <NavLink to={pathName}>
        <AddBtn />
    </NavLink>
  )
}

// 뒤로가기 아이콘 버튼

export const BackBtn = () => {
  const navigate = useNavigate();
  
  return <BackArrowBtn onClick={()=>{navigate(-1)}}></BackArrowBtn>
}