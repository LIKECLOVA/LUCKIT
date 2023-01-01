import axios from 'axios';
import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/icon/icon-heart.svg';
import * as S from './heartbtnstyle';

const HeartBtn = ({ userToken, postId, hearted, heartCount }) => {
  const [isHearted, setIsHearted] = useState(hearted);
  const [count, setCount] = useState(heartCount);

  const handleLike = async () => {
    /* 하트를 누르지 않은 게시물일 때 */
    if (!isHearted) {
      try {
        await axios({
          url: `https://mandarin.api.weniv.co.kr/post/${postId}/heart`,
          method: 'post',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          setIsHearted(res.data.post.hearted);
          setCount(res.data.post.heartCount);
        });
      } catch (error) {
        console.log(error);
      }
    }

    /* 하트를 이미 누른 게시물일 때 */
    if (isHearted) {
      try {
        await axios({
          url: `https://mandarin.api.weniv.co.kr/post/${postId}/unheart`,
          method: 'delete',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }).then((res) => {
          setIsHearted(res.data.post.hearted);
          setCount(res.data.post.heartCount);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <S.PostIconBtn onClick={handleLike}>
      <HeartIcon
        fill={isHearted ? '#F3033D' : '#dbdbdb'}
        stroke={isHearted ? '#F3033D' : '#dbdbdb'}
        style={{ marginRight: '4px' }}
      />
      <span>{count}</span>
    </S.PostIconBtn>
  );
};

export default HeartBtn;
