import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { HomeWrap, HomeBannerImg, SearchBtn, HomeTxt } from './homestyle';

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <HomeBannerImg />
      <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
      <Link to='/search'>
        <SearchBtn>검색하기</SearchBtn>
      </Link>
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
