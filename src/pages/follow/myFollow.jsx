import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { FollowPageUl, FollowPageWrap } from './followstyle';
import { FollowerHeader } from '../../components/header/header';
import { Follow } from '../../components/follow/follow';

export const MyFollow = () => {
  /* 내 프로필 페이지의 팔로잉 팔로워 누르면 이동하는 페이지 */

  const accountname = localStorage.getItem('Account Name');
  const followerURL = `https://mandarin.api.weniv.co.kr/profile/${accountname}/follower?limit=1000`;
  const followingURL = `https://mandarin.api.weniv.co.kr/profile/${accountname}/following?limit=1000`;
  const token = localStorage.getItem('Access Token');
  const target = useLocation()?.state.text;
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);


  useEffect(() => {
    getFollowerList();
    getFollowingList();
  }, []);


  async function getFollowerList() {
    await fetch(followerURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => setFollowerList([...data]));
  }

  async function getFollowingList() {
    await fetch(followingURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => setFollowingList([...data]));
  }

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>LUCKIT - Fllow 조회 </title>
        <meta name='description' content='럭킷 팔로우 페이지입니다. 팔로우한 럭킷 메이트들을 확인해보세요!'/>
        </Helmet>
    </HelmetProvider>
      <FollowerHeader target={target}/>
      <FollowPageWrap>
        <FollowPageUl>
          {/* 조건부 렌더링. Follow에 내려주는 프롭스 값이 다름 */}
          {target === 'followers' ? 
            followerList.map((user) => {
                return <Follow user={user} key={user._id} />;
              })
            : 
            followingList.map((user) => {
                return <Follow user={user} key={user._id} />;
              })}
        </FollowPageUl>
      </FollowPageWrap>
    </>
  );
};
