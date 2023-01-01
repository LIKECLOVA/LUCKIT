import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader, FeedPageHeader } from '../../components/header/header';
import { HomeSection, HomeTitle, ListWrap, ListItem } from './homestyle';
import MarketPostBox from '../../components/mainpost/marketPostBox';
import { MarketPostMoreBtn, PostUploadBtn } from '../../components/button/iconBtn';

export const MarketFeedHome = ({ scrollTopData, followingData }) => {
  const token = localStorage.getItem('Access Token');
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    function postSort(a, b) {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    }
    
   ProductList().then(res => setProductData( res.flat(1).sort(postSort) ))

  },[])

const ProductList = async () => {

  const followProductList = await followingData.map((list) => {

   return axios({
      method: 'get',
      url: `https://mandarin.api.weniv.co.kr/product/${list.accountname}/?limit=100`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }).then(res => res.data.product)

  })

 return Promise.all(followProductList)

};

  return (
    <>
      {scrollTopData ? (
        <>
          <FeedPageHeader />
        </>
      ) : (
        <>
          <HomepageHeader />
        </>
      )}
      <Carousel />
      <main>
        <HomeSection>
          <h2>홈 마켓글 피드 페이지</h2>
          <HomeTitle>럿킷 메이트를 기다리고 있어요!✨</HomeTitle>
          <ListWrap>
            {productData.length > 0 &&
              productData.map((data) => {
                return (
                  <ListItem key={Math.random()}>
                    <MarketPostBox data={data} />
                    <MarketPostMoreBtn productId={data.id} />
                  </ListItem>
                );
              })}
          </ListWrap>
        </HomeSection>
      </main>
      <PostUploadBtn pathName='/upload' />
    </>
  );
};
