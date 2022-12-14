import React from 'react'
import { NavWrap, StyleNavLink } from './navbarstyle'
import homeIcon from '../../assets/home-disabled.png'
import homeIconFill from '../../assets/home-클로바.png'
import snsIcon from '../../assets/document.png'
import snsIconFill from '../../assets/document-disabled.png'
import chatIcon from '../../assets/chat-disabled.png'
import chatIconFill from '../../assets/chat.png'
import profileIcon from '../../assets/profile-disabled.png'
import profileIconFill from '../../assets/profile.png'


export const NavBar = () => {
  return (
    <NavWrap>
	    <ul>
        <li>
          <StyleNavLink 
            to={'/'}
            icon={homeIcon}
            hoverIcon={homeIconFill}
            className={({isActive}) => {
              return (
                isActive ? 'active' : null  
              )
              }}>홈
            </StyleNavLink>
	      </li>
        <li>
          <StyleNavLink 
            to={'/snspage'} 
            icon={snsIcon}
            hoverIcon={snsIconFill}
            className={({isActive}) => {
              return (
                isActive ? 'active' : null  
              )
              }}>SNS
          </StyleNavLink>
	      </li>
        <li>
          <StyleNavLink 
            to={'/chatpage'} 
            icon={chatIcon}
            hoverIcon={chatIconFill}
            className={({isActive}) => {
              return (
                isActive ? 'active' : null  
              )
              }}>채팅
          </StyleNavLink>
	      </li>
        <li>
          <StyleNavLink 
            to={'/myprofile'} 
            icon={profileIcon}
            hoverIcon={profileIconFill}
            className={({isActive}) => {
              return (
                isActive ? 'active' : null  
              )
              }}>프로필
          </StyleNavLink>
	      </li>
      </ul>
    </NavWrap>
  )
}
