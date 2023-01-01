import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavBar } from '../../components/navbar/navBar';
import { AxiosFollow } from '../../reducers/getFollowSlice';
import DefaultHome from './defaultHome';
import { HomeWrap } from './homestyle';
import { MarketFeedHome } from './MarketFeedHome';

export const Home = () => {
  const [scrollTopData, setScrollTopData] = useState(false)
  const accountName = localStorage.getItem("Account Name");
  const dispatch = useDispatch();
  const followingData = useSelector(state => state.followInfoSlice.followData);
  const followimgURL = `https://mandarin.api.weniv.co.kr/profile/${accountName}/following?limit=Number`


  useEffect(()=>{
    dispatch(AxiosFollow(followimgURL))
  },[])

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
