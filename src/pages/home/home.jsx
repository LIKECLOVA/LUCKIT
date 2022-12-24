import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { Home2 } from './Home2';
import { HomeWrap, SearchBtn, HomeTxt } from './homestyle';

export const Home = () => {
  const [followingData, setFollowingData] = useState()
  const accountName = localStorage.getItem("Account Name");
  const token = localStorage.getItem("Access Token");

  useEffect(() => {

    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/profile/${accountName}/following`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
              setFollowingData(res.data);
            })
            .then((error) => {
              console.log(error);
            });
  }, [])

  return (
    <HomeWrap>
      <HomepageHeader />
      <Carousel />
      {followingData && followingData.length > 0 ? <>
      <Home2 />
      </> : <>
      <HomeTxt>딱 맞는 취미 메이트를 찾고 싶다면?</HomeTxt>
      <Link to='/search'>
        <SearchBtn>검색하기</SearchBtn>
      </Link>   
      </>}
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
