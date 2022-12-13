import React from 'react';
import * as J from './joinstyle';

export const Join = () => {
  return (
    <J.Envelope>
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='content'>
              <p className='title'>회원가입</p>
              <J.LoginForm>
                <J.LoginWrap>
                  <input type='text' id='email' name='email' placeholder='이메일' />
                  <span className='message'>가입된 이메일입니다. 이미 럭킷 메이트이시군요!</span>
                  <input type='password' id='password' name='password' placeholder='비밀번호' />
                  <span className='message'>비밀번호는 6자 이상이어야 합니다.</span>
                </J.LoginWrap>
              </J.LoginForm>

              <J.Gogo bg='#85CE2D'>다음</J.Gogo>
            </div>
            <div className='rest'></div>
          </div>
        </div>
      </section>
    </J.Envelope>
  );
};
