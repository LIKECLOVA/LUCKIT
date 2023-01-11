import styled from "styled-components";

export const LoadingPageWrap = styled.div`
    height: 100%;
    background-color: #f3fbe9;
    position: relative;
`
export const LoadingSpinnerWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    img{
        display: inline-block;
    }
    #logo{
        width:100px;
        animation: bounce 1.5s infinite;
    }

    @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-20px);
    }
  }

`

