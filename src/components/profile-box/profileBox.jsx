import React from 'react'
import { MyProfileInfoBox } from './profilestyle'

export const ProfileBox = () => {
  return (
    <MyProfileInfoBox>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진'></img>
              <div>
                <h2>유죠미짱</h2>
                <p>@아이디</p>
                <span>팔로워 1330</span>
                <span>팔로잉 380</span>
              </div>
            </div>
            <div className='rightInfoBox'>
              <button>버튼자리입니다</button>
            </div>
          </div>

          <div className='bottomInfoBox'>
            <p>to 마이럭킷</p>
            <p>저는 집 꾸미기를 좋아합니다.</p>
          </div>
        </MyProfileInfoBox>
  )
}
