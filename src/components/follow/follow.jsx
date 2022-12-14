import React, { useState } from 'react';
import { FollowBtn } from '../button/button';
import { FollowInfoWrap, FollowLi } from './followstyle';

export const Follow = () => {
/* 받아오는 유저 정보에 따라 (follower인지 following인지) 바뀌는 컴포넌트 */

/* follow 버튼 컴포넌트를 클릭했을때 텍스트,색상 변경함수 */
  const [isFollow,setIsFollow] = useState(false);
  const onClick = () => {
    setIsFollow(!isFollow);
  }

  return (
   
    <FollowLi>
      <FollowInfoWrap>
        <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진'/>
        <div>
          <p>닉네임</p>
          <p>자기소개@@@@@@@</p>
        </div>
      </FollowInfoWrap>
      <FollowBtn isFollow={isFollow} onClick={onClick} size='middle'/>
    </FollowLi>
   
  );
};
