import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const NavWrap = styled.nav`
  background-color: white;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 58px;
  /* border-top: 1px solid #ebebeb; */
  box-shadow: 0px 0px 3px 0px #d7d7d7;
  border-radius: 25px 25px 0 0;
  padding: 10px 0 8px;
  z-index: 50;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    cursor: pointer;
  }
`;

export const StyleNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    gap: 5px;
    
    color: #bdbcbc;

    ::before {
        content: '';
        display: block;
        width: 22px;
        height: 22px;
        
        ${(props) => {
          return css`
            background-image: url(${props.icon});
            background-size: 22px 22px;
            background-position: center;
          `;
        }}
        }

    &.active {
        color: ${palette.텍스트초록};

        ::before{
            ${(props) => {
              return css`
                background-image: url(${props.hovericon});
              `;
            }}
          }}
    }

    :hover {
        color: ${palette.텍스트초록};

        ::before {
            ${(props) => {
              return css`
                background-image: url(${props.hovericon});
              `;
            }}
        }

`;
