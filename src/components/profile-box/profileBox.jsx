import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink, IsFollowButton } from './profilestyle'
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'

export const ProfileBox = ({ profileData }) => {
  const {followerCount, isfollow} = profileData;
  const [isFollow, setIsFollow] = useState(isfollow);
  const [followersCount, setFollowersCount] = useState(followerCount)
  const { id } = useParams();

  const accountName = 'clover2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjQ2NTQ4OCwiaWF0IjoxNjcxMjgxNDg4fQ.CftU86sxCaIbsE1lmhRwWEW2x8yBMa4DrcGR331D84A'

  const unfollow = async () => {
    await axios(`https://mandarin.api.weniv.co.kr/profile/${id}/unfollow`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      setFollowersCount(res.data.profile.followerCount); 
      setIsFollow(res.data.profile.isfollow);       
  })
  };

  const follow = async () => {
    await axios(`https://mandarin.api.weniv.co.kr/profile/${id}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      setFollowersCount(res.data.profile.followerCount)
      setIsFollow(res.data.profile.isfollow);       
  })
  };

  const onClick = () => {

    if(isFollow) {
      unfollow();
      
    }else {
      follow();
    }
  }

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  }


return (
      <MyProfileInfoBox>
        {profileData ? <>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src={profileData.image} onError={onErrorImg} alt='프로필사진'></img>
              <div className='profileCont'>
                <h2>{profileData.accountname}</h2>
                <p>@ {profileData.username}</p>
                <div className='followerCont'>
                  <span>팔로워</span>
                  <FollowNavLink to='/myfollow' state={{ text: 'followers' }}>
                    {followersCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink to='/myfollow' state={{ text: 'followings' }}>
                  {profileData.followingCount}
                  </FollowNavLink>
                </div>
              </div>
            </div>
            <div>
              {profileData.accountname === accountName ? 
              <>
                <EditProfileNavLink to='/editprofile'>프로필 수정</EditProfileNavLink>
              </> : 
              <>
                <IsFollowButton onClick={ onClick }>{isFollow ? '언팔로우': '팔로우'}</IsFollowButton>
              </>}
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