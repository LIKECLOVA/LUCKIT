import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginscreen';
import { Splash } from '../components/splash/Splash.jsx';
import { Login } from '../components/login/login';
import Home2 from './home/Home2.jsx';
import Error from './404-error/errorpage.jsx';
<<<<<<< HEAD
import SignInProfile from '../components/sign-in/signInProfile';
=======
import { Search } from './search/Search';
import { Profile } from './profile/Profile';
>>>>>>> develop

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
      <Route path='/' element={isLogin ? <Home2 /> : <LoginScreen />}></Route>
      <Route path='/login' element={<Login/>}></Route>
<<<<<<< HEAD
=======
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/profilepage' element={<Profile/>}></Route>
>>>>>>> develop
      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
