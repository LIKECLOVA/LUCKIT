import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import {
  ProfileWrap,
  SnsPostBtn,
  NavLinkStyle,
  ImgAlbumBox,
  ImgAlbumList,
  SnsPostWrap,
  SnsPostBox,
} from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar';
import IconPostListOn from '../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOn from '../../assets/icon/icon-post-album-on.png';
import IconPostAlbumOff from '../../assets/icon/icon-post-album-off.png';
import MainSnsPost from '../../components/mainpost/mainSnsPost';
import { ProfilePostUploadBtn } from '../../components/button/iconBtn';
import { AxiosSnsPost } from '../../reducers/getSnsPostSlice';

export const Profile = () => {
  const [imgList, setImgList] = useState(true);
  const [imgAlbum, setImgAlbum] = useState(false);
  const myAccountName = localStorage.getItem('Account Name');
  const { id } = useParams();
  const snsPostData = useSelector((state) => state.snsPostSlice.snspost);
  const dispatch = useDispatch();
  const snsPostURL = `https://mandarin.api.weniv.co.kr/post/${id}/userpost/?limit=number`;

  useEffect(() => {

    dispatch(AxiosSnsPost(snsPostURL));
  }, []);

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
          <SnsPostBox>
            <h2>sns 게시글 피드</h2>
            <SnsPostBtn>
              <div className='snsBtnWrap'>
                <button onClick={onClickListBtn}>
                  {imgList ? <img src={IconPostListOn} alt='리스트형' /> : <img src={IconPostListOff} alt='리스트형' />}
                </button>
                <button onClick={onClickAlbumBtn}>
                  {imgAlbum ? <img src={IconPostAlbumOn} alt='앨범형' /> : <img src={IconPostAlbumOff} alt='앨범형' />}
                </button>
              </div>
              {id === myAccountName ? <ProfilePostUploadBtn pathName='/snsupload' /> : <></>}
            </SnsPostBtn>
        {snsPostData.length !== 0 ? (
          <>
            <ul>
              {imgList &&
                snsPostData.map((post) => {
                  return (
                    <SnsPostWrap key={post.id}>
                      <MainSnsPost data={post} />
                    </SnsPostWrap>
                  );
                })}
            </ul>
            <ImgAlbumBox>
              {imgAlbum &&
                snsPostData.map((post) => {
                  return (
                    <>
                      {post.image ? (
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
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
            </ImgAlbumBox>
          </>
        ) : null}
          </SnsPostBox>
      </ProfileWrap>
      <NavBar />
    </>
  );
};
