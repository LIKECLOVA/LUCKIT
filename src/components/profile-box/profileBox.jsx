import React from 'react'
import { MyProfileInfoBox } from './profilestyle'

export const ProfileBox = () => {
  return (
    <MyProfileInfoBox>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진'></img>
              <div className='profileCont'>
                <h2>유죠미짱</h2>
                <p>@아이디</p>
                <div>
                  <span>팔로워 1330</span>
                  <span>팔로잉 380</span>
                </div>
              </div>
            </div>
            <div className='rightInfoBox'>
              <button>팔로우</button>
            </div>
          </div>

          <div className='bottomInfoBox'>
            <p>To. 마이럭킷</p>
            <p className='btInfoTxt'>저는 집 꾸미기를 참 좋아해요! 같이 소품샵 가용 저는 집 꾸미기를 참 좋아해요! 같이 소품샵 가용</p>
          </div>
        </MyProfileInfoBox>
  )
}