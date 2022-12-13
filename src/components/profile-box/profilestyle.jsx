import styled from 'styled-components';

export const MyProfileInfoBox = styled.div`
    margin-top: 90px;
    width: 100%;
    height:250px;
    background-color: lightblue;
    box-shadow: 0px -20px 0 0px  #D5EBBB;;
    border-radius:10px;
    .topmyInfoBox{
        display:flex;
        justify-content: space-between;
    }
    .leftMyInfoBox{
        display:flex;
        padding:20px;
        img{
            width: 150px;
            height: 150px;
        }
        h2{
            font-size:30px;
            margin: 10px 0px 0px 10px;
        }
        p{
            font-size:15px;
            margin-left: 15px;
        }
        span{
            display:inline-block;
            margin-top:20px;
            margin-left:20px;
        }

    }
    .rightInfoBox{
        button{
            margin:30px;
        }
    }

    .bottomInfoBox{
        margin-left:30px

    }
`