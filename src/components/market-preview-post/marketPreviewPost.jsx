import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'
import IconMarketPostUpload from '../../assets/icon/market-plus.png'


export const MarketPreviewPost = () => {
  const [marketPostsData, setMarketPostsData] = useState()

  const accountname = 'clover2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWMyMDY3MTdhZTY2NjU4MWM2NGNhNCIsImV4cCI6MTY3NjM2NzU3MSwiaWF0IjoxNjcxMTgzNTcxfQ.DwRg_udzt-BG1TCQ43G2gHRNy72fSux7QaSjnZrdt5w'

  useEffect(() => {

   fetch(`https://mandarin.api.weniv.co.kr/product/${accountname}/?limit=5`, {
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
    
  }, [])

console.log(marketPostsData)

  return (
    <MarketPreviewBoxWrap>
      {marketPostsData ? 
      <>
      <div className='headingWrap'>
        <h2><strong>{marketPostsData[0].author.username}</strong>님이 찾는 럭킷 메이트✨</h2>
        <Link to='#'><img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼'/></Link>
      </div>
      <ul>
        {marketPostsData.map((post)=> {
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
      </> : <></>}
    </MarketPreviewBoxWrap>
  )
}