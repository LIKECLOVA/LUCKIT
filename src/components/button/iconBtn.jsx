import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AddBtn, BackArrowBtn, IconBtn, MarketMoreBtn, PostUploadImg, SnsMoreBtn, CommentBtn } from './iconbtnstyle';
import moreBtn from '../../assets/icon/s-icon-more-vertical.png';
import imgBtn from '../../assets/icon/upload-file.png';
import { CommentModal, MarketPreviewModal, SnsPostModal } from '../modal/modal';
import IconPostUpload from '../../assets/icon/market-plus.png';

export function ImgUploadBtn({ posi, click }) {
  return <IconBtn onClick={click} icon={imgBtn} posi={posi}></IconBtn>;
}
/* Sns게시글 더보기 버튼 */
export function MoreBtn({ postId, accountName, postContent, postImg }) {
  const [isOpen, setIsOpen] = useState(false);
  const myAccountName = localStorage.getItem('Account Name');

  const onClick = () => {
    setIsOpen(true);
  };

  const onClickClose = (value) => {
    setIsOpen(value);
  };

  return (
    <>
      <SnsMoreBtn onClick={onClick}></SnsMoreBtn>
      {isOpen && (
        <SnsPostModal
          onClickClose={onClickClose}
          myAccountName={myAccountName}
          postId={postId}
          accountName={accountName}
          postContent={postContent}
          postImg={postImg}
        />
      )}
    </>
  );
}
/* 댓글 더보기 버튼 */
export function CommentMoreBtn({ postId, commentId, accountName }) {
  const [isOpen, setIsOpen] = useState(false);
  const myAccountName = localStorage.getItem('Account Name');

  const onClick = () => {
    setIsOpen(true);
  };

  const onClickClose = (value) => {
    setIsOpen(value);
  };

  return (
    <>
      <CommentBtn onClick={onClick} icon={moreBtn}></CommentBtn>
      {isOpen && (
        <CommentModal
          onClickClose={onClickClose}
          accountName={accountName}
          postId={postId}
          commentId={commentId}
          myAccountName={myAccountName}
        />
      )}
    </>
  );
}

export const MarketPostMoreBtn = ({ productId }) => {
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
        <img src={moreBtn} alt='더보기 버튼' className='moreBtn' />
      </MarketMoreBtn>
      {isOpen && <MarketPreviewModal onClickClose={onClickClose} productId={productId} />}
    </>
  );
};

// 프로필 페이지 게시글 업로드 버튼

export const ProfilePostUploadBtn = ({ pathName }) => {
  return (
    <NavLink to={pathName}>
      <PostUploadImg src={IconPostUpload} alt='게시글 등록 버튼' />
    </NavLink>
  );
};

// 홈페이지, sns 페이지 게시글 업로드 버튼

export const PostUploadBtn = ({ pathName }) => {
  return (
    <NavLink to={pathName}>
      <AddBtn />
    </NavLink>
  );
};

// 뒤로가기 아이콘 버튼

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <BackArrowBtn
      onClick={() => {
        navigate(-1);
      }}
    ></BackArrowBtn>
  );
};
