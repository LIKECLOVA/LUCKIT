import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
      -ms-overflow-style: none;
      ::-webkit-scrollbar{
        display: none;
      }
    height: 100%;

`

export const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavLinkStyle = styled(NavLink)`

      button {
        width: 180px;
        padding: 18px;
        background-color: #85CE2D;
        border-radius: 40px;
        color: white;
        margin: 26px 0 470px;
      }
`

export const HomeTxt = styled.p`

    margin-top: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: center;

`
// 게시글 있을 시

export const HomeSection = styled.section`

    h2 {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    .swal2-title {
        color: red;
      }
`

export const HomeTitle = styled.p`

background-color: #EDF8E1;
padding: 18px;
text-align: center;
border-radius: 30px;
color: #457907;
font-weight: 500;
`

export const ListWrap = styled.ul`

    margin-top: 60px;
`

export const ListItem = styled.li`

    margin-bottom: 70px;
    // border: 1px solid black;
    border-radius: 30px;
    box-shadow: 1px 1px 7px #DBDBDB;

    img {
        margin-top: -26px;
        width: 190px;
        height: 200px;
        flex-shrink: 0;
        vertical-align: top;
        border-radius: 30px;
        object-fit: cover;
        object-position: center;
    }

`

export const CardWrap = styled.div`

    display: flex;
    border-radius: 30px;
    box-shadow: 0px -10px 0 0px #EDF8E1;

`

export const CardCont = styled.div`

    position: relative; 
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    button {
        position: absolute;
        bottom: 20px;
        right: 20px;
        padding: 0;
        background-color: transparent;
        
        img {
            width: 60px;
            height: 60px;
            vertical-align: top;
        }
    }
    
`

export const CardTitle = styled.strong`

    width: 330px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

export const  CardTxt = styled.p`

    flex-shrink: 0;
    width: 250px;
    height: 60px;
    margin-top: 20px;
    overflow: hidden;
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    line-height: 20px;
   
`

export const  CardUser = styled.p`

    width: 250px;
    margin-top: 15px;
    font-size: 14px;
    line-height: 16px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
