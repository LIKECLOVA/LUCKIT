import React from 'react';
import { ChatRoomHeader } from '../../components/header/header';
import { ChatRoomWrap, LeftChatTxT, RightChatTxT, ChatInput,ChatInputWrap } from './chatroomstyle';
import molang from '../../assets/icon/몰랑이.png'
import BaseImg from '../../assets/icon/basic-profile-img-.png'

export const ChatRoom = () => {
  const RightText = ({ chatTxT }) => {
    return (
      <RightChatTxT>
        <div className='imgwrap'>
          <img src={molang} alt='유저이미지' />
        </div>
        <div className='txtwrap'>{chatTxT}</div>

      </RightChatTxT>
    );
  };

  const LeftText = ({ chatTxT }) => {
    return (
      <LeftChatTxT>
        <div>{chatTxT}</div>
      </LeftChatTxT>
    );
  };

  return (
    <>
      <ChatRoomWrap>
        <ChatRoomHeader />
        <RightText chatTxT={'몰랑이 인형 싸게 팝니다'} />
        <LeftText chatTxT={'12월 신제품 있나요?'} />
        <RightText chatTxT={'아뇨 다 팔렸습니다..'}/>
        <LeftText chatTxT={'그럼 다음에 사겠습니다'} />
        <ChatInputWrap>
          <img src={BaseImg} alt='럭킷이미지'/>
          <ChatInput />
        </ChatInputWrap>
      </ChatRoomWrap>
    </>
  );
};
