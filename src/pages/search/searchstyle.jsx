import styled, {css} from 'styled-components';
import { palette } from '../../styles/global/globalColor';

export const SearchListWrap = styled.div`

  margin-top: 50px;
  padding: 15px;

  li {
    margin: 20px 0;
  }
`

export const SearchMain = styled.main`

  margin-top: 80px;
  font-weight: 500;
  padding: 15px;

  p {
    display: inline-block;
    color: #838383;
    margin-left: 5px;
  }
  
  span {
    background-color: #E5F3D3;
    padding: 10px 20px;
    border-radius: 20px;
    color: #539404;
  }

  .searchKeyword{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px 20px;
    
    li {
     color: #838383;
     background-color: #F1F1F1;
     padding: 8px 18px;
     font-size: 14px;
     border-radius: 20px;
   }
  }
`

export const NoResultWrap = styled.div`
  
  padding: 15px;
  color: #838383;

`

export const Span = styled.span`
  color: ${palette.텍스트초록};
`

export const Div = styled.div`
  display: inline;

  ${({ type }) => {
    return type === 'username'
      ? css`
          font-size: 14px;
          margin-bottom: 6px;
          font-weight: 500;
        `
      : css`
          font-size: 12px;
        `;
  }};

  `

  export const SearchResult = styled.div`

    dispaly: flex;

    span {
      margin-right: 2px;
      font-size: 12px;
    }
    
  `