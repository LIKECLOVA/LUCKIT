import React from 'react'
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader } from '../../components/header/header'
import { HomeTxt, Main, NavLinkStyle } from './homestyle'

export default function DefaultHome() {
  return (
    <>
    <HomepageHeader />
    <Carousel />
    <Main>
      <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
      <NavLinkStyle to='/search'>
        <button>검색하기</button>
      </NavLinkStyle> 
    </Main>
    </>
  )
}
