import React from 'react';
import { ProfileInput, ProfileLabel, JoinProfileWrap, ProfileTextarea } from './joinprofilestyle';

const JoinProfile = () => {
  return (
    <>
      <JoinProfileWrap>
        <h2>반가워요!</h2>
        <p>프로필을 설정해볼까요?</p>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <div className='profileMidWrap'>
          <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필 사진' />
          <div>
          <ProfileLabel>           
            <ProfileInput placeholder='닉네임' type='text' name='userName' required />
          </ProfileLabel>
          
          <ProfileLabel>
            <ProfileInput placeholder='아이디' type='text' name='userId' />
          </ProfileLabel>
          </div>
        </div>
        
        <ProfileLabel>To. 나의 럭킷에게</ProfileLabel>
        <ProfileTextarea name='userInfo' style={{'resize':'none'}}/>
        <div className='buttonFlexBox'>
        <button>버튼 자리입니다</button>
        </div>
      </JoinProfileWrap>
    </>
  );
};

export default JoinProfile;
