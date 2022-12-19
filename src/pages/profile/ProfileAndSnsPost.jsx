import React from 'react'
import { NavLink } from 'react-router-dom';
import { ImgListDiv, SnsProfileWrap, AuthorNavLink, AuthorImgNavLink, SnsContBox, MoreBtnWrap } from './myprofilestyle';
import { MoreBtn } from "../../components/button/iconBtn";
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';

export default function ProfileAndSnsPost({post}) {
  return (
    <>
        <SnsProfileWrap>
            <AuthorImgNavLink to={`/yourprofile/${post.author.accountname}`}>
                <img src={post.author.image} alt="프로필이미지" />
            </AuthorImgNavLink>
            <AuthorNavLink to='/yourprofile' className='authorInfo'>
                <strong>{post.author.username}</strong>
                <p>@ {post.author.accountname}</p>
            </AuthorNavLink>
        </SnsProfileWrap>
        <SnsContBox>
            <NavLink to='/snsPost'>
                <p>{post.content}</p>
                <div className='testtest'>
                {post.image ? post.image.split(',').map((src, index)=> {
                    return (
                    <ImgListDiv key={index}>
                        <img src={src} alt="게시글이미지" />
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
