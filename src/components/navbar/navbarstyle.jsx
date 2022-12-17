import { NavLink } from 'react-router-dom';
import styled, { css } from "styled-components";
import {palette} from '../../styles/global/globalColor'

export const NavWrap = styled.nav`

    background-color: white;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 60px;
    border-top: 1px solid #DBDBDB;
    padding: 12px 0 8px;
    z-index: 99;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    li {
        cursor: pointer;
    }

`

export const StyleNavLink = styled(NavLink)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contnet: center;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    gap: 5px;

    ::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        
        ${(props) => {
        return css`
        background-image: url(${props.icon});
        background-size: 24px 24px;
        background-position: center;
        `}}
        }

    &.active {
        color: ${palette.텍스트초록};

        ::before{
            ${(props) => {
            return css`
              background-image: url(${props.hovericon});
            `}}
          }}
    }

    :hover {
        color: ${palette.텍스트초록};

        ::before {
            ${(props) => {
            return  css`
            background-image: url(${props.hovericon})
            `}}
        }
}

`