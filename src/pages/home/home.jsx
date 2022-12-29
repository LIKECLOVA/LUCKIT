import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/navbar/navBar';
import DefaultHome from './defaultHome';
import { HomeWrap } from './homestyle';
import { MarketFeedHome } from './MarketFeedHome';

export const Home = () => {
  const [followingData, setFollowingData] = useState([])
  const [scrollTopData, setScrollTopData] = useState(false)
  // const [scrollTopState, setScrollTopState] = useState(false);
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

  const onScroll = (e) => {
    if(e.currentTarget.scrollTop >= 300) {
      setScrollTopData(true)
    }else if(e.currentTarget.scrollTop < 300) {
      setScrollTopData(false)
    }
  }

  return (
    <HomeWrap onScroll={onScroll}>
      { followingData && followingData.length > 0 ? <>
      <MarketFeedHome scrollTopData={scrollTopData} followingData={followingData} />
      </> : <>
      <DefaultHome />
      </>}
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
