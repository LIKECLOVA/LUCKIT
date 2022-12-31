import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { MapModal } from './mapModal';
import markImg from '../../assets/icon/marker-클로바-임시 복사.png';

const EventMarkerContainer = ({ modalClose, position, onClick, isClicked, title, location, img, page }) => {
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
      ></MapMarker>
      <CustomOverlayMap position={position}>
        <MapModal
          modalClose={modalClose}
          img={img}
          title={title}
          location={location}
          isClicked={isClicked}
          page={page}
        />
      </CustomOverlayMap>
    </>
  );
};

export default EventMarkerContainer;
