import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { ProfileAndChatHeader } from '../../components/header/header';
import MarketPostBox from '../../components/mainpost/marketPostBox';
import { NavBar } from '../../components/navbar/navBar';
import { ListItem, ListWrap, MarketPostTitle, MarketPostWrap } from './marketpoststyle';
import { AxiosProductList } from '../../reducers/getProductListSlice';

export function MarketPost() {
  const { id } = useParams();

  const marketPostData = useSelector((state) => state.productListSlice.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AxiosProductList(`https://mandarin.api.weniv.co.kr/product/${id}/?limit=20`));

  }, []);

  return (
    <>
      <Helmet>
        <title>LUCKIT - Market 게시글 </title>
        <meta name='description' content='럭킷 내Market게시글 관리 페이지입니다. Market게시글을 수정 및 삭제해보세요! '/>
        </Helmet>
      <ProfileAndChatHeader />
      <MarketPostWrap>
        <h2>마켓 게시글 페이지</h2>
        <MarketPostTitle>
          <strong>{marketPostData[0]?.author.username}</strong> 님이 찾는 럭킷 메이트
          <br />
          네잎클로버를 눌러 매칭을 신청해 보세요!✨
        </MarketPostTitle>
        <div>
          <ListWrap>
            {marketPostData.map((data) => {
              return (
                <ListItem key={Math.random()}>
                  <MarketPostBox data={data} accountname={id} />
                </ListItem>
              );
            })}
          </ListWrap>
        </div>
      </MarketPostWrap>
      <NavBar />
    </>
  );
}
