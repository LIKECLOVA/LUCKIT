import React from 'react';
import { Envelope, Logo } from './styled';

export const Splash = () => {
  return (
    <Envelope>
      <Logo />
      <section className='envbox'>
        <div className='env'>
          <div className='openEnv'>
            <label className='top'></label>
            <div className='rest'></div>
          </div>
        </div>
      </section>
    </Envelope>
  );
};
