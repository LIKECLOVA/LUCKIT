import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
<<<<<<< Updated upstream
import { ProfileWrap, SnsPostBtn , NavLinkStyle, ImgAlbumBox, ImgAlbumList,   SnsPostWrap } from './myprofilestyle';
=======
import { MyProfileWrap, SnsPostBtn, NavLinkStyle, ImgAlbumBox, ImgAlbumList, SnsPostWrap } from './myprofilestyle';
>>>>>>> Stashed changes
import { NavBar } from '../../components/navbar/navBar';
import IconPostListOn from '../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOn from '../../assets/icon/icon-post-album-on.png';
import IconPostAlbumOff from '../../assets/icon/icon-post-album-off.png';
import MainSnsPost from '../../components/mainpost/mainSnsPost';

<<<<<<< Updated upstream

export const Profile = () => {
 

=======
export const MyProfile = () => {
  const [profileData, setProfileData] = useState('');
  const [marketPostsData, setMarketPostsData] = useState([]);
>>>>>>> Stashed changes
  const [snsPostsData, setSnsPostsData] = useState([]);
  const [imgList, setImgList] = useState(true);
  const [imgAlbum, setImgAlbum] = useState(false);
  const { id } = useParams();
<<<<<<< Updated upstream
  const token = localStorage.getItem('Access Token');
=======

  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('Access Token'));
  }, []);

  console.log('프로필 박스', profileData);
>>>>>>> Stashed changes

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/profile/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        const resProfileData = res.data.profile;

        setProfileData(resProfileData);
      })
      .then((error) => {
        console.log(error);
      });

<<<<<<< Updated upstream


    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/post/${id}/userpost/?limit=10`,
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

      }, [location, id])
=======
    axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/product/${id}/?limit=5`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setMarketPostsData(res.data.product);
      })
      .then((error) => {
        console.log(error);
      });

    axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/post/${id}/userpost/?limit=5`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setSnsPostsData(res.data.post);
      })
      .then((error) => {
        console.log(error);
      });
  }, [location]);
>>>>>>> Stashed changes

  const onClickListBtn = () => {
    setImgList(true);
    setImgAlbum(false);
  };

  const onClickAlbumBtn = () => {
    setImgList(false);
    setImgAlbum(true);
  };

  return (
    <>
      <ProfileAndChatHeader />
<<<<<<< Updated upstream
      

      <ProfileWrap>
          <ProfileBox/>
        <MarketPreviewPost/>
        {snsPostsData.length !== 0 ? 

        <section>
          <SnsPostBtn>
            <button onClick={onClickListBtn}>
              {imgList ? 
              <img src={IconPostListOn} alt='리스트형' />
              :
              <img src={IconPostListOff} alt='리스트형' />
              }
            </button>
            <button onClick={onClickAlbumBtn}>
            {imgAlbum ? 
              <img src={IconPostAlbumOn} alt='앨범형' />
              : 
              <img src={IconPostAlbumOff} alt='앨범형' />
              }
            </button>
          </SnsPostBtn>
          <ul>
            {imgList && snsPostsData.map((post) => {
              return (
                <SnsPostWrap key={post.id}>
                  <MainSnsPost data={post}/>
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
        : <></>}
      </ProfileWrap>
=======
      <MyProfileWrap>
        {profileData && <ProfileBox profileData={profileData} />}
        <MarketPreviewPost marketPostsData={marketPostsData} />
        {snsPostsData.length !== 0 ? (
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
                {imgList &&
                  snsPostsData.map((post) => {
                    return (
                      <SnsPostWrap key={post.id}>
                        <MainSnsPost data={post} />
                      </SnsPostWrap>
                    );
                  })}
              </ul>
              <ImgAlbumBox>
                {imgAlbum &&
                  snsPostsData.map((post) => {
                    return (
                      <>
                        {post.image ? (
                          <>
                            <ImgAlbumList key={post.id}>
                              <NavLinkStyle to='/snsPost'>
                                <img
                                  src={post.image.split(',')[0]}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                  alt='게시글이미지'
                                />
                              </NavLinkStyle>
                            </ImgAlbumList>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
              </ImgAlbumBox>
            </section>
          </>
        ) : (
          <></>
        )}
      </MyProfileWrap>
>>>>>>> Stashed changes
      <NavBar />
    </>
  );
};
