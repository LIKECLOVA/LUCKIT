import React, { useState } from 'react';
import { FollowBtn } from '../button/button';
import { FollowInfoWrap, FollowLi } from './followstyle';

export const Follow = ({ user }) => {

  /* 받아오는 유저 정보에 따라 (follower인지 following인지) 바뀌는 컴포넌트 */

  const unfollowURL = `https://mandarin.api.weniv.co.kr/profile/${user.accountname}/unfollow`;
  const followURL = `https://mandarin.api.weniv.co.kr/profile/${user.accountname}/follow`;
  const token = localStorage.getItem('Access Token');

  const unfollow = async () => {
    await fetch(unfollowURL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
  };
  const follow = async () => {
    await fetch(followURL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
  };

  /* follow 버튼 컴포넌트를 클릭했을때 텍스트,색상 변경함수 */
  const [isFollow, setIsFollow] = useState(user.isfollow);
  // 만약 팔로우가 되어있으면 언팔로우 요청, 팔로우가 안되어 있으면 팔로우 요청.
  const onClick = () => {
    setIsFollow(!isFollow);

    if (isFollow === true) {
      unfollow();
    } else if (isFollow === false) {
      follow();
    }
  };

  return (
    <FollowLi>
      <FollowInfoWrap>
        <img src={user.image} alt='프로필사진' />
        <div>
          <p>{user.accountname}</p>
          <p>{user.intro}</p>
        </div>
      </FollowInfoWrap>
      <FollowBtn isFollow={isFollow} onClick={onClick} size='middle' />
    </FollowLi>
  );
};
