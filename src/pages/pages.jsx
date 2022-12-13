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
import { YourProfile } from './profile/yourProfile';
import { EditProfile } from './profile/editProfile';
import {YourFollow} from './follow/yourFollow'
import {MyFollow} from './follow/myFollow'
import {ChatPage} from './chat/chatPage'
import {ChatDetail} from './chat/chatDetail'
import { SnsUpload } from './sns/snsUpload';
import {SnsPage} from './sns/snsPage'
import {SnsPost} from '../components/sns-post/snsPost';
import Error from './404-error/errorPage.jsx';


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
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/joinprofile' element={<JoinProfile />}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/yourprofile' element={<YourProfile/>}></Route>
      <Route path='/myprofile' element={<MyProfile/>}></Route>
      <Route path='/editprofile' element={<EditProfile/>}></Route>
      <Route path='/chatpage' element={<ChatPage/>}></Route>
      <Route path='/chatdetail' element={<ChatDetail/>}></Route>
      <Route path='/myfollow' element={<MyFollow />}></Route>
      <Route path='/yourfollow' element={<YourFollow />}></Route>
      <Route path='/snspage' element={<SnsPage />}></Route>
      <Route path='/snsupload' element={<SnsUpload />}></Route>
      <Route path='/snsPost' element={<SnsPost />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
