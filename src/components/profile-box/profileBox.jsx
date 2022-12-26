import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink, IsFollowButton } from './profilestyle'
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'

export const ProfileBox = ({ profileData }) => {
  const {followerCount, isfollow, accountname} = profileData;
  const [isFollow, setIsFollow] = useState(isfollow);
  const [followersCount, setFollowersCount] = useState(followerCount)
  const { id } = useParams();
  const myAccountName = localStorage.getItem('Account Name')
  const token = localStorage.getItem('Access Token')

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

/* 프로필 구분 */

const CheckProfile = Boolean(myAccountName === accountname) 


return (
      <MyProfileInfoBox>
        {profileData ? <>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src={profileData.image} onError={onErrorImg} alt='프로필사진'></img>
              <div className='profileCont'>
                <h2>{profileData.username}</h2>
                <p>@ {profileData.accountname}</p>
                <div className='followerCont'>
                  <span>팔로워</span>
                  <FollowNavLink to={ CheckProfile ? `/myfollow` : `/yourfollow`} state={{ text: 'followers', accountname: accountname }}>
                    {followersCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink to={ CheckProfile ? `/myfollow` : `/yourfollow`} state={{ text: 'followings', accountname: accountname }}>
                  {profileData.followingCount}
                  </FollowNavLink>
                </div>
              </div>
            </div>
            <div>
              {CheckProfile ? 
              <>
                <EditProfileNavLink to='/editprofile'>프로필 수정</EditProfileNavLink>
              </> : 
              <>
                <IsFollowButton onClick={ onClick } isFollow={isFollow}>{isFollow ? '언팔로우': '팔로우'}</IsFollowButton>
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