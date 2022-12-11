import React from 'react';
import { LoginWrap, LoginTxt, LoginForm, GoSignupLink } from './loginstyle';

export const Login = () => {
  return (
    <LoginWrap>
      <LoginTxt>로그인</LoginTxt>
      <LoginForm>
        <label>
          이메일
          <input type='email' />
        </label>
        <label>
          비밀번호
          <input type='password' />
        </label>
        <button>다음</button>
      </LoginForm>
      <GoSignupLink to='#'>
        이메일로 회원가입
      </GoSignupLink>
    </LoginWrap>
  );
};

