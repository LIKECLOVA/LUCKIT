import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MainSnsPostWhap,
  IconWrap,
  SnsIdWhap,
  SnsPostBox,
  UserProfileImg,
  ImgListDiv,
  SnsPostContent,
  CommentBtnWrap,
} from './mainpoststyle';
import { MoreBtn } from '../button/iconBtn';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png';
import CommentIcon from '../../assets/icon/icon-message-circle.svg';
import HeartBtn from '../button/heart/heartBtn';

const onErrorImg = (e) => {
  e.target.src = DefaultUserImg;
};

const MainSnsPost = ({ data }) => {
  const userToken = localStorage.getItem('Access Token');

  return (
    <MainSnsPostWhap>
      <NavLink to={`/profile/${data.author.accountname}`}>
        <UserProfileImg src={data.author.image} onError={onErrorImg} />
      </NavLink>
      <SnsPostBox>
        <NavLink to={`/profile/${data.author.accountname}`}>
          <SnsIdWhap>
            <strong>{data.author.username}</strong>
            <p>@{`${data.author.accountname}`}</p>
          </SnsIdWhap>
        </NavLink>
        <NavLink to={`/snspost/${data.id}`}>
          <SnsPostContent>{data.content}</SnsPostContent>
          <div className='snsImgList'>
            {data.image ? (
              data.image.split(',').map((src, index) => {
                return (
                  <ImgListDiv key={index}>
                    <img
                      src={src}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                      alt='게시글이미지'
                    />
                  </ImgListDiv>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </NavLink>
        <IconWrap>
          <HeartBtn userToken={userToken} hearted={data.hearted} postId={data.id} heartCount={data.heartCount} />
          <NavLink to={`/snspost/${data.id}`}>
            <CommentBtnWrap>
              <img src={CommentIcon} alt='' style={{ marginRight: '3px' }} />
              <span>{data.comments.length}</span>
            </CommentBtnWrap>
          </NavLink>
        </IconWrap>
      </SnsPostBox>
      <MoreBtn postId={data.id} accountName={data.author.accountname} postContent={data.content} postImg={data.image} />
    </MainSnsPostWhap>
  );
};

export default MainSnsPost;
