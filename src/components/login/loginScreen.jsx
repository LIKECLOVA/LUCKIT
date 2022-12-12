import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashWrap, LoginImg, LoginScreenTxt } from './loginstyle';

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <SplashWrap>
      <LoginImg />
      <LoginScreenTxt>
        널 만난건 <span>행운</span>입니다
      </LoginScreenTxt>
      <button
        onClick={() => {
          return navigate('/login');
        }}
      >
        로그인
      </button>
    </SplashWrap>
  );
};

export { LoginScreen };
