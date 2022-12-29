import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
    position: absolute;
    inset: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
`

export const ModalWrap = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 232px;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    z-index: 9999;

    strong {
        display: inline-block;
        text-align: center;
        width: 100%;
        font-weight: 500;
        line-height: 20px;
        padding: 24px;
        font-size: 14px;
    }
`

export const ModalBtnWrap = styled.div`
    border-top: 0.5px solid #DBDBDB;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    
    button {
        width: 50%;
        background-color: white;
        padding: 15px;
        font-size: 12px;
        font-weight: 500;     
    }

    button + button {
        border-left: 0.5px solid #DBDBDB;
        color: #64B603;
    }

`

export const ModalNavLink = styled(NavLink)`   
    text-align: center;
    width: 50%;
    background-color: white;
    padding: 15px;
    font-weight: 500;
    border-left: 0.5px solid #DBDBDB;
    color: #64B603;
`

// 아래 슬라이드처럼 나타나는 모달

export const PostModalWrap = styled.div`
    @keyframes slideIn {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0%);
        }
    }

    z-index: 99;
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.3);
    
    .postModalList {
        width: 100%;
        padding: 20px 16px 10px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: white;
        animation: slideIn 0.3s;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 55px;
            height: 3px;
            background-color: #DBDBDB;
            border-radius: 5px;    
        }
    }
`

export const PostModalBtnWrap = styled.div`
    margin-top: 16px;
    z-index: 99;

    button {
        display: block;
        padding: 10px;
        width: 100%;
        text-align: start;
        line-height: 18px;
        font-size: 14px;
        background-color: white;
    }
`

export const NavLinkStyle = styled(NavLink)`
    display: block;
    padding: 10px;
    width: 100%;
    font-size: 14px;
    text-align: start;
    line-height: 18px;
    background-color: white;
`