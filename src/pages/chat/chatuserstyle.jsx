import styled from 'styled-components';

export const ChatUserLi = styled.li`
  display: flex;
  justify-content: space-between;
  time {
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
    margin-bottom: 10px;
    font-size: 10px;
  }
`;

export const ChatInfoWrap = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 0.5px solid #eaeaea;
  }
  div {
    width: 140px;
    flex-grow: 1;
  }
  div p {
    padding-left: 10px;
    padding-bottom: 5px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }

  .userId {
    font-size: 16px;
  }
  .userChat {
    font-size: 14px;
    margin-top: 8px;
  }
`;
