import styled from "styled-components"

export const FollowLi = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;
    button{
        width:71px;
        flex-shrink:0;
    }
    
`

export const FollowInfoWrap = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    img{
        width:110px;
        height:110px;
        object-fit: cover;
        border-radius:50%;
    }
    div p{
        margin-left:10px;
        margin-bottom:10px;
    }

  
`