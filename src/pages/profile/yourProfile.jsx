import React from 'react';
import { Header } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { ProfileTxt } from './profilestyle';

export const YourProfile = () => {
  return (
    <div>
      <Header />
      <ProfileTxt>프로필 페이지</ProfileTxt>
      <NavBar />
    </div>
  );
};
