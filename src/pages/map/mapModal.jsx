/* eslint-disable */
import React, { useState } from 'react';
import { MapDiv } from './stylemap';


export const MapModal = ({isClicked,title,location , img}) => {


  const check = () => {
    setcccc(false)
  };
const [cccc, setcccc] = useState(isClicked);
  

  return cccc ? (
    <MapDiv>
      <div className='wrap'>
        <div className='info'>
          <div className='title'>
            {title}
            <div className='close' onClick={check} title='닫기'></div>
          </div>
          <div className='body'>
            <div className='img'>
              <img
                src={img}
                width='73'
                height='70'
                alt='카카오 스페이스닷원'
              />
            </div>
            <div className='desc'>
              <div className='ellipsis'>새로운 인연들이 기다리고 있어요!</div>
              <div className='jibun ellipsis'>{location}</div>
              <div>
                <a href='https://www.kakaocorp.com/main' target='_blank' className='link' rel='noreferrer'>
                  홈페이지
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MapDiv>
  ) : null;
};
