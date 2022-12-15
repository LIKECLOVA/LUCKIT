// import styled from 'styled-components';
import styled from "styled-components";
import { palette } from '../../styles/global/globalColor';

export const BasicHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 48px;
  z-index: 9999;

  img {
    width: 24px;
    height: 24px;
    vertical-align: top;
  }

  button {
    padding: 0;
    background-color: transparent;
  }
`

export const HomeHeaderWrap = styled(BasicHeader)`

  justify-content: flex-end;
  padding: 12px 16px;
 
`

export const SearchHeaderWrap = styled(BasicHeader)`

    padding: 8px 16px 8px 16px; 
    background-color: white;
    border-bottom: 1px solid #DBDBDB;

    input {
      width: 92%;
      border: none;
      background: #F2F2F2;
      border-radius: 35px;
      padding: 10px 15px;
      outline: none;
    }

    input::placeholder {
      color: ${palette.C4C4C4};
      font-size: 14px;
    }
`;

export const FeedHeaderWrap = styled(BasicHeader)`

padding: 12px 16px; 
background-color: white;
border-bottom: 1px solid #DBDBDB;

.logoImg {
  width: 100px;
  hegith: 22px;
}

`

export const ProfileHeaderWrap = styled(BasicHeader)`

padding: 12px 14px 12px 16px; 
background-color: white;
border-bottom: 1px solid #DBDBDB;

`


export const FollowHeaderWrap = styled(BasicHeader)`

justify-content: flex-start;
padding: 12px 16px; 
background-color: white;
border-bottom: 1px solid #DBDBDB;

strong {
  display: block;
  margin-left: 10px;
  font-size: 16px;
  font-family: arial;
}

`

export const EditAndUploadHeaderWrap = styled(BasicHeader)`

padding: 12px 14px 12px 16px; 
background-color: white;
border-bottom: 1px solid #DBDBDB;

button {
  background-color: ${palette.마이너스초록};
}

.backBtn {
  background-color: transparent;
}

`


export const ChatHeaderWrap = styled(BasicHeader)`

padding: 12px 14px 12px 16px; 
background-color: white;
border-bottom: 1px solid #DBDBDB;

strong {
  width: 33.3%;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

`