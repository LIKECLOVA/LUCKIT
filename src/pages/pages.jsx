import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Splash } from '../components/splash/splash.jsx';
import { Login } from '../components/login/login';
import { Join } from '../components/join/join';
import { Home } from './home/home.jsx';
import JoinProfile from '../components/join/joinProfile';
import { Search } from './search/search';
import { Profile } from './profile/myProfile';
import { EditProfile } from './profile/editProfile';
import { LoginScreen } from '../components/login/loginScreen.jsx';

import { YourFollow } from './follow/yourFollow';
import { MyFollow } from './follow/myFollow';
import { ChatPage } from './chat/chatPage';
import { ChatRoom } from './chat/chatRoom';

import { SnsUpload } from './sns/snsUpload';
import { SnsPage } from './sns/snsPage';
import { SnsPost } from '../components/sns-post/snsPost';
import { SnsModify } from '../pages/sns/snsModify';

import { MarketPost } from './market/marketPost.jsx';
import { MarketUpload } from '../components/market-post/marketUpload/marketUpload';
import { MarketUpdate } from '../components/market-post/marketUpdate/marketUpdate';
import RecommendMap from './map/map.jsx';
import {Error} from './404-error/errorPage.jsx';
import { PrivateRoute, PublicRoute } from '../Route';
import Start from './start/start.jsx';

const Pages = () => {
  const [loading, setLoading] = useState(false);
  const token = !!localStorage.getItem('Access Token');

  useEffect(() => {
    if (window.location.pathname === '/' && !token) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else if (window.location.pathname === '/' && token) {
      setLoading(false);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
};

const MainPages = () => {
  return (
    <Routes>
      <Route path='/upload' element={<MarketUpload />}></Route>
      <Route path='/update/:productId' element={<MarketUpdate />}></Route>
      <Route path='/splash' element={<Splash />}></Route>
      <Route path='/loginScreen' element={<LoginScreen />}></Route>

      {/* PublicRoute */}
      <Route path='/' element={<Start />}></Route>
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      ></Route>
      <Route
        path='/join'
        element={
          <PublicRoute>
            <Join />
          </PublicRoute>
        }
      ></Route>
      <Route
        path='/joinprofile'
        element={
          <PublicRoute>
            <JoinProfile />
          </PublicRoute>
        }
      ></Route>

      {/* PrivateRoute */}
      <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/search'
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/profile/:id'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/editprofile'
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/chatpage'
        element={
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/chatroom'
        element={
          <PrivateRoute>
            <ChatRoom />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/myfollow'
        element={
          <PrivateRoute>
            <MyFollow />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/yourfollow'
        element={
          <PrivateRoute>
            <YourFollow />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/snspage'
        element={
          <PrivateRoute>
            <SnsPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/snsupload'
        element={
          <PrivateRoute>
            <SnsUpload />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/snsmodify'
        element={
          <PrivateRoute>
            <SnsModify />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/snspost/:postId'
        element={
          <PrivateRoute>
            <SnsPost />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/upload'
        element={
          <PrivateRoute>
            <MarketUpload />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/marketpost/:id'
        element={
          <PrivateRoute>
            <MarketPost />
          </PrivateRoute>
        }
      ></Route>
       <Route
        path='/map'
        element={
          <PrivateRoute>
            <RecommendMap/>
          </PrivateRoute>
        }
      ></Route>

      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
