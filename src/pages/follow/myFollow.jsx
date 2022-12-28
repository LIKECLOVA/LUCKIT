import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FollowPageUl, FollowPageWrap } from './followstyle';
import { FollowerHeader } from '../../components/header/header';
import { Follow } from '../../components/follow/follow';

export const MyFollow = () => {
  /* 내 프로필 페이지의 팔로잉 팔로워 누르면 이동하는 페이지 */

  useEffect(() => {
    getFollowerList();
    getFollowingList();
  }, []);

  const accountname = localStorage.getItem('Account Name');
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}/follower?limit=1000`;
  const URL2 = `https://mandarin.api.weniv.co.kr/profile/${accountname}/following?limit=1000`;
  const token = localStorage.getItem('Access Token');
  const target = useLocation()?.state.text;
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  async function getFollowerList() {
    await fetch(URL, {
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
    await fetch(URL2, {
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
      <FollowerHeader />
      <FollowPageWrap>
        <FollowPageUl>
          {/* 여기안 부터 조건에 따라 달라지게 Follow에 내려주는 프롭스값도 달라지고 랜더링도 달라짐 */}
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
