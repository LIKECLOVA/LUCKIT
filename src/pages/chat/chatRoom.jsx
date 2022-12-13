import React from 'react';
import { Header } from '../../components/header/header';
import { ChatRoomWrap, LeftChatTxT, RightChatTxT, ChatInput,ChatInputWrap } from './chatroomstyle';

export const ChatRoom = () => {
  const RightText = ({ chatTxT }) => {
    return (
      <LeftChatTxT>
        <div className='imgwrap'>
          <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='' />
        </div>
        <div className='txtwrap'>{chatTxT}</div>
      </LeftChatTxT>
    );
  };

  const LeftText = ({ chatTxT }) => {
    return (
      <RightChatTxT>
        <div>{chatTxT}</div>
      </RightChatTxT>
    );
  };

  return (
    <>
      <ChatRoomWrap>
        <Header />
        <RightText chatTxT={'왼쪽 채팅입니다'} />
        <LeftText chatTxT={'오른쪽입니다'} />
        <RightText chatTxT={'왼쪽'} />
        <LeftText chatTxT={'오른쪽입니다'} />
        <ChatInputWrap>
          <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt=''/>
          <ChatInput />
        </ChatInputWrap>
      </ChatRoomWrap>
    </>
  );
};
