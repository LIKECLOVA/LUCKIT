import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader, FeedPageHeader } from '../../components/header/header';
import { HomeSection, HomeTitle, ListWrap, ListItem } from './homestyle';
import MarketPostBox from '../../components/mainpost/marketPostBox';
import { MarketPostMoreBtn, PostUploadBtn } from '../../components/button/iconBtn';
import { Loading } from '../../components/loading/loading';

export const MarketFeedHome = ({ scrollTopData, followingData }) => {
  const userToken = localStorage.getItem('Access Token');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function postSort(a, b) {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    }

    ProductList().then((res) => {
      setProductData(res.flat(1).sort(postSort));
      setLoading(true);
    });
  }, []);

  const ProductList = async () => {
    const followProductList = await followingData.map((list) => {
      return axios({
        method: 'get',
        url: `https://api.mandarin.weniv.co.kr/product/${list.accountname}/?limit=100`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((res) => res.data.product);
    });

    return Promise.all(followProductList);
  };

  return (
    <>
      {loading ? (
        <>
          {scrollTopData ? <FeedPageHeader /> : <HomepageHeader />}
          <Carousel />
          <main>
            <HomeSection>
              <h2>홈 마켓글 피드 페이지</h2>
              <HomeTitle>럭킷 메이트를 기다리고 있어요!✨</HomeTitle>
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
      ) : (
        <Loading />
      )}
    </>
  );
};
