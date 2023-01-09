import styled from 'styled-components';
import screenLogo from '../../assets/loginScreen-logo.png';

export const Envelope = styled.main`
  @import url('https://db.onlinewebfonts.com/c/298bfa6079855cc72b38f0cd35391e2f?family=Gmarket+Sans+TTF+Light');

  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .envbox {
    display: inline-block;
    position: absolute;
    bottom: -1px;
    width: 100%;
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
    border: 168px solid #c8e9a1;
    border-bottom: 120px solid #bede99;
    border-top: 120px solid transparent;
    margin-top: -300px;
    border-radius: 10px;
    position: relative;
  }
  .env .content {
    width: 95%;
    margin-bottom: 500px;
    padding: 20px;
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
    .title {
      font-size: 20px;
      color: #559705;
      margin-top: 130px;
      margin-bottom: 50px;
      & font {
        font-family: 'TmoneyRoundWindExtraBold';
      }
    }

    .message {
      font-size: 12px;
      color: red;
      margin-bottom: 10px;
    }

    .joinMessage {
      display: inline-block;
      font-size: 12px;
      color: #a9a9a9;
      margin-right: 5px;
    }
  }

  .env .top {
    display: block;
    width: 0;
    height: 0;
    top: 5px;
    right: 8px;
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
  }

  .env .openEnv label.top {
    animation: labeltop 1s ease forwards 1 0.5s;
    animation-delay: 1.2s;
  }
  .env .openEnv .content {
    animation: out 1s ease forwards 1 0.5s;
    animation-delay: 2s;
  }
  @keyframes out {
    100% {
      transform: translate(0px, -560px);
      height: 650px;
    }
  }
  @keyframes envelope {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
      transform: scale(1, 1) translate(0px, 0px);
    }
  }
  @keyframes labeltop {
    100% {
      transform: rotateX(-180deg) scale(1.25, 1);
      z-index: -20;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 55%;
  background: url(${screenLogo}) no-repeat;
  background-size: contain;
`;
