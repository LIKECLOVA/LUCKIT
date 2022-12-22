import React, { useState } from 'react'
import { ModalWrap, ModalBtnWrap, PostModalWrap, PostModalBtnWrap, NavLinkStyle, Div, ModalNavLink} from './modalstyle' 

export const LogoutModal = ({onClickClose}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onClickLogoutModal = () => {
    setIsOpenModal(true)
  }

  const onClickCancel = () => {
    setIsOpenModal(false)
  }

  const onClickLogout = () => {
    localStorage.clear();
  }

  return(
    <PostModalWrap onClick={() => onClickClose(false)}>
        <div className='test' onClick={(e) => e.stopPropagation()}>
          <PostModalBtnWrap>
            <NavLinkStyle to='/editprofile'>설정 및 개인 정보</NavLinkStyle>
            <button onClick={onClickLogoutModal}>로그아웃</button>
          </PostModalBtnWrap>
          {isOpenModal && 
          <Div>
            <ModalWrap>
              <strong>로그아웃 하시겠습니까?</strong>
              <ModalBtnWrap>
                <button onClick={onClickCancel}>취소</button>
                <ModalNavLink to='/login' onClick={onClickLogout}>로그아웃</ModalNavLink>
              </ModalBtnWrap>
            </ModalWrap>
          </Div>
          }
        </div>
    </PostModalWrap>
  )
}

export const MarketPreviewModal = ({onClickClose}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onClickDeleteModal = () => {
    setIsOpenModal(true)
  }

  const onClickCancel = () => {
    setIsOpenModal(false)
  }

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='test' onClick={(e) => e.stopPropagation()}>
        <PostModalBtnWrap>
          <button onClick={onClickDeleteModal}>삭제</button>
          <NavLinkStyle to='#'>수정</NavLinkStyle>
          <NavLinkStyle to='#'>상세 페이지로 가기</NavLinkStyle>
        </PostModalBtnWrap>
        {isOpenModal && 
          <Div>
          <ModalWrap>
            <strong>게시글을 삭제할까요?</strong>
            <ModalBtnWrap>
              <button onClick={onClickCancel}>취소</button>
              <button>삭제</button>
            </ModalBtnWrap>
          </ModalWrap>
        </Div>
        }
      </div>
    </PostModalWrap>
  )
}

export const SnsPostModal = ({onClickClose, accountName, id}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onClickDeleteModal = () => {
    setIsOpenModal(true)
  }

  const onClickCancel = () => {
    setIsOpenModal(false)
  } 

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
        <div className='test' onClick={(e) => e.stopPropagation()}>
            {accountName === id ? <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>삭제</button>
              <NavLinkStyle to='#'>수정</NavLinkStyle>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>게시글을 삭제할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>삭제</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>
            }
            </> : <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>신고할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>신고</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>}
            </>}
        </div>
      </PostModalWrap>
  )
}

export const ChatRoomModal = ({onClickClose}) => {

  return(
    <PostModalWrap onClick={() => onClickClose(false)}>
        <div className='test' onClick={(e) => e.stopPropagation()}>
          <PostModalBtnWrap>
            <NavLinkStyle to='/chatpage'>채팅방 나가기</NavLinkStyle>
          </PostModalBtnWrap>
        </div>
      </PostModalWrap>
  )
}

export const CommentModal = ({onClickClose, id, accountname}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onClickDeleteModal = () => {
    setIsOpenModal(true)
  }

  const onClickCancel = () => {
    setIsOpenModal(false)
  } 

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
        <div className='test' onClick={(e) => e.stopPropagation()}>
            {accountname === id ? <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>삭제</button>
              <NavLinkStyle to='#'>수정</NavLinkStyle>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>댓글을 삭제할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>삭제</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>
            }
            </> : <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && 
            <Div>
              <ModalWrap>
                <strong>신고할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button>신고</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>}
            </>}
        </div>
      </PostModalWrap>
  )
}