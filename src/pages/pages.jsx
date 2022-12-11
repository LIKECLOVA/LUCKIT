import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginscreen';
import { Splash } from '../components/splash/splash.jsx';
import { Login } from '../components/login/login';
import Home from './home/home.jsx';
import Error from './404-error/errorpage.jsx';
import SignInProfile from '../components/sign-in/signInProfile';
import { Search } from './search/Search';
import { MyProfile } from './profile/myProfile';
import { YourProfile } from './profile/yourProfile';
import { EditProfile } from './profile/editProfile';
import {YourFollow} from './follow/yourfollow'
import {MyFollow} from './follow/MyFollow'
import { Chat } from '../pages/chat/chat';
import {ChatDetail} from './chat/chatdetail'
import {ChatPage} from './chat/chatpage'
import { SnsUpload } from './sns/snsupload';
import {SnsPage} from './sns/snspage'


const Pages = () => {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2400);
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
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/yourprofile' element={<YourProfile/>}></Route>
      <Route path='/myprofile' element={<MyProfile/>}></Route>
      <Route path='/editprofile' element={<EditProfile/>}></Route>
      <Route path='/chatpage' element={<ChatPage/>}></Route>
      <Route path='/chatdetail' element={<ChatDetail/>}></Route>
      <Route path='/signinprofile' element={<SignInProfile />}></Route>
      <Route path='/myfollow' element={<MyFollow />}></Route>
      <Route path='/yourfollow' element={<YourFollow />}></Route>
      <Route path='/snspage' element={<SnsPage />}></Route>
      <Route path='/snsupload' element={<SnsUpload />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
