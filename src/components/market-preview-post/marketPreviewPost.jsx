import React from 'react'
import { Link } from 'react-router-dom'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'


export const MarketPreviewPost = () => {
  return (
    <MarketPreviewBoxWrap>
      <h2><strong>유조미짱</strong>님이 찾는 럭킷 메이트✨</h2>
      <ul>
        <li>
          <Link to='#'>
            <p>아이브 콘서트 가요아이브 콘서트 가요아이브 콘서트 가요아이브 콘서트 가요</p>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <p>아이브 콘서트 가요</p>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <p>아이브 콘서트 가요</p>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <p>아이브 콘서트 가요</p>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <p>아이브 콘서트 가요</p>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" />
          </Link>
        </li>
      </ul>      
    </MarketPreviewBoxWrap>
  )
}