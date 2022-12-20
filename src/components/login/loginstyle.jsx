import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../../styles/global/globalColor';

export const Envelope = styled.main`
  @import url(//db.onlinewebfonts.com/c/298bfa6079855cc72b38f0cd35391e2f?family=Gmarket+Sans+TTF+Light);

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
    bottom: 1px;
    right: 50px;
  }
  .env {
    animation: envelope 2s;
    margin: 200px auto 0;
    background: #b7da8f;
    width: 500px;
    perspective: 3000px;
    perspective-origin: 50% 0;
    transform-style: preserve-3d;
    border-radius: 10px;
  }
  .openEnv .rest {
    width: 500px;
    height: 0;
    margin: 0 auto;
    border: 200px solid #c8e9a1;
    border-bottom: 150px solid #bede99;
    border-top: 150px solid transparent;
    margin-top: -300px;
    border-radius: 10px;
  }
  .env .content {
    width: 400px;
    margin-bottom: 500px;
    padding: 10px 20px;
    height: 650px;
    left: 25px;
    top: 5px;
    background: #f3fbe9;
    border: 1px solid #d7f4b4;
    box-shadow: 0px 1px 2px 0px #d7f4b4;
    border-radius: 20px;
    transition: all 0.5s ease;
    text-align: center;
    position: absolute;
    z-index: -5;
    margin-left: 25px;
    transform: translate(0, -480px);
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
    transform: rotateX(-180deg) scale(1.25, 1);
    z-index: -20;
  }

  @keyframes out {
    100% {
      transform: translate(0px, -480px);
      height: 650px;
    }
  }
  @keyframes envelope {
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

export const Gogo = styled.button`
  display: block;
  width: 270px;
  color: ${(props) => {
    return props.isActive === true ? 'white' : '#a4c16e';
  }};
  margin: 20px auto;
  padding: 12px;
  background-color: ${(props) => {
    return props.isActive === true ? '#78d00c' : '#b9d795;';
  }};
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;
  border: 1px solid #b9d795;
  cursor: ${(props) => {
    return props.isActive === true ? 'pointer' : 'not-allowed';
  }};
  &:hover {
    background-color: ${(props) => {
      return props.isActive === true ? '#47a902' : '#b9d795;';
    }};
  }
`;

/* 로그인하는 페이지 */

export const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  width: 270px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  :focus {
    border: 1px solid #78d00c;
    box-shadow: 0 1px 5px 0 ${palette.텍스트초록};
  }
`;

export const GoSignupLink = styled(Link)`
  font-size: 13px;
  color: ${palette.텍스트초록};
  text-decoration: none;
`;
