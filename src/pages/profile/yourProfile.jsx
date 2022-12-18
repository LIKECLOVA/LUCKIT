import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { MyProfileWrap, SnsPostBtn , NavLinkStyle, ImgAlbumBox, ImgAlbumList, TestNavLinkStyle, ImgListDiv } from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar'
import {MainSnsPostWhap, IconWrap, SnsIdWhap, SnsPostBox} from '../../components/mainpost/mainpoststyle'
import { MoreBtn } from "../../components/button/iconBtn";
import IconPostList from '../../assets/icon/icon-post-list-on.png'
import IconPostAlbum from '../../assets/icon/icon-post-album-on.png'



export const YourProfile = () => {
  const [snsPostsData, setSnsPostsData] = useState([]);
  const [imgList, setImgList] = useState(true);
  const [imgAlbum, setImgAlbum] = useState(false);

  // const {accountname} = useParams();

  const accountname = 'lovecat'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjQ2NTQ4OCwiaWF0IjoxNjcxMjgxNDg4fQ.CftU86sxCaIbsE1lmhRwWEW2x8yBMa4DrcGR331D84A'

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

  const onClickListBtn = () => {
    setImgList(true);
    setImgAlbum(false);
  }

  const onClickAlbumBtn = () => {
    setImgList(false);
    setImgAlbum(true);
  }

  return (
    <>
      <ProfileAndChatHeader />
      <MyProfileWrap>
        <ProfileBox/>
        <MarketPreviewPost/>
        {snsPostsData.length !== 0 ? 
        <>
        <section>
        <SnsPostBtn>
          <button onClick={onClickListBtn}>
            <img src={IconPostList} alt='리스트형' />
          </button>
          <button onClick={onClickAlbumBtn}>
          <img src={IconPostAlbum} alt='앨범형' />
          </button>
        </SnsPostBtn>
        <ul>
          {imgList && snsPostsData.map((post) => {
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
                <TestNavLinkStyle to='/snsPost'>
                  <p>{post.content}</p>
                {post.image ? post.image.split(',').map((src, index)=> {
                  return (
                    <ImgListDiv key={index}>
                      <img src={src} alt="게시글이미지" />
                    </ImgListDiv>
                  )
                })
                : 
                <></>}
                </TestNavLinkStyle>
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
        <ImgAlbumBox>
        {imgAlbum && snsPostsData.map((post) => {
          return (
            <>
            {post.image ? 
              <>
              <ImgAlbumList key={post.id}>
                <NavLinkStyle to='/snsPost'>
                  <img src={post.image.split(',')[0]} alt="게시글이미지" />
                 </NavLinkStyle>
              </ImgAlbumList>
              </> : <></>}
            </>
          )
        })}
        </ImgAlbumBox>
      </section>
        </> : <></>}
      </MyProfileWrap>
      <NavBar />     
    </>
  );
};