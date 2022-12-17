import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MyProfileWrap = styled.section`
    padding: 0 15px;
    overflow: scroll;
      -ms-overflow-style: none;
      ::-webkit-scrollbar{
        display: none;
      }
    height: 100%;
    
`

export const SnsPostBtn = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: -14px;
    margin-right: -14px;
    height: 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px -15px 0 0px #F5F4F4;
    border-bottom: 0.5px solid #DBDBDB;
    text-align: center;
  
    button {
        display: block;
        width: 32px;
        height: 32px;
        border: none;
        padding: 0;
        margin-right: 15px;
        background-color: transparent;

    }

    img {
      width: 100%;
      height: 100%;
    }
`

export const ImgAlbumBox = styled.ul`

    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
`

export const ImgAlbumList = styled.li`

    img {
      width: 178px;
      height: 178px;
}
`

export const NavLinkStyle = styled(NavLink)`
display: flex;

`