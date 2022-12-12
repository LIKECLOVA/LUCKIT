import React from 'react'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import { HomeWrap, HomeLogoImg, SearchBtn, HomeTxt } from './homestyle';

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <HomeLogoImg/>
      <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
      <SearchBtn>검색하기</SearchBtn>
      <Navbar />
    </HomeWrap>
  )
};

export default Home;