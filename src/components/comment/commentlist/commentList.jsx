import React from 'react';
import { NavLink } from 'react-router-dom'
import { CommentListWrapper, CommentListContainer, CommentListLi, ProfileImg, InformationBox, ModalBtnBox, CommentText } from '../commentlist/commentliststyle';
import {CommentMoreBtn} from '../../button/iconBtn'


function CommentList({ comments, postId }) {
  const timeForToday = (createTime) => {
    const today = new Date();
    const timeValue = new Date(createTime);
  
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60,
    );
  
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }
  
    const betweenTimeHour = Math.floor(betweenTime / 60);
  
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }
  
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }
  
    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

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