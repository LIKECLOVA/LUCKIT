import React, { useState } from 'react'
import { ModalWrap, ModalBtnWrap, PostModalWrap, PostModalBtnWrap, NavLinkStyle, Div} from './modalstyle' 


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
