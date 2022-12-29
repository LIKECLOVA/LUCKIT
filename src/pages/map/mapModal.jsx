import React from 'react';
import { MapDiv } from './stylemap';


export const MapModal = ({ modalClose,isClicked,title,location ,img, page}) => {
  

  return isClicked ? (
    <MapDiv>
      <div className='wrap'>
        <div className='info'>
          <div className='title'>
            {title}
            <div className='close' onClick={modalClose} title='닫기'></div>
          </div>
          <div className='body'>
            <div className='img'>
              <img
                src={img}
                width='73'
                height='70'
                alt='소모임대표이미지'
              />
            </div>
            <div className='desc'>
              <div className='ellipsis'>새로운 인연들이 기다리고 있어요!</div>
              <div className='jibun ellipsis'>{location}</div>
              <div>
                <a href={page} target='blank' className='link' rel='noreferrer'>
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
