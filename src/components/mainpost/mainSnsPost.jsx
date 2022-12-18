import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainSnsPostWhap,IconWrap, SnsIdWhap, SnsPostBox} from './mainpoststyle'
import { MoreBtn } from "../button/iconBtn";

const MainSnsPost = ({data}) => {
  return (
    <MainSnsPostWhap>
       <NavLink to='/yourprofile'>
      <img src={data.author.image} alt="프로필이미지" />
      </NavLink>
      <SnsPostBox>
      <NavLink to='/yourprofile'>
      <SnsIdWhap>
      <strong>{data.author.username}</strong>
      <p>@{data.author.accountname}</p>
      </SnsIdWhap>
      </NavLink>
      <NavLink to='/snsPost'>
      <p>{data.content}</p>
      <img src={data.image} alt="게시글이미지" />
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
