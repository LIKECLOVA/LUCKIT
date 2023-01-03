import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ProfileAndChatHeader } from '../../components/header/header';
import { ChatList, ChatPageUl, ChatPageWrap } from './chatpagestyle';
import ChatUser from './chatUser';
import molang from '../../assets/icon/몰랑이.png';
import kuromi from '../../assets/icon/쿠로미.png';
import dalmuti from '../../assets/icon/달무티.jpeg';
import { NavBar } from '../../components/navbar/navBar';
import { NewChat, SecChat } from './chatuserstyle';

// 이미지 추가 작업

export const ChatPage = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>LUCKIT - 채팅 </title>
        <meta name='description' content='럭킷 채팅 페이지입니다. 럭킷메이트들과 대화를 나눠보세요!'/>
        </Helmet>
    </HelmetProvider>
      <ProfileAndChatHeader />
      <ChatPageWrap>
        <ChatPageUl>
          <Link to='/chatroom'>
            <ChatList>
              <ChatUser id={'몰랑이'} chat={'저도요 얼른 몰랑이들 만지고 싶..'} img={molang} time={'2022-12-27'} />
              <NewChat>3</NewChat>
            </ChatList>
          </Link>
          <ChatList>
            <ChatUser id={'쿠로미'} chat={'신난당 저희 일요일에 봐요!'} img={kuromi} time={'2022-12-15'} />
            <SecChat>2</SecChat>
          </ChatList>
          <ChatList>
            <ChatUser id={'만년농노'} chat={'달무티에 관심 있으세요?'} img={dalmuti} time={'2022-12-16'} />
          </ChatList>
        </ChatPageUl>
      </ChatPageWrap>
      <NavBar />
    </>
  );
};
