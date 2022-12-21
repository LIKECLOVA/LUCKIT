import React from 'react'
import { ModalWrap, ModalBtnWrap, PostModalWrap, PostModalBtnWrap} from './modalstyle' 

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
