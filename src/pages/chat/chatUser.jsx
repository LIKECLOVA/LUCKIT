import React from 'react';
import { ChatInfoWrap, ChatUserLi } from './chatuserstyle';

const ChatUser = ({chat, id}) => {
  return (
    <ChatUserLi>
      <ChatInfoWrap>
        <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진' />
        <div>
          <p className='userId'>{id}</p>
          <p className='userChat'>{chat}</p>
        </div>
      </ChatInfoWrap>

      <time>2022-12-13</time>
    </ChatUserLi>
  );
};

export default ChatUser;
