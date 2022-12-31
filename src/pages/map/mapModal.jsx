import React from 'react';
import { MapDiv } from './stylemap';

export const MapModal = ({ modalClose, isClicked, title, location, img, page }) => {
  return isClicked ? (
    <MapDiv>
      <div className='wrap'>
        <div className='info'>
          <div className='title'>
            2022 TOP 50 럭킷 스팟 🔥
            <div className='close' onClick={modalClose} title='닫기'></div>
          </div>
          <div className='body'>
            <div className='img'>
              <img src={img} width='110' height='75' alt='소모임대표이미지' className='preview' />
            </div>
            <div className='desc'>
              <div className='ellipsis'>{title}</div>
              <div className='jibun ellipsis'>{location}</div>
              <div>
                <a href={page} target='blank' className='link' rel='noreferrer'>
                  장소 자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MapDiv>
  ) : null;
};
