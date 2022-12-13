import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Envelope = styled.main`
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
    border-radius: 10px;
    transition: all 0.5s ease;
    text-align: center;
    position: absolute;
    z-index: -5;
    margin-left: 25px;
    transform: translate(0, -485px);
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
  width: 270px;
  color: ${(props) => {
    return props.bg === '#85CE2D' ? 'white' : '#475A24';
  }};
  margin: 10px 20px;
  padding: 12px;
  background-color: ${(props) => {
    return props.bg;
  }};
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0 1px 5px 0 #b9d795;
  border: 1px solid #b9d795;
  &:hover {
    background-color: #64b603;
    color: white;
    cursor: pointer;
  }
`;

/* 로그인하는 페이지 */

const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c8ec9c;
`;

export { LoginWrap };

const LoginTxt = styled.h1`
  font-size: 22px;
  line-height: 29px;
  color: #1e9c21;
  h1 {
    color: #475a24;
  }
`;

export { LoginTxt };

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    color: #000;
  }
  input {
    width: 32.2rem;
    line-height: 2.5rem;
    border: none;
    outline: none;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
    border-bottom: 0.1rem solid #000;
    :focus {
      border-bottom: 0.1rem solid #000;
    }
  }
`;

export { LoginForm };

const GoSignupLink = styled(Link)`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: #000;
  text-decoration: none;
`;

export { GoSignupLink };
