import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Envelope, Gogo } from './loginstyle';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Envelope>
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='content'>
              <p>
                널 만난 건 <span>행운</span>이야!
              </p>

              <Gogo
                bg='#fff'
                onClick={() => {
                  return navigate('/login');
                }}
              >
                이메일로 로그인
              </Gogo>
              <Gogo
                bg='#85CE2D'
                onClick={() => {
                  return navigate('/join');
                }}
              >
                30초 회원가입
              </Gogo>
            </div>
            <div className='rest'></div>
          </div>
        </div>
      </section>
    </Envelope>
  );
};
