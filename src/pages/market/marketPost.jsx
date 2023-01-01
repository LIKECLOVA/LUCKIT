import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
