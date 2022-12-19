import React from 'react';
import { ChatInfoWrap, ChatUserLi } from './chatuserstyle';

const ChatUser = () => {
  return (
    <ChatUserLi>
      <ChatInfoWrap>
        <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필사진' />
        <div>
          <p>아이디</p>
          <p>채팅 미리보기</p>
        </div>
      </ChatInfoWrap>

      <time>2022-12-13</time>
    </ChatUserLi>
  );
};

export default ChatUser;
