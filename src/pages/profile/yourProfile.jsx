import React from 'react'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import { ProfileTxt } from './profilestyle'

export const YourProfile = () => {
  return (
    <div>
      <Header />
      <ProfileTxt>프로필 페이지</ProfileTxt>
      <Navbar />
    </div>
  )
}
