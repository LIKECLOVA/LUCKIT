import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { HeadingWrap, MarketPostList, MarketPostWrap, MarketPreviewBoxWrap } from './marketpreviewpoststyle'
import { AxiosProductList } from '../../reducers/getProductListSlice'
import IconClova from '../../assets/icon/sns용-클로바-disabled.png'
import { ProfilePostUploadBtn } from '../button/iconBtn'

export const MarketPreviewPost = () => {
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams()
  const product = useSelector(state => state.productListSlice.productList);
  const { username } = useSelector((state) => state.userInfoSlice.userData);
  const dispatch = useDispatch();
  const URLProduct = `https://mandarin.api.weniv.co.kr/product/${id}`;
  
  useEffect(()=>{
    dispatch(AxiosProductList(URLProduct));
  },[id])
  
  return (
    <MarketPreviewBoxWrap>
      <h2>마켓 게시글 피드</h2>
      <HeadingWrap>
        <h3>
          <strong>{username}</strong>님이 찾는 럭킷 메이트✨
        </h3>
        {id === accountName ?
        <ProfilePostUploadBtn pathName='/upload' />
        : <></>}
      </HeadingWrap>
      <MarketPostWrap>
        {product.length === 0 &&
        <div className='noPostBox'>
          <img src={IconClova} alt=''/>
          <p>게시물이 없습니다.</p>
        </div>
        }
        {product &&
          product.map((post) => {
            return (
              <MarketPostList key={post.id}>
                <NavLink to={`/marketpost/${id}`}>
                  <p>{post.itemName}</p>
                  <img src={post.itemImage} />
                </NavLink>
              </MarketPostList>
            );
          })}
      </MarketPostWrap> 
    </MarketPreviewBoxWrap>
  );
};
