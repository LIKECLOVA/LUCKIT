import React from 'react'
import { NavLink } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { SearchBtn } from '../../components/button/button'
import { PostUploadBtn } from '../../components/button/iconBtn'
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader } from '../../components/header/header'
import { HomeTxt, Main } from './homestyle'

export default function DefaultHome() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>LUCKIT - Home </title>
        <meta name='description' content='럭킷 홈페이지입니다. 럭킷메이트들에게 매칭신청을 해보세요!'/>
        </Helmet>
    </HelmetProvider>
        <HomepageHeader />
        <Carousel />
        <h2>팔로잉한 유저가 없을 때 나타나는 홈 페이지</h2>
        <Main>
            <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
            <NavLink to='/search'>
              <SearchBtn size='middle'/>
            </NavLink>
        </Main>
        <PostUploadBtn pathName='/upload'/>
    </>
  )
}
