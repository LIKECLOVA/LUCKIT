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
  MultiImgLayers,
} from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar';
import MainSnsPost from '../../components/mainpost/mainSnsPost';
import { ProfilePostUploadBtn } from '../../components/button/iconBtn';
import { AxiosSnsPost } from '../../reducers/getSnsPostSlice';
import { ListAndAlbumBtn } from '../../components/button/button';

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
  }, [id]);

  const onClickListBtn = () => {
    setImgList(true);
    setImgAlbum(false);
  };

  const onClickAlbumBtn = () => {
    setImgList(false);
    setImgAlbum(true);
  };

  const onError = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <>
      <ProfileAndChatHeader />
      <ProfileWrap>
        <ProfileBox />
        <MarketPreviewPost />
          <SnsPostBox>
            <h2>sns 게시글 피드</h2>
            <SnsPostBtn>
              <ListAndAlbumBtn onClickListBtn={onClickListBtn} onClickAlbumBtn={onClickAlbumBtn} imgList={imgList} imgAlbum={imgAlbum}/>
              {id === myAccountName ? <ProfilePostUploadBtn pathName='/snsupload' /> : null}
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
                      const imgArr = post.image !== "" ? post.image.split(',') : []
                      const thumbImg = post.image.split(',')[0];
                    
                      return (
                        <>
                          {post.image ? (
                            <ImgAlbumList key={post.id}>
                                <NavLinkStyle to={`/snspost/${post.id}`}>
                                  {imgArr.length > 1 ?
                                  <MultiImgLayers>
                                    <img
                                    src={thumbImg}
                                    onError={onError}
                                    alt='게시글 이미지'
                                    />
                                  </MultiImgLayers>
                                  : 
                                  <img
                                  src={thumbImg}
                                  onError={onError}
                                  alt='게시글 이미지'
                                  />}
                                </NavLinkStyle>
                            </ImgAlbumList>
                          ) : (
                            null
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
