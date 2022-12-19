import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import { ChatPageUl, ChatPageWrap } from './chatpagestyle';
import ChatUser from './chatUser';



export const ChatPage = () => {
  return (
    <>
      <ProfileAndChatHeader />
      <ChatPageWrap>
        <ChatPageUl>
          <Link to='/chatroom'>
            <ChatUser />
          </Link>
          <ChatUser />
          <ChatUser />
        </ChatPageUl>
      </ChatPageWrap>
    </>
  );
};
