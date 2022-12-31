/* eslint-disable */
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

  // getProductList 사용 시간순 정렬해야함

  const aaa = async () => {
    const test = [];

     followingData.forEach(async(list) => {

       await axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${list.accountname}/?limit=3`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        for (const product of res.data.product) {
          test.push(product);
          // console.log('하나하나의 데이터',product);
          // setProductData((e) => [...e, product]);
        }
      });

    }
    );

    return test;
  };

  // followimgData는 프롭스로 받아온 내가 팔로잉 한 사람들 리스트
  useEffect(() => {
    aaa().then((res) => console.log('이거 확인', res) );

    console.log('productData', productData);
  }, []);

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
