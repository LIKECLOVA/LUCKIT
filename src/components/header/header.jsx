import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HomeHeaderWrap,  SearchHeaderWrap, FeedHeaderWrap, ProfileHeaderWrap, FollowHeaderWrap, EditAndUploadHeaderWrap} from './headerstyle'
import IconSearch from '../../assets/icon/icon-search.png'
import IconArrowLeft from '../../assets/icon/icon-arrow-left.png'
import IconLuckitLogo from '../../assets/icon/icon-luckit.png'
import IconMoreVertical from '../../assets/icon/icon- more-vertical.png'
import { StoreBtn, UploadBtn } from '../../components/button/button'


// 팔로잉 없을 때 홈페이지, 팔로잉 있을 때 홈페이지(스크롤X)
export const HomepageHeader = () => {
  return (
    <HomeHeaderWrap>
       <Link to='/search'>
        <img src={IconSearch} alt='검색' className='searchImg'/>
       </Link>
    </HomeHeaderWrap>
  )
}

// 팔로잉 있을 때 홈페이지 스크롤 내릴 경우, SNS 피드 펭지
export const FeedPageHeader = () => {
  return (
    <FeedHeaderWrap>
        <img src={IconLuckitLogo} alt='럭킷 로고' className='logoImg'/>
        <Link to='/search'>
          <img src={IconSearch} alt='검색' className='searchImg'/>
       </Link>
    </FeedHeaderWrap>
  )
}

// 검색 페이지
export const SearchHeader = ({value, onChange}) => {
  const navigate = useNavigate();
 
  return (
    <SearchHeaderWrap>
        <button onClick={() => {navigate(-1)}}>
          <img src={IconArrowLeft} alt='뒤로가기' />
        </button>
        <input type='search' placeholder='계정 검색' value={value} onChange={onChange}/>
    </SearchHeaderWrap>
  )
}

// 프로필 페이지
export const ProfileAndChatHeader = () => {
  const navigate = useNavigate();

  return (
    <ProfileHeaderWrap>
      <button onClick={() => {navigate(-1)}}>
        <img src={IconArrowLeft} alt='뒤로가기' />
      </button>
      <button>
        <img src={IconMoreVertical} alt='설정 및 로그아웃 버튼' />
      </button>
    </ProfileHeaderWrap>
  )
}

// 내 팔로우 페이지 헤더
export const FollowerHeader = () => {
  const navigate = useNavigate();

  return (
    <FollowHeaderWrap>
      <button onClick={() => {navigate(-1)}}>
         <img src={IconArrowLeft} alt='뒤로가기' />
       </button>
       <strong>followers</strong>
    </FollowHeaderWrap>
  )
}

// 상대방 팔로우 페이지 헤더
export const FollowingHeader = () => {
  const navigate = useNavigate();

  return (
    <FollowHeaderWrap>
      <button onClick={() => {navigate(-1)}}>
         <img src={IconArrowLeft} alt='뒤로가기' />
       </button>
       <strong>followings</strong>
    </FollowHeaderWrap>
  )
}

// 프로필 수정 페이지 헤더
export const ProfileEditHeader = () => {
  const navigate = useNavigate();

  return (
    <EditAndUploadHeaderWrap>
      <button onClick={() => {navigate(-1)}} className='backBtn'>
        <img src={IconArrowLeft} alt='뒤로가기' />
      </button>
      <StoreBtn size='middle-sm' />
    </EditAndUploadHeaderWrap>
  )
}

// 게시글 업로드 헤더
export const PostUploadHeader = () => {
  const navigate = useNavigate();

  return (
    <EditAndUploadHeaderWrap>
      <button onClick={() => {navigate(-1)}} className='backBtn'>
        <img src={IconArrowLeft} alt='뒤로가기' />
      </button>
      <UploadBtn size='middle-sm'/>
    </EditAndUploadHeaderWrap>
  )
}

// 채팅방 페이지
export const ChatRoomHeader = () => {
  const navigate = useNavigate();

  return (
    <ProfileHeaderWrap>
      <button onClick={() => {navigate(-1)}}>
        <img src={IconArrowLeft} alt='뒤로가기' />
      </button>
      <strong>유저 네임 data 또는 그냥 지정</strong>
      <button>
        <img src={IconMoreVertical} alt='채팅방 나가기 버튼' />
      </button>
    </ProfileHeaderWrap>
  )
}