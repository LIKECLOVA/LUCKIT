import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainSnsPost from '../../components/mainpost/mainSnsPost';
import { SnsPageArt, SnsPageSec, MainPostArea, SnsStoryImg } from './snsstyle';
import { FeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png';
import { SearchBtn } from '../../components/button/button';
import { PostUploadBtn } from '../../components/button/iconBtn';

export const SnsPage = () => {

  const token = localStorage.getItem('Access Token');
  const accountName = localStorage.getItem('Account Name');
  const [list ,setList] = useState([]);
  const [followList,setFollowList] = useState([]);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  const STORY_PATH=`/profile/${accountName}/following`;
  const USER_PATH=`/user/myinfo`;

  // 팔로잉한 유저의 게시글 정보 불러오는 fetch
  async function fetchFeedPostData() {
    await fetch(URL + FEED_PATH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setList(data.posts);
      });
  }
  // 팔로잉한 유저 프로필 정보 불러오는 fetch
  async function fetchUserStoryData() {
    await fetch(URL + STORY_PATH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setFollowList([...data]);
      });
    // 내 프로필 정보 불러오는 fetch
    await fetch(URL + USER_PATH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const myStoryImg = {
          image: data.user.image,
          accountName: data.user.accountName,
          following: data.user.following,
        };

        setFollowList((value) => [myStoryImg, ...value]);
      });
  }

  useEffect(() => {
    fetchFeedPostData();
    fetchUserStoryData();
  }, []);

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  };

  return (
    <>
      <FeedPageHeader />
      <SnsPageArt>
        <ul>
          {followList.map((story, index) => {
            return (
              <NavLink key={index} to={`/profile/${story.accountName}`}>
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
            <SearchBtn size='middle'/>
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
      <PostUploadBtn pathName='/snsupload'/>
      <NavBar />
    </>
  );
};
