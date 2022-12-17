import styled from 'styled-components';

export const MyProfileInfoBox = styled.div`
    margin-top: 90px;
    width: 100%;
    height: 230px;
    padding: 20px;
    background-color: #FBFBFB;
    box-shadow: 0px -15px 0 0px pink;
    border-radius: 30px;
    .topmyInfoBox{
        display:flex;
        justify-content: space-between;
    }
    .leftMyInfoBox{
        display:flex;
        align-items: center;

        .profileCont {
            display: flex;
            flex-direction: column;
            padding: 12px;
        }
        img{
            width: 120px;
            height: 120px;
        }
        h2{
            font-size: 22px;
            font-weight: 500;
        }
        p{
            font-size:14px;
            margin-top: 8px;
        }
        span {
            display: inline-block;
            margin-top: 15px;
        }

        a + a {
            margin-left: 12px;
        }
    }

    .rightInfoBox {
        button {
            display: block;
            width: 80px;
            height: 35px;
            background-color: #85CE2D;
            color: white;
            border-radius: 30px;
        }
    }

    .bottomInfoBox {
        margin-top: 26px;

        .btInfoTxt {
            margin-top: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

`