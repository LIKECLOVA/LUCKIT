import React from 'react';
import { NavLink } from 'react-router-dom'
import { timeForToday } from '../../timeForToday'
import { CommentListWrapper, CommentListContainer, CommentListLi, ProfileImg, InformationBox, ModalBtnBox, CommentText } from '../commentlist/commentliststyle';
import {CommentMoreBtn} from '../../button/iconBtn'


function CommentList({ comments, postId }) {

  return (
    <CommentListWrapper>
      <CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <CommentListLi key={data.id}>
                <NavLink to={`/profile/${data.author.accountname}`}>
                <ProfileImg src={data.author.image} />
                </NavLink>
                <InformationBox>
                <NavLink to={`/profile/${data.author.accountname}`}>
                  <span>{data.author.username}</span>
                </NavLink>
                  <small>{timeForToday(data.createdAt)}</small>
                </InformationBox>
                <ModalBtnBox>
                  <CommentMoreBtn accountName={data.author.accountname} postId={postId} commentId={data.id}/>
                </ModalBtnBox>
                <CommentText>{data.content}</CommentText>
              </CommentListLi>
            );
          })}
      </CommentListContainer>
    </CommentListWrapper>
  );
}

export default CommentList;