import styled from 'styled-components';

export const ChatUserLi = styled.li`
  display: flex;
  justify-content: space-between;
  time {
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
    margin-bottom: 30px;
  }
`;

export const ChatInfoWrap = styled.div`
  display: flex;
  align-items: center;
  div p {
    padding-top:10px;
    padding-left:10px;
    width:180px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
    word-break: break-all;
  }
`;
