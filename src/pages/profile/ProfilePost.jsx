import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { ImgListDiv, SnsProfileWrap, AuthorNavLink, AuthorImgNavLink, SnsContBox, MoreBtnWrap, MoreBtn } from './myprofilestyle';
import {PostModalWrap, PostModalBtnWrap, NavLinkStyle, ModalBtnWrap, ModalWrap, Div} from '../../components/modal/modalstyle'
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'
import IconMoreVerticalS from '../../assets/icon/s-icon-more-vertical.png'

export default function ProfilePost({post}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams();

    const onClick = () => {
        setIsOpen(true);
      }

    const onClickCloseModal = () => {
        setIsOpen(false);
    }

    const onClickDeleteModal = () => {
        setIsOpenModal(true)
    }

    const onClickCancel = () => {
        setIsOpenModal(false)
    }

    const onErrorImg = (e) => {
        e.target.src = DefaultUserImg;
      }

  return (
    <>
        <SnsProfileWrap>
            <AuthorImgNavLink to={`/yourprofile/${post.author.accountname}`}>
                <img src={post.author.image} alt="프로필이미지" onError={onErrorImg}/>
            </AuthorImgNavLink>
            <AuthorNavLink to='/yourprofile' className='authorInfo'>
                <strong>{post.author.username}</strong>
                <p>@ {post.author.accountname}</p>
            </AuthorNavLink>
        </SnsProfileWrap>
        <SnsContBox>
            <NavLink to='/snsPost'>
                <p>{post.content}</p>
                <div className='snsImgList'>
                {post.image ? post.image.split(',').map((src, index)=> {
                    return (
                    <ImgListDiv key={index}>
                        <img src={src} onError = {e =>{e.target.style.display = 'none'}} alt="게시글이미지" />
                    </ImgListDiv>
                    )
                })
                : 
                <></>}
                </div>
            </NavLink>
            <div className='btnWrap'>
                <button>
                    <img src={IconHeart} alt='좋아요 버튼' />
                </button>
                <NavLink to='/snsPost'>
                    <button>
                        <img src={IconMessage} alt='댓글 버튼'/>
                    </button>
                </NavLink>
            </div>
        </SnsContBox>
        <MoreBtnWrap>
            <MoreBtn onClick={onClick}>
                <img src={IconMoreVerticalS} alt='게시글 수정, 삭제 버튼' />
            </MoreBtn>
        </MoreBtnWrap>
        {isOpen &&
        <PostModalWrap onClick={onClickCloseModal}>
        <div className='test' onClick={(e) => e.stopPropagation()}>
            {accountName === id ? <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>삭제</button>
              <NavLinkStyle to='#'>수정</NavLinkStyle>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>게시글을 삭제할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>삭제</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>
            }
            </> : <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>신고할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>신고</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>}
            </>}
        </div>
      </PostModalWrap>}
    </>
  )
}
