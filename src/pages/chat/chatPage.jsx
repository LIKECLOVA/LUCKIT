import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import { ChatPageUl, ChatPageWrap } from './chatpagestyle';
import ChatUser from './chatUser';

// 이미지 추가 작업



export const ChatPage = () => {
  return (
    <>
      <ProfileAndChatHeader />
      <ChatPageWrap>
        <ChatPageUl>
          <Link to='/chatroom'>
            <ChatUser id={'몰랑이'} chat={'몰랑이 인형 팔렸나요?'}/>
          </Link>
          <ChatUser id={'쿠로미'} chat={'일요일 오후 1시에 오시면 됩니다'}/>
          <ChatUser id={'만년농노'} chat={'달무티에 관심 있으세요?'}/>
        </ChatPageUl>
      </ChatPageWrap>
    </>
  );
};
