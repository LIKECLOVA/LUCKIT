import styled from 'styled-components'

export const MarketPostWrap = styled.div`

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
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

`

export const MarketPostTitle = styled.p`

    background-color: #EDF8E1;
    color: #457907;
    font-weight: 500;
    line-height: 22px;
    padding: 18px 25px 16px;
    border-radius: 30px;
    margin-bottom: 60px;


    strong {
    font-size: 18px;
    color: #457907;
    font-weight: 600;
    }
`

export const ListWrap = styled.ul`

    margin-top: 60px;
`

export const ListItem = styled.li`

    position: relative;
    margin-bottom: 70px;
    border-radius: 30px;
    box-shadow: 1px 1px 7px #DBDBDB;
`