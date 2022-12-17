import React, { useEffect, useState } from 'react'
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink } from './profilestyle'

export const ProfileBox = () => {
  const [profileData, setProfileData] = useState()

  const accountname = 'clover2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjM2NzU3MSwiaWF0IjoxNjcxMTgzNTcxfQ.DwRg_udzt-BG1TCQ43G2gHRNy72fSux7QaSjnZrdt5w'

  useEffect(() => {

   fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}`, {
      method: 'GET',
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      setProfileData(data.profile)
    })
    
  }, [])

console.log(profileData)


return (
      <MyProfileInfoBox>
        {profileData ? <>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src={profileData.image} alt='프로필사진'></img>
              <div className='profileCont'>
                <h2>{profileData.accountname}</h2>
                <p>@ {profileData.username}</p>
                <div className='followerCont'>
                  <span>팔로워</span>
                  <FollowNavLink to='/myfollow'>
                  {profileData.followerCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink to='/myfollow'>
                  {profileData.followingCount}
                  </FollowNavLink>
                </div>
              </div>
            </div>
            <div>
              <EditProfileNavLink to='/editprofile'>프로필 수정</EditProfileNavLink>
            </div>
          </div>

          <div className='bottomInfoBox'>
            <p>To. 마이럭킷</p>
            <p className='btInfoTxt'>{profileData.intro}</p>
          </div>
        </> : <></>}
        </MyProfileInfoBox>
    )
}