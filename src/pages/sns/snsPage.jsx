import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainSnsPost from '../../components/mainpost/mainSnsPost';
import { SnsPageArt, SnsPageSec, MainPostArea, SnsStoryImg } from './snsstyle';
import { SnsFeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png';
import { SearchBtn } from '../../components/button/button';
import { PostUploadBtn } from '../../components/button/iconBtn';
import { AxiosFollow } from '../../reducers/getFollowSlice';
import { AxiosUserData } from '../../reducers/getUserInfoSlice';

export const SnsPage = () => {
  const userToken = localStorage.getItem('Access Token');
  const myAccountName = localStorage.getItem('Account Name');
  const [list, setList] = useState([]);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  const STORY_PATH = `/profile/${myAccountName}/following?limit=0`;
  const USER_PATH = `/profile/${myAccountName}`;

  const dispatch = useDispatch();
  const followList = useSelector((state) => state.followInfoSlice.followData);
  const myInfo = useSelector((state) => state.userInfoSlice.userData);

  /* 팔로잉한 유저의 게시글 정보 불러오는 axios */
  const getFeedPostData = () => {
    axios({
      url: `${URL}${FEED_PATH}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        setList(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFeedPostData();
    dispatch(AxiosFollow(URL + STORY_PATH));
    dispatch(AxiosUserData(URL + USER_PATH));
  }, []);

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  };

  return (
    <>
      <SnsFeedPageHeader />
      <SnsPageArt>
        <ul>
          <NavLink to={`/profile/${myAccountName}`}>
            <li>
              <SnsStoryImg src={myInfo.image} onError={onErrorImg} />
            </li>
          </NavLink>
          {followList.map((story, index) => {
            return (
              <NavLink key={index} to={`/profile/${story.accountname}`}>
                <li>
                  <SnsStoryImg src={story.image} onError={onErrorImg} />
                </li>
              </NavLink>
            );
          })}
          {}
        </ul>
      </SnsPageArt>
      {followList.length === 1 ? (
        <SnsPageSec className='SnsDefalutPage'>
          <h1>새로운 럭킷을 찾아보세요!</h1>
          <NavLink to='/search'>
            <SearchBtn size='middle' />
          </NavLink>
        </SnsPageSec>
      ) : (
        <SnsPageSec>
          <h1>럭킷들의 새로운 소식을 확인해보세요!</h1>
          <MainPostArea>
            {list.map((value) => {
              return <MainSnsPost data={value} key={crypto.randomUUID()} />;
            })}
          </MainPostArea>
        </SnsPageSec>
      )}
      <PostUploadBtn pathName='/snsupload' />
      <NavBar />
    </>
  );
};
