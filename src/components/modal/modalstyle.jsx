import styled from "styled-components";

export const ModalWrap = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 252px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid black;
    /* border는 시각적 구분 위해 임시로 지정*/

    strong {
        display: inline-block;
        text-align: center;
        width: 100%;
        font-weight: 500;
        line-height: 20px;
        padding: 24px;
    }

`

export const ModalBtnWrap = styled.div`

    border-top: 0.5px solid #DBDBDB;
    width: 100%;
    
    button {
        dispaly: block;
        width: 50%;
        background-color: white;
        padding: 15px;
        font-weight: 500;
    }

    button + button {
        border-left: 0.5px solid #DBDBDB;
        color: #64B603;
    }

`

// 아래 슬라이드처럼 나타나는 모달

export const PostModalWrap = styled.div`

    position: fixed;
    bottom: 0;
    z-index: 99999;
    left: 0;
    right: 0;
    padding: 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid black;
    /* border는 시각적 구분 위해 임시로 지정 */

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background-color: #DBDBDB;
        border-radius: 5px;
        
    }

`

export const PostModalBtnWrap = styled.div`

    margin-top: 16px;

    button {
        display: block;
        padding: 14px 10px;
        width: 100%;
        text-align: start;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        background-color: white;
    }
`