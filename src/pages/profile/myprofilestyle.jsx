import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileWrap = styled.section`

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
    justify-content: space-between;
    align-items: center;
    margin-left: -14px;
    margin-right: -14px;
    height: 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px -15px 0 0px #F5F4F4;
    border-bottom: 0.5px solid #DBDBDB;
    padding: 0 15px;

    div {
      display: flex;
      align-items: center;
    }
  
    button {
        width: 1.7rem;
        height: 1.7rem;
        border: none;
        padding: 0;
        background-color: transparent;
    }

    button + button {
      margin-left: 10px;
    }

    button > img {
      width: 100%;
      height: 100%;
    }

`

export const ImgAlbumBox = styled.ul`

    margin: 15px 0 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
`

export const ImgAlbumList = styled.li`

    img {
      width: 178px;
      height: 178px;
      object-fit: cover;
      object-position: center;
}
`

export const NavLinkStyle = styled(NavLink)`

  display: flex;

`

/* sns 게시글 design*/

export const SnsPostWrap = styled.li`

  margin: 15px 0 35px;
  position: relative;

  `
export const SnsProfileWrap = styled.div`

  display: flex;
`
export const AuthorImgNavLink = styled(NavLink)`
  
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: top;
      border: 0.5px solid #DBDBDB;
    }

  `

export const AuthorNavLink = styled(NavLink)`

    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 12px;
    }
    
`

  export const ImgListDiv = styled.div`

  img {
    width: 510px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    border: 1px solid #DBDBDB;
    vertical-align: top;
  }

`

export const MoreBtnWrap = styled.div`

  position: absolute;
  right: 0;
  top: 11px;
`

// 게시글 더보기 버튼 임시

export const MoreBtn = styled.button`

  padding: 0;
  background-color: transparent;

  img {
    width: 28px;
    height: 28px;
    vertical-align: top;
  }
`