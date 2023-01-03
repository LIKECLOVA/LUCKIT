import React from 'react';
import CommentList from './commentlist/commentList';
import CommentInput from './commentinput/commentInput';
import { CommentListBox } from './commentboxstyle';


function CommentBox({ postId, comments, getComments }) {

    return (
    <>
      <CommentListBox>
        <CommentList comments={comments} postId={postId}/>
      </CommentListBox>
      <CommentInput getComments={getComments} postId={postId} />
    </>
  );
}

export default CommentBox;