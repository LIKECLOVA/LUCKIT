import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import { ChatPageUl, ChatPageWrap } from './chatpagestyle';
import ChatUser from './chatUser';
import molang from '../../assets/icon/몰랑이.png'
import kuromi from '../../assets/icon/쿠로미.png'
import dalmuti from '../../assets/icon/달무티.jpeg'




export const ChatPage = () => {
  return (
    <>
      <ProfileAndChatHeader />
      <ChatPageWrap>
        <ChatPageUl>
          <Link to='/chatroom'>
            <ChatUser id={'몰랑이'} chat={'그럼 다음에 사겠습니다'} img={molang} time={'2022-12-27'}/>
          </Link>
          <ChatUser id={'쿠로미'} chat={'일요일 오후 1시에 오시면 됩니다'} img={kuromi} time={'2022-12-25'}/>
          <ChatUser id={'만년농노'} chat={'달무티에 관심 있으세요?'} img={dalmuti} time={'2022-12-16'}/>
        </ChatPageUl>
      </ChatPageWrap>
    </>
  );
};
