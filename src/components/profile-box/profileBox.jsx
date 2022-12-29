import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FollowNavLink, EditProfileNavLink, IsFollowButton, FollowerCont, ProfileInfoWrap, ProfileInfoCont,  BottomInfoBox, TopInfoBox, ProfileInfoBox } from './profileboxstyle';
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
  }, [isfollow,id,username]);

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
    <ProfileInfoWrap>
      <h2>사용자 프로필 정보</h2>
      <TopInfoBox>
        <ProfileInfoBox>
          <img src={image} onError={onErrorImg} alt='프로필사진'></img>
          <ProfileInfoCont>
            <h3>{username}</h3>
            <p>@ {accountname}</p>
            <FollowerCont>
              <FollowNavLink
                to={CheckProfile ? `/myfollow` : `/yourfollow`}
                state={{ text: 'followers', accountname: accountname }}
                >
                <span>팔로워</span>
                {followerCount}
              </FollowNavLink>
              <FollowNavLink
                to={CheckProfile ? `/myfollow` : `/yourfollow`}
                state={{ text: 'followings', accountname: accountname }}
              >
              <span className='followingTxt'>팔로잉</span>
                {followingCount}
              </FollowNavLink>
            </FollowerCont>
          </ProfileInfoCont>
        </ProfileInfoBox>
        <div>
          {CheckProfile ? 
            <EditProfileNavLink to='/editprofile'>프로필 수정</EditProfileNavLink>
            : 
            <IsFollowButton onClick={ onClick } isFollow={isfollow}>{isfollow ? '언팔로우': '팔로우'}</IsFollowButton>
          }
        </div>
      </TopInfoBox>
      <BottomInfoBox>
        <p>To. 마이럭킷</p>
        <p className='btInfoTxt'>{intro}</p>
      </BottomInfoBox>
    </ProfileInfoWrap>
  );
};
