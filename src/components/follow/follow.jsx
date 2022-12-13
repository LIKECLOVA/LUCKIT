import React from 'react';
import { FollowInfoWrap, FollowLi } from './followstyle';

export const Follow = () => {
  return (
   
    <FollowLi>
      <FollowInfoWrap>
        <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진'/>
        <div>
          <p>닉네임</p>
          <p>자기소개@@@@@@@</p>
        </div>
      </FollowInfoWrap>
      <button>버튼자리입니다</button>
    </FollowLi>
   
  );
};
