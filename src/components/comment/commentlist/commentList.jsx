import React from 'react';
import { NavLink } from 'react-router-dom'
import { timeForToday } from '../../timeForToday'
// import * as S from './commentliststyle';
import { CommentListWrapper, CommentListContainer, CommentListLi, ProfileImg, InformationBox, ModalBtnBox, CommentText } from '../commentlist/commentliststyle';
import {CommentMoreBtn} from '../../button/iconBtn'


function CommentList({ comments,postId }) {

  return (
    <CommentListWrapper>
      <CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <CommentListLi key={data.id}>
                <NavLink to={`/profile/${data.author.accountName}`}>
                <ProfileImg src={data.author.image} />
                </NavLink>
                <InformationBox>
                <NavLink to={`/profile/${data.author.accountName}`}>
                  <span>{data.author.username}</span>
                </NavLink>
                  <small>{timeForToday(data.createdAt)}</small>
                </InformationBox>
                <ModalBtnBox>
                  <CommentMoreBtn accountName={data.author.accountName} postId={postId} commentId={data.id}/>
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