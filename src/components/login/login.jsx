import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Envelope, Gogo, GoSignupLink, LoginForm, LoginWrap } from './loginstyle';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Envelope>
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='content'>
              <p className='title'>로그인</p>
              <LoginForm>
                <LoginWrap>
                  <input type='text' id='email' name='email' placeholder='이메일' />
                  <input type='password' id='password' name='password' placeholder='비밀번호' />
                  <span className='message'>이메일 또는 비밀번호를 다시 한 번 확인해주세요.</span>
                </LoginWrap>
              </LoginForm>

              <Gogo
                bg='#85CE2D'
                onClick={() => {
                  return navigate('/login');
                }}
              >
                로그인
              </Gogo>
              <span className='joinMessage'>앗! 아직 럭킷메이트가 아니신가요?</span>
              <GoSignupLink to={'/join'}>회원가입</GoSignupLink>
            </div>
            <div className='rest'></div>
          </div>
        </div>
      </section>
    </Envelope>
  );
};
