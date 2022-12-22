import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { ImgListDiv, SnsProfileWrap, AuthorNavLink, AuthorImgNavLink, SnsContBox, MoreBtnWrap, MoreBtn } from './myprofilestyle';
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'
import IconMoreVerticalS from '../../assets/icon/s-icon-more-vertical.png'
import { SnsPostModal } from '../../components/modal/modal';

export default function ProfilePost({post}) {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams();

    const onClick = () => {
        setIsOpen(true);
      }

    const onClickClose = (value) => {
        setIsOpen(value);
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
        {isOpen && <SnsPostModal onClickClose={onClickClose} accountName={accountName} id={id}/>}
    </>
  )
}
