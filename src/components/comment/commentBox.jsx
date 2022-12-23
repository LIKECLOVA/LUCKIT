import React from 'react';
import CommentList from './commentlist/commentList';
import CommentInput from './commentinput/commentInput';
import { CommentListBox } from './commentboxstyle';

function CommentBox({ postId, comments, getComments }) {
    console.log('아이딩',postId)
    console.log('댓글',comments)

    return (
    <>
      <CommentListBox>
        <CommentList comments={comments} />
      </CommentListBox>
      <CommentInput getComments={getComments} postId={postId} />
    </>
  );
}

export default CommentBox;