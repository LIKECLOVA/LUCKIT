import React from 'react'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { ProfileTxt } from './profilestyle'

export const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileTxt>프로필 페이지</ProfileTxt>
      <Navbar />
    </div>
  )
}
