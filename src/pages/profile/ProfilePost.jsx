import React from 'react'
import { NavLink } from 'react-router-dom';
import { ImgListDiv, SnsProfileWrap, AuthorNavLink, AuthorImgNavLink, SnsContBox, MoreBtnWrap } from './myprofilestyle';
import { MoreBtn } from "../../components/button/iconBtn";
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'

const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  }

export default function ProfilePost({post}) {
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
            <MoreBtn/>
        </MoreBtnWrap>
    </>
  )
}
