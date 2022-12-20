import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { MyProfileWrap, SnsPostBtn , NavLinkStyle, ImgAlbumBox, ImgAlbumList,   SnsPostWrap } from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar';
import IconPostList from '../../assets/icon/icon-post-list-on.png';
import IconPostAlbum from '../../assets/icon/icon-post-album-on.png';
import ProfilePost from './ProfilePost';

export const MyProfile = () => {
  const [profileData, setProfileData] = useState();
  const [marketPostsData, setMarketPostsData] = useState([])
  const [snsPostsData, setSnsPostsData] = useState([]);
  const [imgList, setImgList] = useState(true);
  const [imgAlbum, setImgAlbum] = useState(false);
  const { id } = useParams();

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjQ2NTQ4OCwiaWF0IjoxNjcxMjgxNDg4fQ.CftU86sxCaIbsE1lmhRwWEW2x8yBMa4DrcGR331D84A'

  useEffect(() => {

    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/profile/${id}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
              const resProfileData = res.data.profile;

              setProfileData(resProfileData);
   
            })
            .then((error) => {
              console.log(error);
            });
            
    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${id}/?limit=5`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
              setMarketPostsData(res.data.product);
          })
          .then((error) => {
              console.log(error);
          });

    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/post/${id}/userpost/?limit=5`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
              setSnsPostsData(res.data.post);
          })
          .then((error) => {
              console.log(error);
          });
      }, [location])

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
        {profileData && 
        <ProfileBox profileData={{...profileData}} />} 
        <MarketPreviewPost marketPostsData={marketPostsData}/>
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
              <SnsPostWrap key={post.id}>
                <ProfilePost post={post}/>
              </SnsPostWrap>
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
                  <img src={post.image.split(',')[0]} onError = {e =>{e.target.style.display = 'none'}} alt="게시글이미지" />
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