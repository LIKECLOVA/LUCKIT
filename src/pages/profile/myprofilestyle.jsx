import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileWrap = styled.main`
  padding: 0 15px;
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
  margin-left: -14px;
  margin-right: -14px;
  height: 42px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0px -12px 0 0px #F5F4F4;
  border-bottom: 0.5px solid #DBDBDB;
  padding: 0 15px;

  .snsBtnWrap {
    display: flex;
    align-items: center;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
    background-color: transparent;
  }

  button + button {
    margin-left: 8px;
  }

  button > img {
    width: 100%;
    height: 100%;
  }
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

export const NavLinkStyle = styled(NavLink)`
  display: flex;
`

export const SnsPostWrap = styled.li`
  margin: 15px 0 0px;
  position: relative;
`
