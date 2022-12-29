import React from 'react'
import { NavLink } from 'react-router-dom'
import { PostUploadBtn } from '../../components/button/iconBtn'
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader } from '../../components/header/header'
import { HomeTxt, Main, SearchBtn } from './homestyle'

export default function DefaultHome() {
  return (
    <>
        <HomepageHeader />
        <Carousel />
        <h2>팔로잉한 유저가 없을 때 나타나는 홈 페이지</h2>
        <Main>
            <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
            <NavLink to='/search'>
                <SearchBtn>검색하기</SearchBtn>
            </NavLink> 
        </Main>
        <PostUploadBtn pathName='/upload'/>
    </>
  )
}
