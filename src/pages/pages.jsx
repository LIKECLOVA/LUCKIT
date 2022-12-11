import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginscreen';
import { Splash } from '../components/splash/splash.jsx';
import { Login } from '../components/login/login';
import { SnsUpload } from '../components/upload/snsupload';
import Home from './home/home.jsx';
import Error from './404-error/errorpage.jsx';
import SignInProfile from '../components/sign-in/signInProfile';
import { Search } from './search/Search';
import { Profile } from './profile/Profile';

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
      <Route path='/profilepage' element={<Profile/>}></Route>
      <Route path='/*' element={<Error />}></Route>
      <Route path='/snsupload' element={<SnsUpload />}></Route>
    </Routes>
  );
};

export default Pages;
