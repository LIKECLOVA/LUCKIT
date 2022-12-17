import React from 'react';
import { ProfileAndChatHeader } from '../../components/header/header';
import { MarketPreviewPost } from '../../components/market-preview-post/marketPreviewPost';
import { ProfileBox } from '../../components/profile-box/profileBox';
import { MyProfileWrap, SnsPostBtn } from './myprofilestyle';
import { NavBar } from '../../components/navbar/navBar'
import MainSnsPost from '../../components/mainpost/mainSnsPost';

export const MyProfile = () => {

  return (
    <>
      <ProfileAndChatHeader />
      <MyProfileWrap>
        <ProfileBox/>
        <MarketPreviewPost/>
        <section>
        <SnsPostBtn>
          <button>List</button>
          <button>Thum</button>
        </SnsPostBtn>
        <ul>
          <li><MainSnsPost /></li>
          <li><MainSnsPost /></li>
          <li><MainSnsPost /></li>
          <li><MainSnsPost /></li>
          <li><MainSnsPost /></li>
        </ul>
      </section>
      </MyProfileWrap>
      <NavBar />
    </>
  );
};