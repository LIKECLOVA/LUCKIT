import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader, FeedPageHeader } from '../../components/header/header';
import {
  HomeSection,
  HomeTitle,
  ListWrap,
  ListItem,
} from './homestyle';
import MarketPostBox from '../../components/mainpost/marketPostBox';
import { MarketPostMoreBtn } from '../../components/button/iconBtn';

export const MarketFeedHome = ({ scrollTopData, followingData }) => {
  const token = localStorage.getItem('Access Token');
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    followingData.map((list) => {
      return axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${list.accountname}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        for (const product of res.data.product) {
          setProductData((e) => [...e, product]);
        }
      });
    });
  }, []);

console.log(productData)

  return (
    <>
      {scrollTopData > 500 ? (
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
          <h2>Home 피드 페이지</h2>
          <HomeTitle>럿킷 메이트를 기다리고 있어요!✨</HomeTitle>
          <ListWrap>
            {productData.length > 0 &&
              productData.map((data, index) => {
                return (
                  <ListItem key={Math.random()}>
                    <MarketPostBox data={data} index={index} />
                    <MarketPostMoreBtn productId={data.id}/>
                  </ListItem>
                );
              })}
          </ListWrap>
        </HomeSection>
      </main>
    </>
  );
};