import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { ProfileWrap, SnsPostBtn, NavLinkStyle, ImgAlbumBox, ImgAlbumList, SnsPostWrap } from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar';
import IconPostListOn from '../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOn from '../../assets/icon/icon-post-album-on.png';
import IconPostAlbumOff from '../../assets/icon/icon-post-album-off.png';
import MainSnsPost from '../../components/mainpost/mainSnsPost';

export const Profile = () => {
  const [snsPostsData, setSnsPostsData] = useState([]);
  const [imgList, setImgList] = useState(true);
  const [imgAlbum, setImgAlbum] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('Access Token');

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/post/${id}/userpost/?limit=10`,
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
  }, [location, id]);

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
      <ProfileWrap>
        <ProfileBox />
        <MarketPreviewPost />
        {snsPostsData.length !== 0 ? (
          <section>
            <SnsPostBtn>
              <button onClick={onClickListBtn}>
                {imgList ? <img src={IconPostListOn} alt='리스트형' /> : <img src={IconPostListOff} alt='리스트형' />}
              </button>
              <button onClick={onClickAlbumBtn}>
                {imgAlbum ? <img src={IconPostAlbumOn} alt='앨범형' /> : <img src={IconPostAlbumOff} alt='앨범형' />}
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
        ) : (
          <></>
        )}
      </ProfileWrap>
      <NavBar />
    </>
  );
};
