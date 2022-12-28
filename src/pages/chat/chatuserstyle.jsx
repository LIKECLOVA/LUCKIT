import styled from 'styled-components';

export const ChatUserLi = styled.li`
  display: flex;
  justify-content: space-between;
  time {
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
    margin-bottom: 10px;
  }
`;

export const ChatInfoWrap = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
  }
  div p {
    // flex-grow:1;
    padding-left:10px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
    word-break: break-all;
  }

  .userId{
    font-size: 16px;
  }

  .userChat{
    font-size: 14px;
    margin-top: 14px;
  }
`;
