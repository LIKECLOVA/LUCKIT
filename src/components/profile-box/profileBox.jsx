import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MyProfileInfoBox, FollowNavLink, EditProfileNavLink, IsFollowButton } from './profilestyle';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png';
import { AxiosUserData, onChangeFollow } from '../../reducers/getUserInfoSlice';

export const ProfileBox = () => {

  const { isfollow, followerCount, accountname, followingCount, image, username, intro } = useSelector(
    (state) => state.userInfoSlice.userData
  );
  const { id } = useParams();

  const dispatch = useDispatch();
  const BaseURL = `https://mandarin.api.weniv.co.kr/profile/${id}`;
  const myAccountName = localStorage.getItem('Account Name');
  const token = localStorage.getItem('Access Token');




  useEffect(() => {
    dispatch(AxiosUserData(BaseURL)); 
  }, [isfollow,id]);

 


  const unfollow = async () => {
    await axios(`https://mandarin.api.weniv.co.kr/profile/${id}/unfollow`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      dispatch(onChangeFollow(res.data.profile.isfollow));
    });
  };

  const follow = async () => {
    await axios(`https://mandarin.api.weniv.co.kr/profile/${id}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then((res) => {
      dispatch(onChangeFollow(res.data.profile.isfollow));
    });
  };

  const onClick = () => {
    if (isfollow) {
      unfollow();
    } 
    else {
      follow();
    }
  };

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  };

  /* 프로필 구분 */

  const CheckProfile = Boolean(myAccountName === accountname);

  return (
    <MyProfileInfoBox>
      
        <>
          <div className='topmyInfoBox'>
            <div className='leftMyInfoBox'>
              <img src={image} onError={onErrorImg} alt='프로필사진'></img>
              <div className='profileCont'>

                <h2>{accountname}</h2>
                <p>@ {username}</p>

                <div className='followerCont'>
                  <span>팔로워</span>
                  <FollowNavLink
                    to={CheckProfile ? `/myfollow` : `/yourfollow`}
                    state={{ text: 'followers', accountname: accountname }}
                  >
                    {followerCount}
                  </FollowNavLink>
                  <span className='followingTxt'>팔로잉</span>
                  <FollowNavLink
                    to={CheckProfile ? `/myfollow` : `/yourfollow`}
                    state={{ text: 'followings', accountname: accountname }}
                  >
                    {followingCount}
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
                <IsFollowButton onClick={ onClick } isFollow={isfollow}>{isfollow ? '언팔로우': '팔로우'}</IsFollowButton>
              </>}

            </div>
          </div>

          <div className='bottomInfoBox'>
            <p>To. 마이럭킷</p>
            <p className='btInfoTxt'>{intro}</p>
          </div>
        </>
      
    </MyProfileInfoBox>
  );
};
