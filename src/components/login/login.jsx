import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Envelope, Gogo, GoSignupLink, LoginForm, LoginInput, LoginWrap } from './loginstyle';

// - 로그인 버튼 클릭 시 login 함수 실행
// - axios! try,catch로 서버에 날리기

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ableToClick, setAbleToClick] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (email && password) {
      setAbleToClick(true);
    } else {
      setAbleToClick(false);
    }
  }, [email, password]);

  async function login() {
    if (ableToClick === true) {
      try {
        const res = await axios.post('https://mandarin.api.weniv.co.kr/user/login', {
          headers: {
            'Content-type': 'application/json',
          },
          user: {
            email,
            password,
          },
        });

        if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
        }
        // res.data에서 user.token을 받아 로컬스토리지에 Access Token 이름으로 저장
        else {
          setMessage('');
          localStorage.setItem('Access Token', res.data.user.token);
          localStorage.setItem('Account Name', res.data.user.accountname);
          navigate('/home');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

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
                  <LoginInput
                    type='text'
                    id='email'
                    name='email'
                    placeholder='이메일'
                    onChange={(e) => {
                      return setEmail(e.target.value);
                    }}
                  />
                  <LoginInput
                    type='password'
                    id='password'
                    name='password'
                    placeholder='비밀번호'
                    onChange={(e) => {
                      return setPassword(e.target.value);
                    }}
                  />
                  <span className='message'>{message}</span>
                </LoginWrap>
                <Gogo bg='#85CE2D' onClick={login} type='button' ableToClick={ableToClick}>
                  로그인
                </Gogo>
              </LoginForm>

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
