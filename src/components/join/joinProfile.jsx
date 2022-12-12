import React from 'react';
import { ProfileInput, ProfileLabel, JoinProfileWrap } from './joinprofilestyle';

const JoinProfile = () => {
  return (
    <>
      <JoinProfileWrap>
        <h2>프로필 설정</h2>
        <p>프로필을 설정해볼까요?</p>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <div className=''>
        <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필 사진' />
        <ProfileLabel>
          사용자 이름
          <ProfileInput placeholder='2~10자 이내여야 합니다.' type='text' name='userName' required />
        </ProfileLabel>
        
        <ProfileLabel>
          계정 ID
          <ProfileInput placeholder='영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.' type='text' name='userId' />
        </ProfileLabel>
        </div>
        
        <ProfileLabel>소개
          <ProfileInput placeholder='자신이 판매할 상품에 대해 소개해주세요!' name='userIntro' type='text'/>
        </ProfileLabel>
      </JoinProfileWrap>
    </>
  );
};

export default JoinProfile;
