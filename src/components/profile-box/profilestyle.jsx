import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../../styles/global/globalColor'

export const MyProfileInfoBox = styled.div`
    margin: 80px 0 34px;
    width: 100%;
    height: 230px;
    padding: 20px;
    background-color: #FBFBFB;
    box-shadow: 0px -15px 0 0px #F0FAE4;
    border-radius: 30px;
    border: 1px solid #F2F2F2;

    .topmyInfoBox{
        display:flex;
        justify-content: space-between;
    }
    .leftMyInfoBox{
        display:flex;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }

        .profileCont {

            display: flex;
            flex-direction: column;
            padding: 20px;

            h2{
                font-size: 22px;
                font-weight: 500;
            }
            p{
                font-size:14px;
                margin-top: 8px;
            }
        }
        
        .followerCont {
            display: flex;
            align-items: center;
            margin-top: 15px;

            span {
                margin-right: 5px;
                font-size: 14px;
            }

            .followingTxt {
                margin-left: 16px;
            }

        }
        
    }

    .bottomInfoBox {
        margin-top: 26px;
        font-size: 14px;

        .btInfoTxt {
            margin-top: 8px;
            padding-top: 3px;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

`

export const FollowNavLink = styled(NavLink)`

    font-size: 18px;
    font-weight: 500;
`

export const EditProfileNavLink = styled(NavLink)`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 34px;
    background-color: ${palette.초록초록};
    color: white;
    border-radius: 30px;
    font-size: 14px;
    
`

export const IsFollowButton = styled.button`

    width: 75px;
    height: 34px;
    color: white;
    background-color: ${palette.초록초록};
    border-radius: 30px;
    font-size: 14px;

`