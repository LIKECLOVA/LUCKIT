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
  const followimgURL = `https://mandarin.api.weniv.co.kr/profile/${accountName}/following?limit=30`

// console.log('팔로잉 리스트',followingData);

  // 팔로잉 목록을 불러온다 불러와서 피드 홈으로 내려준다.

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
