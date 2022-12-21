import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainSnsPostWhap,IconWrap, SnsIdWhap, SnsPostBox,UserProfileImg, SnsPostImg, SnsPostContent,CommentBtnWrap} from './mainpoststyle'
import { MoreBtn } from "../button/iconBtn";
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'
import CommentIcon from "../../assets/icon/icon-message-circle.svg"
import HeartBtn from "../button/heart/heartBtn"

const onErrorImg = (e) => {
  e.target.src = DefaultUserImg;
}

const MainSnsPost = ({data}) => {
  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';

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
      <HeartBtn
          userToken={token}
          hearted={data.hearted}
          postId={data.id}
          heartCount={data.heartCount}
        />
      <NavLink to={`/snspost/${data.id}`}>
      <CommentBtnWrap>
        <img src={CommentIcon} alt="" style={{ marginRight: '6px' }} />
        <span>{data.comments.length}</span>
      </CommentBtnWrap>
      </NavLink>
      </IconWrap>
      </SnsPostBox>
      <MoreBtn/>
    </MainSnsPostWhap>
  )
}

export default MainSnsPost
