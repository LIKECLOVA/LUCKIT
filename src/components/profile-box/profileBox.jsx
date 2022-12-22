import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink, IsFollowButton } from './profilestyle'
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'
import { AxiosUserData } from '../../reducers/getUserInfoSlice';

export const ProfileBox = () => {
  const userInfoData = useSelector((state) => state.userInfoSlice.userData);
  const {followerCount, isfollow, accountname} = userInfoData;
  const [isFollow, setIsFollow] = useState(isfollow);
  // const [followersCount, setFollowersCount] = useState(followerCount)
  // const [followersCount, setFollowersCount] = useState(followerCount)
  const { id } = useParams();
  const dispatch = useDispatch();
  const BaseURL = `https://mandarin.api.weniv.co.kr/profile/${id}`;


console.log('잘 내려오는지',userInfoData);
console.log('팔로우 수', followerCount);
console.log('아이디는?',id);

  const myAccountName = localStorage.getItem('Account Name')
  const token = localStorage.getItem('Access Token')

useEffect(()=>{

  dispatch(AxiosUserData(BaseURL));
  
},[])

  
  const unfollow = async () => {
    await axios(`https://mandarin.api.weniv.co.kr/profile/${id}/unfollow`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      // setFollowersCount(res.data.profile.followerCount); 
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
      // setFollowersCount(res.data.profile.followerCount)
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
        {userInfoData ? <>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src={userInfoData.image} onError={onErrorImg} alt='프로필사진'></img>
              <div className='profileCont'>
                <h2>{userInfoData.accountname}</h2>
                <p>@ {userInfoData.username}</p>
                <div className='followerCont'>
                  <span>팔로워</span>
                  <FollowNavLink to={ CheckProfile ? `/myfollow` : `/yourfollow`} state={{ text: 'followers', accountname: accountname }}>
                  {userInfoData.followerCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink to={ CheckProfile ? `/myfollow` : `/yourfollow`} state={{ text: 'followings', accountname: accountname }}>
                  {userInfoData.followingCount}
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
                <IsFollowButton onClick={ onClick }>{isFollow ? '언팔로우': '팔로우'}</IsFollowButton>
              </>}
            </div>
          </div>

          <div className='bottomInfoBox'>
            <p>To. 마이럭킷</p>
            <p className='btInfoTxt'>{userInfoData.intro}</p>
          </div>
        </> : <></>}
        </MyProfileInfoBox>
    )
}