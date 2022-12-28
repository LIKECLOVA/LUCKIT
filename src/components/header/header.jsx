import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HomeHeaderWrap,
  SearchHeaderWrap,
  FeedHeaderWrap,
  ProfileHeaderWrap,
  FollowHeaderWrap,
  EditAndUploadHeaderWrap,
} from './headerstyle';
import IconSearch from '../../assets/icon/icon-search.png'
import IconLuckitLogo from '../../assets/icon/icon-luckit.png'
import IconMoreVertical from '../../assets/icon/icon- more-vertical.png'
import { StoreBtn, UploadBtn } from '../../components/button/button'
import { ChatRoomModal, LogoutModal } from '../modal/modal'
import { BackBtn } from '../button/iconBtn';


// 팔로잉 없을 때 홈페이지, 팔로잉 있을 때 홈페이지(스크롤x)
export const HomepageHeader = () => {
  return (
    <HomeHeaderWrap>
      <NavLink to='/search'>
        <img src={IconSearch} alt='검색' className='searchImg' />
      </NavLink>
    </HomeHeaderWrap>
  );
};


// 팔로잉 있을 때 홈페이지 스크롤 내릴 경우, SNS 피드 페이지
export const FeedPageHeader = () => {
  return (
    <FeedHeaderWrap>
      <img src={IconLuckitLogo} alt='럭킷 로고' className='logoImg' />
      <NavLink to='/search'>
        <img src={IconSearch} alt='검색' className='searchImg' />
      </NavLink>
    </FeedHeaderWrap>
  );
};

// 검색 페이지
export const SearchHeader = ({ value, onChange }) => {

  return (
    <SearchHeaderWrap>
      <BackBtn/>
      <input type='search' placeholder='계정 검색' value={value} onChange={onChange} />
    </SearchHeaderWrap>
  );
};

// 프로필, 채팅 페이지
export const ProfileAndChatHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <ProfileHeaderWrap>
        <BackBtn/>
        <button onClick={onClick}>
          <img src={IconMoreVertical} alt='설정 및 로그아웃 버튼' />
        </button>
      </ProfileHeaderWrap>
        {isOpen && 
        <LogoutModal onClickClose={onClickClose}/>}
    </>
  )
}


// 내 팔로우 페이지 헤더
export const FollowerHeader = () => {

  return (
    <FollowHeaderWrap>
      <BackBtn/>
      <strong>followers</strong>
    </FollowHeaderWrap>
  );
};

// 상대방 팔로우 페이지 헤더
export const FollowingHeader = () => {

  return (
    <FollowHeaderWrap>
      <BackBtn/>
      <strong>followings</strong>
    </FollowHeaderWrap>
  );
};

// 프로필 수정 페이지 헤더
export const ProfileEditHeader = ({ onClick }) => {

  return (
    <EditAndUploadHeaderWrap>
      <BackBtn/>
      <StoreBtn onClick={onClick} size='middle-sm' />
    </EditAndUploadHeaderWrap>
  );
};

// 게시글 업로드 헤더
export const PostUploadHeader = ({ isActive, handlePostSns, disabled }) => {

  return (
    <EditAndUploadHeaderWrap>
      <BackBtn/>
      <UploadBtn size='middle-sm' isActive={isActive} handlePostSns={handlePostSns} disabled={disabled} text='저장' />
    </EditAndUploadHeaderWrap>
  );
};

// 채팅방 페이지
export const ChatRoomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  }

  const onClickClose = (value) => {
    setIsOpen(value);
  }

  return (
    <ProfileHeaderWrap>
      <BackBtn/>
      <strong>유저 네임 data 또는 그냥 지정</strong>
      <button onClick={onClick}>
        <img src={IconMoreVertical} alt='채팅방 나가기 버튼' />
      </button>
      {isOpen && <ChatRoomModal onClickClose={onClickClose}/>}
    </ProfileHeaderWrap>
  );
};