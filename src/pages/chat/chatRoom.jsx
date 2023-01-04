import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChatRoomHeader } from '../../components/header/header';
import { ChatRoomWrap, LeftChatTxT, RightChatTxT, ChatInput, ChatInputWrap } from './chatroomstyle';
import molang from '../../assets/icon/몰랑이.png';
import BaseImg from '../../assets/icon/addBtn2.png';

export const ChatRoom = () => {
  const LeftText = ({ chatTxT }) => {
    return (
      <>
          <Helmet>
            <title>LUCKIT - 몰랑이님과의 채팅 </title>
            <meta name='description' content='럭킷 채팅 페이지입니다. 럭킷메이트들과 대화를 나눠보세요!' />
          </Helmet>
        <LeftChatTxT>
          <div className='imgwrap'>
            <img src={molang} alt='유저이미지' />
          </div>
          <div className='txtwrap'>{chatTxT}</div>
        </LeftChatTxT>
      </>
    );
  };

  const RightText = ({ chatTxT }) => {
    return (
      <RightChatTxT>
        <div className='txtWrap'>{chatTxT}</div>
      </RightChatTxT>
    );
  };

  return (
    <>
      <ChatRoomWrap>
        <ChatRoomHeader nickName={'몰랑이'} />
        <LeftText chatTxT={'럭킷 매칭 신청하신 거 보고 연락드려요! ㅎㅎ 몰랑이 팝업 스토어 같이 가실래용?'} />
        <RightText chatTxT={'안녕하세요! 너무 좋아요! ㅎㅎ'} />
        <LeftText chatTxT={'그러면 내일 5시 어떠세요!? 더현대 지하 1층 팝업존 앞에서 봬요!'} />
        <RightText chatTxT={'죠습니다! 낼 봬용!'} />
        <LeftText chatTxT={'팝업에서 뭐 사실 거예요?? ㅎㅎ 저희 옆에 카페 가서 같이 언박싱 해용!'} />
        <RightText chatTxT={'생각만 해도 너무 설레네요..💗'} />
        <LeftText chatTxT={'저도요 얼른 몰랑이들 만지고 싶어요 ㅎㅎㅎ 내일 봬요! 굿밤! 💗💗'} />
        <ChatInputWrap>
          <img src={BaseImg} alt='럭킷이미지' />
          <p>안녕하세요! 저 팝업존 앞이에요!</p>
          <button type='button'>전송</button>
          <ChatInput />
        </ChatInputWrap>
      </ChatRoomWrap>
    </>
  );
};
