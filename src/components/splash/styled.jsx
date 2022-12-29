import styled from 'styled-components';
import splashLogo from '../../assets/splash.png';

export const Envelope = styled.main`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .envbox {
    display: inline-block;
    position: absolute;
    bottom: 100px;
    width: 98%;
    left: 1%;
    animation: tada;
    animation-delay: 1s;
  }
  .env {
    animation: envelope 2s;
    margin: 200px auto 0;
    background: #b7da8f;
    width: 100%;
    perspective: 3000px;
    perspective-origin: 50% 0;
    transform-style: preserve-3d;
    border-radius: 10px;
    position: relative;
  }
  .openEnv .rest {
    width: 100%;
    height: 0;
    margin: 0 auto;
    border: 188px solid #c8e9a1;
    border-bottom: 150px solid #bede99;
    border-top: 150px solid transparent;
    margin-top: -300px;
    border-radius: 10px;
    position: relative;
  }
  .env .content {
    width: 95%;
    margin-bottom: 500px;
    padding: 10px 20px;
    height: 90vmax;
    right: 10px;
    top: 45px;
    background: #f3fbe9;
    border: 1px solid #d7f4b4;
    box-shadow: 0px 1px 2px 0px #d7f4b4;
    border-radius: 20px;
    transition: all 0.5s ease;
    text-align: center;
    position: absolute;
    z-index: -5;
    margin-left: 25px;
    transform: translate(0, 0);
    animation-delay: 2s;
    p {
      font-size: 20px;
      font-family: 'TmoneyRoundWindExtraBold';
      color: #475a24;
      margin-bottom: 50px;
      & font {
        font-family: 'TmoneyRoundWindExtraBold';
      }
    }

    span {
      color: #1e9c21;
    }
  }
  /* .env .top {
    display: block;
    width: 0;
    height: 0;
    top: 5px;
    border: 200px solid transparent;
    border-top-color: #b7da8f;
    margin: 0 auto;
    transform: scale(1.25, 1);
    margin-bottom: -397px;
    cursor: pointer;
    transition: all 0.5s ease;
    transform-origin: 50% 0;
    position: relative;
    border-radius: 10px;
  } */
`;

export const Logo = styled.div`
  position: absolute;
  margin-top: 30%;
  margin-left: 13%;
  width: 100%;
  height: 50%;
  background: url(${splashLogo}) no-repeat;
  background-size: contain;
  z-index: 1000;
  animation: bounce 1.5s infinite;

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
`;
