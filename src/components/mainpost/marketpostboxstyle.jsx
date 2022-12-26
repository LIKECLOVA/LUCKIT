import styled from 'styled-components';

export const CardWrap = styled.div`

    display: flex;
    border-radius: 30px;
    box-shadow: 0px -10px 0 0px #EDF8E1;

`

export const CardImg = styled.img`
    margin-top: -26px;
    width: 190px;
    height: 200px;
    flex-shrink: 0;
    vertical-align: top;
    border-radius: 30px;
    object-fit: cover;
    object-position: center;
    box-shadow: 0 0 3px 3px #F3F3F3;
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
    width: 290px;
    height: 60px;
    margin-top: 20px;
    overflow: hidden;
    word-wrap: break-word;
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