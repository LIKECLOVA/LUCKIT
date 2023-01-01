import React from 'react';
import { Button, FollowButton } from './buttonstyle';

export const NextBtn = ({ size, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick} size={size}>
      다음
    </Button>
  );
};

export const FollowBtn = ({ size, onClick, isFollow }) => {
  return (
    <FollowButton isFollow={isFollow} onClick={onClick} size={size}>
      {isFollow ? '취소' : '팔로우'}
    </FollowButton>
  );
};

export const StoreBtn = ({ size, onClick }) => {
  return (
    <Button onClick={onClick} size={size}>
      저장
    </Button>
  );
};

export const UploadBtn = (props) => {

  return (
    <Button
      onClick={props.handlePostSns}
      size={props.size}
      disabled={props.disabled}>
      {props.text}
    </Button>
  );

};

export const SearchBtn = ({ size }) => {
  return <Button size={size}>검색하기</Button>;
};
