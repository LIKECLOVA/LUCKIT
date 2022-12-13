import React from 'react'
import {SnsPostModalWrap, CommentInp} from './snspoststyle'
import MainSnsPost from '../mainpost/mainSnsPost'
import {CommentBox} from '../comment/comment-box/commentBox'

export const SnsPost = () => {
  return (
    <SnsPostModalWrap>
      <button>닫기</button>
      <MainSnsPost/>
      <CommentBox/>
      <CommentInp/>
    </SnsPostModalWrap>
  )
}
