import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginScreen';
import { Splash } from '../components/splash/splash.jsx';
import { Login } from '../components/login/login';
import { Join } from '../components/join/join';
import Home from './home/home.jsx';
import JoinProfile from '../components/join/joinProfile';
import { Search } from './search/search';
import { MyProfile } from './profile/myProfile';
import { EditProfile } from './profile/editProfile';

import { YourFollow } from './follow/yourFollow';
import { MyFollow } from './follow/myFollow';
import { ChatPage } from './chat/chatPage';
import { ChatRoom } from './chat/chatRoom';

import { SnsUpload } from './sns/snsUpload';
import { SnsPage } from './sns/snsPage';
import { SnsPost } from '../components/sns-post/snsPost';

import { MarketUpload } from '../components/market-post/marketUpload/marketUpload';
import Error from './404-error/errorPage.jsx';

const Pages = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
};

const MainPages = () => {
  /* const [isLogin, setIsLogin] = useState(true);  */
  /* 로그인 토큰 자리 */
  const isLogin = true;

  return (
    <Routes>
      <Route path='/' element={isLogin ? <Home /> : <LoginScreen />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/join' element={<Join />}></Route>
      <Route path='/joinprofile' element={<JoinProfile />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/profile/:id' element={<MyProfile />}></Route>
      <Route path='/editprofile' element={<EditProfile />}></Route>
      <Route path='/chatpage' element={<ChatPage />}></Route>
      <Route path='/chatroom' element={<ChatRoom />}></Route>
      <Route path='/myfollow' element={<MyFollow />}></Route>
      <Route path='/yourfollow' element={<YourFollow />}></Route>
      <Route path='/snspage' element={<SnsPage />}></Route>
      <Route path='/snsupload' element={<SnsUpload />}></Route>
      <Route path='/loginScreen' element={<LoginScreen />}></Route>
      <Route path='/snspost/:postId' element={<SnsPost />}></Route>

      <Route path='/upload' element={<MarketUpload />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
