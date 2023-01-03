import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ChatRoomHeader } from '../../components/header/header';
import { ChatRoomWrap, LeftChatTxT, RightChatTxT, ChatInput, ChatInputWrap } from './chatroomstyle';
import kuromi from '../../assets/icon/쿠로미.png';
import BaseImg from '../../assets/icon/addBtn2.png';

export const ChatRoomSec = () => {
  const LeftText = ({ chatTxT }) => {
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>LUCKIT - 쿠로미님과의 채팅 </title>
            <meta name='description' content='럭킷 채팅 페이지입니다. 럭킷메이트들과 대화를 나눠보세요!' />
          </Helmet>
        </HelmetProvider>
        <LeftChatTxT>
          <div className='imgwrap'>
            <img src={kuromi} alt='유저이미지' />
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
        <ChatRoomHeader nickName={'쿠로미'} />
        <LeftText chatTxT={'럭킷 매칭 신청하신 거 보고 연락드렸어요! 쿠로미 좋아하시는 분이라니,, 넘 반가워요!'} />
        <RightText chatTxT={'안녕하세요! 저도 너무 반가워요! 쿠로미 최고,, 🖤 '} />
        <LeftText
          chatTxT={'아! 일본 여행 메이트 신청글 봤는데, 혹시 퓨로랜드 가보셨어요?? 도쿄에 있는 퓨로랜드요! ㅎㅎ'}
        />
        <RightText chatTxT={'아쉽게도 아직 안 가봤답니다 ㅜㅜ 가보고 싶어요!!'} />
        <LeftText chatTxT={'그럼 저랑 3월에 퓨로랜드 가실래요?! 💗 쿠로미 천국이라던데 ㅎㅎㅎ'} />
        <RightText chatTxT={'헐!! 진짜요!!?? 저야 너무 좋죠!! 🖤💗'} />
        <LeftText chatTxT={'꺄 저도 넘 좋아요 ㅎㅎ 혹시 비행기 표는 알아보셨어요?? 지금 바로 알아볼까 해서용 ㅋㅋ'} />
        <ChatInputWrap>
          <img src={BaseImg} alt='럭킷이미지' />
          <p>아! 알아보긴 했어요!! 김포공항-하네다 로요!!</p>
          <button type='button'>전송</button>
          <ChatInput />
        </ChatInputWrap>
      </ChatRoomWrap>
    </>
  );
};
