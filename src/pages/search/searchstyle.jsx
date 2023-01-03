import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const H2 = styled.h2`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const SearchMain = styled.main`
  margin-top: 55px;
  padding: 15px 12px 100px;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchListWrap = styled.ul`
  li {
    margin-bottom: 20px;
  }
`;

export const SnsProfileWrap = styled.div`
  display: flex;
`;

export const AuthorImgNavLink = styled(NavLink)`
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: top;
    border: 1px solid ${palette.연연회색};
  }
`;

export const AuthorNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchResult = styled.div`
  dispaly: flex;

  span {
    margin-right: 2px;
    font-size: 12px;
  }
`;

export const Div = styled.div`
  display: inline;

  ${({ type }) => {
    return type === 'username'
      ? css`
          font-size: 14px;
          margin-bottom: 4px;
          font-weight: 500;
        `
      : css`
          font-size: 12px;
        `;
  }};
`;

export const Span = styled.span`
  color: ${palette.텍스트초록};
`;

export const DefaultWrap = styled.div`
  padding-top: 10px;
  font-weight: 500;

  p {
    display: inline-block;
    color: #838383;
    margin-left: 5px;
    font-size: 14px;
  }

  span {
    font-size: 14px;
    background-color: #e5f3d3;
    padding: 10px 20px;
    border-radius: 20px;
    color: #539404;
  }

  .searchKeyword {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px 18px;

    li {
      color: #838383;
      background-color: #f1f1f1;
      padding: 8px 15px;
      font-size: 12px;
      border-radius: 20px;
    }
  }
`;

export const NoResultTxt = styled.p`
  padding-top: 10px;
  color: #838383;
  font-size: 14px;
`;
