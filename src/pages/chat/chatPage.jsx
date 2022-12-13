import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { ChatPageUl, ChatPageWrap } from './chatpagestyle';
import ChatUser from './chatUser';



export const ChatPage = () => {
  return (
    <>
      <Header />
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
