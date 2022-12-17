import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'
import IconMarketPostUpload from '../../assets/icon/market-plus.png'


export const MarketPreviewPost = () => {
  const [marketPostsData, setMarketPostsData] = useState([])

  const accountname = 'clover2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjQ2NTQ4OCwiaWF0IjoxNjcxMjgxNDg4fQ.CftU86sxCaIbsE1lmhRwWEW2x8yBMa4DrcGR331D84A'

  useEffect(() => {

    marketPostList();
    
  }, [])

  const marketPostList = async () => {
    await fetch(`https://mandarin.api.weniv.co.kr/product/${accountname}/?limit=5`, {
      method: 'GET',
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      setMarketPostsData(data.product)
    })
  }

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