import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainSnsPostWhap,IconWrap, SnsIdWhap, SnsPostBox,UserProfileImg, SnsPostImg, SnsPostContent} from './mainpoststyle'
import { MoreBtn } from "../button/iconBtn";
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'

const onErrorImg = (e) => {
  e.target.src = DefaultUserImg;
}

const MainSnsPost = ({data}) => {

  return (
    <MainSnsPostWhap>
       <NavLink to='/yourprofile'>
      <UserProfileImg src={data.author.image} onError={onErrorImg} />
      </NavLink>
      <SnsPostBox>
      <NavLink to='/yourprofile'>
      <SnsIdWhap>
      <strong>{data.author.username}</strong>
      <p>@{data.author.accountname}</p>
      </SnsIdWhap>
      </NavLink>
      <NavLink to='/snsPost'>
      <SnsPostContent>{data.content}</SnsPostContent>
      <SnsPostImg src={data.image} onError = {e =>{e.target.style.display = 'none'}}/>
      </NavLink>
      <IconWrap>
      <button>좋아요버튼</button>
      <NavLink to='/snsPost'>
      <button>댓글버튼</button>
      </NavLink>
      </IconWrap>
      </SnsPostBox>
      <MoreBtn/>
    </MainSnsPostWhap>
  )
}

export default MainSnsPost
