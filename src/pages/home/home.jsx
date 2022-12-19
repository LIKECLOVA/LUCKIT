import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { HomeWrap, SearchBtn, HomeTxt } from './homestyle';

const Home = () => {
  return (
    <HomeWrap>
      <HomepageHeader />
      <Carousel />
      <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
      <Link to='/search'>
        <SearchBtn>검색하기</SearchBtn>
      </Link>
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
