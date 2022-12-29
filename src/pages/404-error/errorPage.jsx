import React from 'react';
import styled from 'styled-components';
import notFound from '../../assets/notFound.png';
import { ProfileAndChatHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';

export const Error = () => {
  return (
    <>
      <ProfileAndChatHeader />
      <NotFound />;
      <NavBar />;
    </>
  );
};

export const NotFound = styled.div`
  width: 90%;
  height: 100%;
  margin: 250px auto;
  background: url(${notFound}) no-repeat;
  background-size: contain;
  z-index: 1000;
  animation-delay: 0.5s;
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
export default Error;
