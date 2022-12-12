import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrap, NavList, NavListItem } from './navbarstyle'

export const NavBar = () => {
  return (
    <NavWrap>
	    <NavList>
        <NavListItem>
           <NavLink to='/'>홈</NavLink>
	      </NavListItem>
        <NavListItem>
           <NavLink to='/snspage'>SNS</NavLink>
	      </NavListItem>
        <NavListItem>
	         <NavLink to='/chatpage'>채팅</NavLink>
        </NavListItem>
        <NavListItem>
	        <NavLink to='/profilepage'>프로필</NavLink>
        </NavListItem>
      </NavList>
    </NavWrap>

  )
}
