import React from 'react';
import { Button, FollowButton, SnsBtnWrap, UploadButton } from './buttonstyle';
import IconPostListOn from '../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOn from '../../assets/icon/icon-post-album-on.png';
import IconPostAlbumOff from '../../assets/icon/icon-post-album-off.png';

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
    <Button onClick={props.handlePostSns} size={props.size} disabled={props.disabled}>
      {props.text}
    </Button>
  );
};

export const MarketUploadBtn = (props) => {
  return (
    <UploadButton
      size={props.size}
      form={props.form}
      disabled={props.disabled}
      className={props.isActive}
      onClick={props.handleClick}
    >
      {props.text}
    </UploadButton>
  );
};

export const SearchBtn = ({ size }) => {
  return <Button size={size}>검색하기</Button>;
};

export const ListAndAlbumBtn = ({ onClickListBtn, onClickAlbumBtn, imgList, imgAlbum }) => {
  return (
    <SnsBtnWrap>
      <button onClick={onClickListBtn}>
        {imgList ? <img src={IconPostListOn} alt='리스트형' /> : <img src={IconPostListOff} alt='리스트형' />}
      </button>
      <button onClick={onClickAlbumBtn}>
        {imgAlbum ? <img src={IconPostAlbumOn} alt='앨범형' /> : <img src={IconPostAlbumOff} alt='앨범형' />}
      </button>
    </SnsBtnWrap>
  );
};
