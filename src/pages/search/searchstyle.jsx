import styled from 'styled-components';

export const SearchMain = styled.main`

  margin: 80px 20px 20px;
  background-color: white;

  p {
    display: inline-block;
    color: #838383;
    margin-left: 5px;
  }
  
  span {
    background-color: #E5F3D3;
    padding: 10px 20px;
    border-radius: 15px;
    color: #539404;
  }

  .searchKeyword{
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px 20px;
  }
  .searchKeyword > span {
    color: #838383;
    background-color: #F1F1F1;
    padding: 8px 18px;
    font-size: 14px;
  }
`