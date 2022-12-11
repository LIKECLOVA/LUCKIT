import styled from 'styled-components';
import { Link } from 'react-router-dom'

/* 로그인 스크린 페이지 */

const SplashWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c8ec9c;
`;

export { SplashWrap }

const LoginImg = styled.img`
  width: 463px;
  height: 300px;
  background-color: #000000;
`;

export { LoginImg }

const LoginScreenTxt = styled.strong`
  font-size: 22px;
  line-height: 29px;
  color: #1E9C21;
  span{
    color: #475A24;
  }
`;

export { LoginScreenTxt }


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

export { LoginWrap }

const LoginTxt = styled.h1`
font-size: 22px;
line-height: 29px;
color: #1E9C21;
h1{
  color: #475A24;
}
`;

export { LoginTxt }

const LoginForm = styled.form`
display: flex;
flex-direction: column;
 label {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color:#000;
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
    border-bottom: 0.1rem solid #000
    };
  };
`;

export { LoginForm }

const GoSignupLink =styled(Link)`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color:#000;
  text-decoration:none;
`;

export {GoSignupLink}