import styled from 'styled-components'

export const MarketPostWrap = styled.section`
    margin: 70px 0;
    overflow: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar{
    display: none;
    }
    height: 100%;
    padding: 0 15px 90px;

    h2 {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
`

export const MarketPostTitle = styled.p`
    background-color: #EDF8E1;
    color: #457907;
    font-weight: 500;
    line-height: 20px;
    padding: 15px 20px 13px;
    border-radius: 25px;
    font-size: 14px;

    strong {
        font-size: 16px;
        color: #457907;
        font-weight: 600;
    }
`

export const ListWrap = styled.ul`
    margin-top: 50px;
`

export const ListItem = styled.li`
    position: relative;
    margin-bottom: 50px;
    border-radius: 30px;
    box-shadow: 1px 1px 7px #DBDBDB;
`