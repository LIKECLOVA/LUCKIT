import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'
import IconMarketPostUpload from '../../assets/icon/market-plus.png'
import { MarketPreviewModal } from '../modal/modal'
import { AxiosProductList } from '../../reducers/getProductListSlice'



export const MarketPreviewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams()
  const product = useSelector(state => state.productListSlice.productList);
  const dispatch = useDispatch();
  const URLProduct = `https://mandarin.api.weniv.co.kr/product/${id}`;

  console.log('뿌려줄거!!!!', product);

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value)
  }
 
  useEffect(()=>{
    dispatch(AxiosProductList(URLProduct));
  },[])

  return (
    <MarketPreviewBoxWrap>
      {product.length !== 0 ? 
      <>
      <div className='headingWrap'>
        <h2><strong>{product[0].author.username}</strong>님이 찾는 럭킷 메이트✨</h2>
        <Link to='#'><img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼'/></Link>
      </div>
      <ul>
        {product && product.map((post)=> {
          return(
            <li key={post.id}>
              {accountName === id ? <>
                <button onClick={onClick}>
                <p>{post.itemName}</p>
                <img src={post.itemImage} />
              </button> 
              </> : 
              <NavLink to='#'>
                <p>{post.itemName}</p>
                <img src={post.itemImage} />
              </NavLink> 
              }
            </li>
          )
        })}
      </ul>     
        {isOpen && <MarketPreviewModal onClickClose={onClickClose}/>}
      </> : 
      <>
      <div className='headingWrap'>
          <h2><strong>{accountName}</strong>님이 찾는 럭킷 메이트✨</h2>
          <Link to='#'><img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼'/></Link>
      </div>
      </>}
    </MarketPreviewBoxWrap>
  )
}