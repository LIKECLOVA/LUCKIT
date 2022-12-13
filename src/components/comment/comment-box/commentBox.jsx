import React from 'react'
import {CommentBoxWrap} from '../commentstyle'
import {CommentList} from '../comment-list/commentList'

export const CommentBox = () => {
  return (
    <CommentBoxWrap> 
      <CommentList/>
    </CommentBoxWrap>
  )
}
