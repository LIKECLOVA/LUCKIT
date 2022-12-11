import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { HomePostWrap, HomeBannerImg, Heading, HomePostCont, HomePostImg, HomePostTitle } from './homestyle';

const Home2 = () => {
  return (
    <HomePostWrap>
      <Header />
      <HomeBannerImg/>
      <Heading>당신을 기다리는 럭킷 ✨</Heading>
      <HomePostCont>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
        <li>
            <Link to='#'>
                <HomePostImg  />
                <HomePostTitle>제목입니당</HomePostTitle>
            </Link>
        </li>
      </HomePostCont>
      <Navbar />
    </HomePostWrap>
  )
};

export default Home2;