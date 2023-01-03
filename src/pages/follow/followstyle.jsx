import styled from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const FollowPageWrap = styled.div`
  margin: 60px 15px 0px;
  height: 100%;
  overflow: auto;
  padding-bottom: 80px;
  ::-webkit-scrollbar {
    display: none;
  }

  img {
    border: 0.5px solid ${palette.연연회색};
  }
`;

export const FollowPageUl = styled.ul`
  li {
    margin-bottom: 20px;
  }
`;
