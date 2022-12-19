import React from 'react'
import { Link } from 'react-router-dom'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'
import IconMarketPostUpload from '../../assets/icon/market-plus.png'


export const MarketPreviewPost = ({marketPostsData}) => {
    const accountname = 'clover2'
 
  return (
    <MarketPreviewBoxWrap>
      {marketPostsData.length !== 0 ? 
      <>
      <div className='headingWrap'>
        <h2><strong>{marketPostsData[0].author.username}</strong>님이 찾는 럭킷 메이트✨</h2>
        <Link to='#'><img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼'/></Link>
      </div>
      <ul>
        {marketPostsData && marketPostsData.map((post)=> {
          return(
            <li key={post.id}>
              <Link to='#'>
                <p>{post.itemName}</p>
                <img src={post.itemImage} />
              </Link>  
            </li>
          )
        })}
      </ul>     
      </> : 
      <>
      <div className='headingWrap'>
        <h2><strong>{accountname}</strong>님이 찾는 럭킷 메이트✨</h2>
        <Link to='#'><img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼'/></Link>
      </div>
      </>}
    </MarketPreviewBoxWrap>
  )
}