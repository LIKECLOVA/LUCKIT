import { Map } from 'react-kakao-maps-sdk';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ProfileAndChatHeader } from '../../components/header/header';
import { positions } from './markPosition';
import EventMarkerContainer from './eventMarker';
import { NavBar } from '../../components/navbar/navBar';

const RecommendMap = () => {
  const [selectedMarker, setSeleteMarker] = useState();

  return (
    <>
        <Helmet>
          <title>LUCKIT - 럭킷스팟 지도</title>
          <meta name='description' content='럭킷 모임장소 조회페이지 입니다. 럭킷들과의 만남 장소를 찾아보세요! ' />
        </Helmet>
      <ProfileAndChatHeader />
      <Map // 지도를 표시할 Container
        id={`map`}
        center={{
          // 지도의 중심좌표
          lat: 37.53010411981915,
          lng: 127.06016522021459,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={8} // 지도의 확대 레벨
      >
        {positions.map((v, index) => {
          return (
              <EventMarkerContainer
                key={v.id}
                onClick={ ()=> {setSeleteMarker(v.id) } }
                isClicked={selectedMarker === index}
                position={v.latlng}
                title ={v.title}
                location ={v.location}
                img ={v.img}
                page={v.page}
                modalClose={()=>{setSeleteMarker(false)}}
              />
          );
        })}
      </Map>
      <NavBar />
    </>
  );
};

export default RecommendMap;
