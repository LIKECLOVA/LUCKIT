import React from 'react'
import { ModalWrap, ModalBtnWrap, PostModalWrap, PostModalBtnWrap } from './modalstyle' 

export const LogoutModal = () => {
  return (
    <ModalWrap>
      <strong>로그아웃 하시겠습니까?</strong>
      <ModalBtnWrap>
        <button>취소</button>
        <button>로그아웃</button>
      </ModalBtnWrap>
    </ModalWrap>
  )
}

export const DeletePostModal = () => {
  return (
    <ModalWrap>
      <strong>게시글을 삭제할까요?</strong>
      <ModalBtnWrap>
        <button>취소</button>
        <button>삭제</button>
      </ModalBtnWrap>
    </ModalWrap>
  )
}

export const DeleteCommentModal = () => {
  return (
    <ModalWrap>
      <strong>댓글을 삭제할까요?</strong>
      <ModalBtnWrap>
        <button>취소</button>
        <button>삭제</button>
      </ModalBtnWrap>
    </ModalWrap>
  )
}

export const ReportModal = () => {
  return (
    <ModalWrap>
      <strong>신고할까요?</strong>
      <ModalBtnWrap>
        <button>취소</button>
        <button>신고</button>
      </ModalBtnWrap>
    </ModalWrap>
  )
}


// 아래 슬라이드 형태로 나타나는 모달
// 아마도 기능 구현하면서 다른 컴포넌트로 분리할 예정
export const PostModal = () => {
  return (
    <PostModalWrap>
      <PostModalBtnWrap>
        <button>설정 및 개인 정보</button>
        <button>로그아웃</button>
      </PostModalBtnWrap>
    </PostModalWrap>
  )
}

export const PostReportModal = () => {
  return (
    <PostModalWrap>
      <PostModalBtnWrap>
        <button>신고하기</button>
      </PostModalBtnWrap>
    </PostModalWrap>
  )
}

export const PostEditModal = () => {
  return (
    <PostModalWrap>
      <PostModalBtnWrap>
        <button>삭제</button>
        <button>수정</button>
      </PostModalBtnWrap>
    </PostModalWrap>
  )
}

export const ChatModal = () => {
  return (
    <PostModalWrap>
      <PostModalBtnWrap>
        <button>채팅방 나가기</button>
      </PostModalBtnWrap>
    </PostModalWrap>
  )
}
