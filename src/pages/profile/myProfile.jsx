import React from 'react';
import { Header } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { MyProfileWrap } from './myprofilestyle';

export const MyProfile = () => {
  return (
    <>
      <Header />
      <MyProfileWrap>
        <ProfileBox/>
        <MarketPreviewPost/>
      </MyProfileWrap>
    </>
  );
};
