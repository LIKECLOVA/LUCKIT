import React from 'react';
import { Button, FollowButton, UploadButton } from './buttonstyle';

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
    <UploadButton
      size={props.size}
      form={props.form}
      disabled={props.disabled}
      className={props.isActive}
      onClick={props.handlePostSns}
    >
      {props.text}
    </UploadButton>
  );
};

export const SerchBtn = ({ size, onClick }) => {
  return <Button onClick={onClick} size={size}>검색하기</Button>;
};
