import React from 'react';
import { timeForToday } from '../../timeForToday'
import * as S from './commentliststyle';
import {CommentMoreBtn} from '../../button/iconBtn'

function CommentList({ comments }) {
  return (
    <S.CommentListWrapper>
      <S.CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <S.CommentListLi key={data.id}>
                <S.ProfileImg src={data.author.image} />
                <S.InformationBox>
                  <span>{data.author.username}</span>
                  <small>{timeForToday(data.createdAt)}</small>
                </S.InformationBox>
                <S.ModalBtnBox>
                  <CommentMoreBtn accountname={data.author.accountname}/>
                </S.ModalBtnBox>
                <S.CommentText>{data.content}</S.CommentText>
              </S.CommentListLi>
            );
          })}
      </S.CommentListContainer>
    </S.CommentListWrapper>
  );
}

export default CommentList;