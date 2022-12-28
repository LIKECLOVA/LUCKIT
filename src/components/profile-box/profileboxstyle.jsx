import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor'

export const ProfileInfoWrap = styled.section`
    margin: 80px 0 25px;
    width: 100%;
    min-height: 170px;
    padding: 10px;
    background-color: #FBFBFB;
    box-shadow: 0px -12px 0 0px #F0FAE4;
    border-radius: 25px;
    border: 1px solid #F2F2F2;

    h2 {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }
`

export const TopInfoBox = styled.div`

    display: flex;
    justify-content: space-between;
`

export const ProfileInfoBox = styled.div`
    display:flex;
    align-items: center;

    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
`   

export const ProfileInfoCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 15px;

    h3{
        font-weight: 600;
    }

    p{
        font-size:12px;
        margin-top: 6px;
    }

`

export const FollowerCont = styled.div`
    display: flex;
    margin-top: 20px;

    span {
        margin-right: 4px;
        font-size: 12px;
        font-weight: 400;
    }

    .followingTxt {
        margin-left: 13px;
    }
}
`

export const FollowNavLink = styled(NavLink)`

    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

export const EditProfileNavLink = styled(NavLink)`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 30px;
    background-color: ${palette.초록초록};
    color: white;
    border-radius: 30px;
    font-size: 12px;
    
`

export const IsFollowButton = styled.button`

    width: 68px;
    height: 30px;
    border-radius: 30px;
    font-size: 12px;
    ${({ isFollow }) => {
        return isFollow
          ? css`
              background-color: white;
              border: 1px solid #DBDBDB;
              color: ${palette.내부텍스트};
            `
          : css`
              background-color: ${palette.초록초록};
              color: white;
            `;
      }};
`

export const BottomInfoBox = styled.div`
    margin-top: 20px;
    font-size: 12px;
    font-weight: 500;

    .btInfoTxt {
        margin-top: 6px;
        padding-top: 3px;
        font-size: 14px;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`