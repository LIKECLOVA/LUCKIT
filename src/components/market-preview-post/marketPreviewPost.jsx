import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MarketPreviewBoxWrap } from './marketpreviewpoststyle'
// import IconPostUpload from '../../assets/icon/market-plus.png'
import { AxiosProductList } from '../../reducers/getProductListSlice'
import IconClova from '../../assets/icon/sns용-클로바-disabled.png'
import { ProfilePostUploadBtn } from '../button/iconBtn'

export const MarketPreviewPost = () => {
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams()
  const product = useSelector(state => state.productListSlice.productList);
  const dispatch = useDispatch();
  const URLProduct = `https://mandarin.api.weniv.co.kr/product/${id}`;

  useEffect(()=>{
    dispatch(AxiosProductList(URLProduct));
  },[id])

  return (
    <MarketPreviewBoxWrap>
          <div className='headingWrap'>
            <h2>
              <strong>{id}</strong>님이 찾는 럭킷 메이트✨
            </h2>
            {id === accountName ?
            <ProfilePostUploadBtn pathName='/upload' />
            : <></>}
          </div>
          <ul>
            {product.length === 0 &&
            <div className='noPostBox'>
              <img src={IconClova} alt=''/>
              <p>게시물이 없습니다.</p>
            </div>
            }
            {product &&
              product.map((post) => {
                return (
                  <li key={post.id}>
                      <NavLink to={`/marketpost/${id}`}>
                        <p>{post.itemName}</p>
                        <img src={post.itemImage} />
                      </NavLink>
                  </li>
                );
              })}
          </ul> 
    </MarketPreviewBoxWrap>
  );
};
