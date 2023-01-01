import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ModalWrap,
  ModalBtnWrap,
  PostModalWrap,
  PostModalBtnWrap,
  NavLinkStyle,
  Div,
  ModalNavLink,
} from './modalstyle';

export const LogoutModal = ({ onClickClose }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickLogoutModal = () => {
    setIsOpenModal(true);
  };

  const onClickCancel = () => {
    setIsOpenModal(false);
  };

  const onClickLogout = () => {
    localStorage.removeItem('Account Name');
    localStorage.removeItem('Access Token');
  };

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='postModalList' onClick={(e) => e.stopPropagation()}>
        <PostModalBtnWrap>
          <NavLinkStyle to='/editprofile'>설정 및 개인 정보</NavLinkStyle>
          <button onClick={onClickLogoutModal}>로그아웃</button>
        </PostModalBtnWrap>
        {isOpenModal && (
          <Div>
            <ModalWrap>
              <strong>로그아웃 하시겠습니까?</strong>
              <ModalBtnWrap>
                <button onClick={onClickCancel}>취소</button>
                <ModalNavLink to='/login' onClick={onClickLogout}>
                  로그아웃
                </ModalNavLink>
              </ModalBtnWrap>
            </ModalWrap>
          </Div>
        )}
      </div>
    </PostModalWrap>
  );
};

export const MarketPreviewModal = ({ onClickClose, productId }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const userToken = localStorage.getItem('Access Token');
  const myAccountName = localStorage.getItem("Account Name");
  const { id } = useParams();

  const onClickDeleteModal = () => {
    setIsOpenModal(true);
  };

  const onClickCancel = () => {
    setIsOpenModal(false);
  };

  const handleMarketDelete = async () => {
    try {
      await axios
        .delete(`https://mandarin.api.weniv.co.kr/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        })
        .then(() => {
          setIsOpenModal(false);
          onClickClose(false);
          location.reload();
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='postModalList' onClick={(e) => e.stopPropagation()}>
        {id === myAccountName ? 
        <>
          <PostModalBtnWrap>
            <button onClick={onClickDeleteModal}>삭제</button>
            <NavLinkStyle to={`/update/${productId}`}>수정</NavLinkStyle>
          </PostModalBtnWrap>
          {isOpenModal && (
            <Div>
              <ModalWrap>
                <strong>매칭글을 삭제할까요?</strong>
                <ModalBtnWrap>
                  <button onClick={onClickCancel}>취소</button>
                  <button onClick={handleMarketDelete}>삭제</button>
                </ModalBtnWrap>
              </ModalWrap>
            </Div>
          )}
          </> : 
          <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && (
              <Div>
                <ModalWrap>
                  <strong>신고할까요?</strong>
                  <ModalBtnWrap>
                    <button onClick={onClickCancel}>취소</button>
                    <button>신고</button>
                  </ModalBtnWrap>
                </ModalWrap>
              </Div>
            )}
          </>}
      </div>
    </PostModalWrap>
  );
};

/* Sns게시글 모달 */
export const SnsPostModal = ({ onClickClose, accountName, myAccountName, postId, postContent, postImg}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const token = localStorage.getItem('Access Token');
  const navigate = useNavigate(); 

  const onClickDeleteModal = () => {
    setIsOpenModal(true);
  };

  const onClickCancel = () => {
    setIsOpenModal(false);
  };

  const deletePost = () => {

    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${postId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        setIsOpenModal(false);
        onClickClose(false);
        navigate(`/profile/${accountName}`);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='postModalList' onClick={(e) => e.stopPropagation()}>
        {myAccountName === accountName ? (
          <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>삭제</button>
              <NavLinkStyle to={'/snsmodify'} state={{
                    postId: postId,
                    postContent: postContent,
                    postImg:postImg
                  }}
              >수정</NavLinkStyle>
            </PostModalBtnWrap>
            {isOpenModal && (
              <Div>
                <ModalWrap>
                  <strong>게시글을 삭제할까요?</strong>
                  <ModalBtnWrap>
                    <button onClick={onClickCancel}>취소</button>
                    <button onClick={deletePost}>삭제</button>
                  </ModalBtnWrap>
                </ModalWrap>
              </Div>
            )}
          </>
        ) : (
          <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && (
              <Div>
                <ModalWrap>
                  <strong>신고할까요?</strong>
                  <ModalBtnWrap>
                    <button onClick={onClickCancel}>취소</button>
                    <button>신고</button>
                  </ModalBtnWrap>
                </ModalWrap>
              </Div>
            )}
          </>
        )}
      </div>
    </PostModalWrap>
  );
};

export const ChatRoomModal = ({ onClickClose }) => {
  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='postModalList' onClick={(e) => e.stopPropagation()}>
        <PostModalBtnWrap>
          <NavLinkStyle to='/chatpage'>채팅방 나가기</NavLinkStyle>
        </PostModalBtnWrap>
      </div>
    </PostModalWrap>
  );
};

export const CommentModal = ({ onClickClose, myAccountName, accountName, postId, commentId }) => {
  const userToken = localStorage.getItem('Access Token');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickDeleteModal = () => {
    setIsOpenModal(true);
  };

  const onClickCancel = () => {
    setIsOpenModal(false);
  };
  const onClickCommentDelete = () => {

    axios({
      url: `https://mandarin.api.weniv.co.kr/post/${postId}/comments/${commentId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        setIsOpenModal(false);
        onClickClose(false);
        location.reload();
      })
      .catch((error) => {
        console.log('댓글이 존재하지 않습니다.');
      });
  };

  return (
    <PostModalWrap onClick={() => onClickClose(false)}>
      <div className='postModalList' onClick={(e) => e.stopPropagation()}>
        {myAccountName === accountName ? (
          <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>삭제</button>
            </PostModalBtnWrap>
            {isOpenModal && (
              <Div>
                <ModalWrap>
                  <strong>댓글을 삭제할까요?</strong>
                  <ModalBtnWrap>
                    <button onClick={onClickCancel}>취소</button>
                    <button onClick={onClickCommentDelete}>삭제</button>
                  </ModalBtnWrap>
                </ModalWrap>
              </Div>
            )}
          </>
        ) : (
          <>
            <PostModalBtnWrap>
              <button onClick={onClickDeleteModal}>신고하기</button>
            </PostModalBtnWrap>
            {isOpenModal && (
              <Div>
                <ModalWrap>
                  <strong>신고할까요?</strong>
                  <ModalBtnWrap>
                    <button onClick={onClickCancel}>취소</button>
                    <button>신고</button>
                  </ModalBtnWrap>
                </ModalWrap>
              </Div>
            )}
          </>
        )}
      </div>
    </PostModalWrap>
  );
};