import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink, IsFollowButton } from './profilestyle'

export const ProfileBox = ({profileData}) => {
  const [isFollow, setIsFollow] = useState();
  const [followerCount, setFollowerCount] = useState(profileData.followerCount);
  const accounNname = 'clover2'

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjQ2NTQ4OCwiaWF0IjoxNjcxMjgxNDg4fQ.CftU86sxCaIbsE1lmhRwWEW2x8yBMa4DrcGR331D84A'
  const { id } = useParams();


      const unfollow = async () => {
        await axios(`https://mandarin.api.weniv.co.kr/profile/${
          id === accounNname || id === undefined ? accounNname : id
        }/unfollow`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          console.log(res.data.profile)
          setIsFollow(res.data.profile.isfollow);
          setFollowerCount(res.data.profile.followerCount)
      })
      .then((error) => {
          console.log(error);
      });
      };

      const follow = async () => {
        await axios(`https://mandarin.api.weniv.co.kr/profile/${
          id === accounNname || id === undefined ? accounNname : id
        }/follow`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          console.log(res.data.profile)
          setIsFollow(res.data.profile.isfollow);
          setFollowerCount(res.data.profile.followerCount)
      })
      .then((error) => {
        console.log(error);
    });
      };

      console.log(followerCount);
    
      const onClick = () => {
        setIsFollow(!isFollow);
    
        if (isFollow === true) {
          unfollow();
        } else if (isFollow === false) {
          follow();
        }
      };

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
                  <FollowNavLink to='/myfollow' state={{ text: 'followers' }}>
                  {followerCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink to='/myfollow' state={{ text: 'followings' }}>
                  {profileData.followingCount}
                  </FollowNavLink>
                </div>
              </div>
            </div>
            <div>
              {profileData.accountname === accounNname ? 
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
