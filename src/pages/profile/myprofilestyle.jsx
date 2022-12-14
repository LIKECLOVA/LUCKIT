import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconLayers from '../../assets/icon/iccon-img-layers.png'
import { palette } from '../../styles/global/globalColor';

export const ProfileWrap = styled.main`
  padding: 0 12px;
  overflow: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar{
      display: none;
    }
  height: 100%;  
`

export const SnsPostBox = styled.section`
  h2 {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`

export const SnsPostBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -11px;
  margin-right: -11px;
  height: 42px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0px -8px 0 0px ${palette.연한회색};
  border-bottom: 0.5px solid ${palette.연중회색};
  padding: 0 12px;
`

export const ImgAlbumBox = styled.ul`
  margin: 15px 0 85px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const ImgAlbumList = styled.li`
  img {
    width: 113px;
    height: 113px;
    object-fit: cover;
    object-position: center;
  }
`

export const MultiImgLayers = styled.div`

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 22px;
    height: 22px;
    background-image: url(${IconLayers});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 99;
  }
`

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  position: relative;
`

export const SnsPostWrap = styled.li`
  margin: 15px 0 0px;
  position: relative;
`
