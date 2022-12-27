/* eslint-disable */
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { MapModal } from './mapModal';
import markImg from '../../assets/icon/mapMarker.png';
import { useState } from 'react';

const EventMarkerContainer = ({ position, onClick, isClicked,title,location ,img }) => {

   const [isOver, setIsOver] = useState(false);



  return (
    <>
      <MapMarker
        position={position} // 마커를 표시할 위치
        onClick={onClick}
        zIndex={-1}
        image={{
          src: markImg,
          size: {
            width: 30,
            height: 30,
          },
        }}
        // image={{
        //   src: SPRITE_MARKER_URL,
        //   size: {
        //     width: MARKER_WIDTH,
        //     height: MARKER_HEIGHT,
        //   },
        //   options: {
        //     offset: {
        //       x: OFFSET_X,
        //       y: OFFSET_Y,
        //     },
        //     spriteSize: {
        //       width: SPRITE_WIDTH,
        //       height: SPRITE_HEIGHT,
        //     },
        //     spriteOrigin: spriteOrigin,
        //   },
        // }}
      ></MapMarker>
      <CustomOverlayMap position={position}>
        <MapModal img={img} title={title} location={location} isClicked={isClicked} />
      </CustomOverlayMap>
    </>
  );
};

export default EventMarkerContainer;
