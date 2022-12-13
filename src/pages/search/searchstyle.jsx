import styled from 'styled-components';

export const SearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 48px;
  padding: 0 1.2rem 0 1.6rem;
  background-color: white;
  border-bottom: 1px solid #DBDBDB;
  z-index: 9999;

  input {
    width: 90%;
    border: none;
    background: #F2F2F2;
    border-radius: 32px;
    padding: 10px 15px;
    outline: none;
  }

  input::placeholder {
    color: #C4C4C4;
  }
`;

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