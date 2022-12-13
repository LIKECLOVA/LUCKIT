import React from 'react'
import { NavLink } from 'react-router-dom'
import {MainSnsPostWhap,IconWrap, SnsIdWhap, SnsPostBox} from './mainpoststyle'

const MainSnsPost = () => {
  return (
    <MainSnsPostWhap>
       <NavLink to='/yourprofile'>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="프로필이미지" />
      </NavLink>
      <SnsPostBox>
      <NavLink to='/yourprofile'>
      <SnsIdWhap>
      <strong>몰랑몰랑</strong>
      <p>@molang</p>
      </SnsIdWhap>
      </NavLink>
      <NavLink to='/snsPost'>
      <p>몰랑이는 너무 귀여운 것 같아용!</p>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="게시글이미지" />
      </NavLink>
      <IconWrap>
      <button>좋아요버튼</button>
      <NavLink to='/snsPost'>
      <button>댓글버튼</button>
      </NavLink>
      </IconWrap>
      </SnsPostBox>
      
    </MainSnsPostWhap>
  )
}

export default MainSnsPost
