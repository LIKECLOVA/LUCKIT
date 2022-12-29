import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Envelope, Logo } from './logscreenstyle';

const Gogo = styled.button`
  width: 240px;
  color: ${(props) => {
    return props.bg === '#85CE2D' ? 'white' : '#475A24';
  }};
  margin: 10px 20px;
  padding: 14px;
  background-color: ${(props) => {
    return props.bg;
  }};
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;
  &:hover {
    background-color: #64b603;
    color: white;
    cursor: pointer;
  }
`;

export const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <Envelope>
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='content'>
              <Logo />
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
