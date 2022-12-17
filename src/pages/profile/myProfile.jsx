import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { MyProfileWrap, SnsPostBtn } from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar'
import {MainSnsPostWhap, IconWrap, SnsIdWhap, SnsPostBox} from '../../components/mainpost/mainpoststyle'
import { MoreBtn } from "../../components/button/iconBtn";

export const MyProfile = () => {
  const [snsPostsData, setSnsPostsData] = useState();

  const accountname = 'clover2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjM2NzU3MSwiaWF0IjoxNjcxMTgzNTcxfQ.DwRg_udzt-BG1TCQ43G2gHRNy72fSux7QaSjnZrdt5w'

  useEffect(() => {

    snsPostList();
    
  }, [])

  const snsPostList = async () => {
    await fetch(`https://mandarin.api.weniv.co.kr/post/${accountname}/userpost/?limit=5`, {
      method: 'GET',
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      setSnsPostsData(data.post)
    })
  }

  return (
    <>
      <ProfileAndChatHeader />
      <MyProfileWrap>
        <ProfileBox/>
        <MarketPreviewPost/>
        <section>
        <SnsPostBtn>
          <button>List</button>
          <button>Thum</button>
        </SnsPostBtn>
        <ul>
          {snsPostsData && snsPostsData.map((post) => {
            return (
              <MainSnsPostWhap key={post.id}>
                <NavLink to='/yourprofile'>
                  <img src={post.author.image} alt="프로필이미지" />
                </NavLink>
                <SnsPostBox>
                <NavLink to='/yourprofile'>
                <SnsIdWhap>
                  <strong>{post.author.username}</strong>
                  <p>@ {post.author.accountname}</p>
                </SnsIdWhap>
                </NavLink>
                <NavLink to='/snsPost'>
                  <p>{post.content}</p>
                  <img src={post.image} alt="게시글이미지" />
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
          })}
        </ul>
      </section>
      </MyProfileWrap>
      <NavBar />     
    </>
  );
};