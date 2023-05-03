import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as J from './joinstyle';

export const Join = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [checkValidatedEmail, setCheckValidatedEmail] = useState(false);
  const [checkValidatedPassword, setCheckValidatedPassword] = useState(false);

  const onChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const gogo = checkValidatedEmail && checkValidatedPassword;

  // email input값이 달라질 때마다 유효성 검사
  useEffect(() => {
    const regexEmail =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!regexEmail.test(email) && email !== '') {
      setCheckValidatedEmail(false);
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
    } else if (email === '') {
      // 비어있을 경우 에러 메세지 출력 방지
      setCheckValidatedEmail(false);
      setEmailMessage('');
    } else {
      setCheckValidatedEmail(true);
      setEmailMessage('');
    }
  }, [email]);

  useEffect(() => {
    if (password.length < 6 && password !== '') {
      setPasswordMessage('비밀번호는 6자 이상이어야 합니다.');
      setCheckValidatedPassword(false);
    } else if (password === '') {
      setCheckValidatedPassword(false);
    } else {
      setPasswordMessage('');
      setCheckValidatedPassword(true);
    }
  }, [password]);

  // 다음 버튼 클릭 시
  const sendDatatoJoinProfile = async function (event) {
    event.preventDefault();
    const res = await axios.post('https://api.mandarin.weniv.co.kr/user/emailvalid', {
      user: {
        email,
      },
    });

    if (res.data.message === '사용 가능한 이메일 입니다.') {
      setCheckValidatedEmail(true);
      navigate('/joinprofile', {
        state: {
          email,
          password,
        },
      });
    } else if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
      setCheckValidatedEmail(false);
      setEmailMessage('가입된 이메일 주소입니다. 이미 럭킷 회원이시군요!');
    } else {
      setCheckValidatedEmail(false);
      alert('잘못된 접근입니다.');
    }
  };

  return (
    <J.Envelope>
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='content'>
              <J.JoinSection>
                <p className='title'>회원가입</p>
                <J.JoinForm>
                  <J.JoinWrap>
                    <J.JoinInput type='text' id='email' name='email' placeholder='이메일' onChange={onChange} />
                    <span className='message'>{emailMessage}</span>
                    <J.JoinInput
                      type='password'
                      id='password'
                      name='password'
                      placeholder='비밀번호'
                      onChange={onChange}
                    />
                    <span className='message'>{passwordMessage}</span>

                    {/* 유효성 검사 이메일, 비밀번호 중 하나라도 false 일 경우 Gogo버튼 disabled */}
                    <J.Gogo bg='#85CE2D' disabled={gogo ? null : 'disabled'} onClick={sendDatatoJoinProfile}>
                      다음
                    </J.Gogo>
                  </J.JoinWrap>
                </J.JoinForm>
              </J.JoinSection>
            </div>
            <div className='rest'></div>
          </div>
        </div>
      </section>
    </J.Envelope>
  );
};
