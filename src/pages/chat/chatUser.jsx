import React from 'react';
import { ChatInfoWrap, ChatUserLi } from './chatuserstyle';

const ChatUser = ({ chat, id, img, time }) => {
  return (
    <ChatUserLi>
      <ChatInfoWrap>
        <img className='userImg' src={img} alt='프로필사진' />

        <div className='chatList'>
          <p className='userId'>{id}</p>
          <p className='userChat'>{chat}</p>
        </div>
      </ChatInfoWrap>

      <time>{time}</time>
    </ChatUserLi>
  );
};

export default ChatUser;
