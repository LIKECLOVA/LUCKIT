import React from 'react';
import { FollowPageUl, FollowPageWrap } from './followstyle';
import { FollowerHeader } from '../../components/header/header';
import { Follow } from '../../components/follow/follow';

export const MyFollow = () => {
/* 내 프로필 페이지의 팔로잉 팔로워 누르면 이동하는 페이지 */

  return (
    <>
      <FollowerHeader />
      <FollowPageWrap>
        <FollowPageUl>
          <Follow/>
          <Follow/>
          <Follow/>
        </FollowPageUl>
      </FollowPageWrap>
    </>
  );
};
