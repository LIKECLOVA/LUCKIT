import React from 'react'
import { Follow } from '../../components/follow/follow'
import { FollowPageWrap, FollowPageUl } from './followstyle'
import { Header } from '../../components/header/header'

export const YourFollow = () => {
/* 상대방 프로필에서 팔로워 팔로잉 누를때 이동하는 페이지 */

  return (
    <>
    <Header />
      <FollowPageWrap>
        <FollowPageUl>
          <Follow/>
          <Follow/>
          <Follow/>
        </FollowPageUl>
      </FollowPageWrap>
    </>
  )
}
