import styled from 'styled-components';
import { palette } from '../../../styles/global/globalColor';

export const PostIconBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 0px;
  background-color: #fff;
  span {
    font-size: 11px;
    color: ${palette.중간회색};
  }
`;
