import React from 'react';
import { NavWrap, StyleNavLink } from './navbarstyle';
import homeIcon from '../../assets/icon/home-disabled.png';
import homeIconFill from '../../assets/icon/home-클로바.png';
import snsIcon from '../../assets/icon/document.png';
import snsIconFill from '../../assets/icon/document-disabled.png';
import chatIcon from '../../assets/icon/chat-disabled.png';
import chatIconFill from '../../assets/icon/chat.png';
import profileIcon from '../../assets/icon/profile-disabled.png';
import profileIconFill from '../../assets/icon/profile.png';
import locator from '../../assets/icon/locator-disabled.png';
import locatorFill from '../../assets/icon/locator.png';

export const NavBar = () => {
  const myAccountName = localStorage.getItem('Account Name');

  return (
    <NavWrap>
      <ul>
        <li>
          <StyleNavLink
            to={'/home'}
            icon={homeIcon}
            hovericon={homeIconFill}
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}
          >
            홈
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink
            to={'/snspage'}
            icon={snsIcon}
            hovericon={snsIconFill}
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}
          >
            SNS
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink
            to={'/map'}
            icon={locator}
            hovericon={locatorFill}
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}
          >
            럭킷스팟
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink
            to={'/chatpage'}
            icon={chatIcon}
            hovericon={chatIconFill}
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}
          >
            채팅
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink
            to={`/profile/${myAccountName}`}
            icon={profileIcon}
            hovericon={profileIconFill}
            className={({ isActive }) => {
              return isActive ? 'active' : null;
            }}
          >
            프로필
          </StyleNavLink>
        </li>
      </ul>
    </NavWrap>
  );
};
