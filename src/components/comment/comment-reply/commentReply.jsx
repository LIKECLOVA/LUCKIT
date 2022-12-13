import React from 'react'
import { NavLink } from 'react-router-dom'
import {CommentReplyWhap,CommentReplyAra} from '../commentstyle'

export const CommentReply = () => {
  return (
    <CommentReplyWhap>
    <NavLink to='/yourprofile'>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="프로필이미지" />
      </NavLink>
      <CommentReplyAra>
      <NavLink to='/yourprofile'>
        <strong>쿠로미짱</strong>
      </NavLink>
        <p>멋클 넘좋아... 최고최고!!!</p>
      </CommentReplyAra>
      <button>속성</button>
    </CommentReplyWhap>
  )
}
