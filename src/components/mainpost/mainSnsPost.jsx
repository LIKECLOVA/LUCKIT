import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainSnsPostWhap,IconWrap, SnsIdWhap, SnsPostBox,UserProfileImg, SnsPostImg, SnsPostContent} from './mainpoststyle'
import { MoreBtn } from "../button/iconBtn";
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'

const onErrorImg = (e) => {
  e.target.src = DefaultUserImg;
}

const MainSnsPost = ({data}) => {
  // const date = new Date(data.createAt);
  // const dateOptions = {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // };
  // const createAtFormat = new Intl.DateTimeFormat("ko-KR", dateOptions).format(
  //   date
  // );

  console.log(data)

  return (
    <MainSnsPostWhap>
       <NavLink to={`/profile/${data.author.accountname}`}>
      <UserProfileImg src={data.author.image} onError={onErrorImg} />
      </NavLink>
      <SnsPostBox>
      <NavLink to={`/profile/${data.author.accountname}`}>
      <SnsIdWhap>
      <strong>{data.author.username}</strong>
      <p>@{data.author.accountname}</p>
      </SnsIdWhap>
      </NavLink>
      <NavLink to={`/snspost/${data.id}`}>
      <SnsPostContent>{data.content}</SnsPostContent>
      <SnsPostImg src={data.image} onError = {e =>{e.target.style.display = 'none'}}/>
      </NavLink>
      <IconWrap>
      <button>좋아요버튼</button>
      <NavLink to={`/snspost/${data.id}`}>
      <button>댓글버튼</button>
      </NavLink>
      </IconWrap>
      </SnsPostBox>
      <MoreBtn/>
    </MainSnsPostWhap>
  )
}

export default MainSnsPost
