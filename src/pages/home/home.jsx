import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/navbar/navBar';
import DefaultHome from './defaultHome';
import { HomeWrap } from './homestyle';
import { MarketFeedHome } from './MarketFeedHome';

export const Home = () => {
  const [followingData, setFollowingData] = useState([])
  const [scrollTopData, setScrollTopData] = useState(0)
  const accountName = localStorage.getItem("Account Name");
  const token = localStorage.getItem("Access Token");
  // const accountNameArr = [];

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

  console.log("followingData", followingData)


  // if(followingData.length > 0) {followingData.map((list) => {
  //   return(
  //     accountNameArr.push(list.accountname)
  //   )
  // })}


  // console.log("accountNameArr", accountNameArr)
  

  const onScroll = (e) => {
    setScrollTopData(e.currentTarget.scrollTop)
    e.stopPropagation()
  }

  // console.log(followingData)

  return (
    <HomeWrap onScroll={onScroll}>
      { followingData && followingData.length > 0 ? <>
      <MarketFeedHome scrollTopData={scrollTopData} followingData={followingData}/>
      </> : <>
      <DefaultHome />
      </>}
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
