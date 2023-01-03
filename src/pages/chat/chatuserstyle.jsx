import styled from 'styled-components';

export const ChatUserLi = styled.li`
  display: flex;
  justify-content: space-between;
  time {
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
    margin-bottom: 45px;
    margin-right: 15px;
    font-size: 5px;
    color: #b6b6b6;
    position: relative;
  }
`;

export const ChatInfoWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 70px;
  margin: 0 10px;

  flex-grow: 1;
  .userImg {
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    border: 0.5px solid #eaeaea;
  }

  .chatList {
    margin-top: 3px;
  }

  div p {
    padding-left: 10px;
    padding-bottom: 5px;
    font-size: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }

  .userId {
    font-size: 14px;
    line-height: 16px;
  }

  .userChat {
    font-size: 12px;
    line-height: 15px;
    margin-top: 8px;
    color: #969696;
  }
`;

export const NewChat = styled.div`
  position: absolute;
  background-color: #feaacc;
  border-radius: 20px;
  width: 23px;
  height: 15px;
  top: 100px;
  left: 342px;
  font-size: 10px;
  text-align: center;
  padding-top: 4px;
  color: white;
`;

export const SecChat = styled.div`
  position: absolute;
  background-color: #feaacc;
  border-radius: 20px;
  width: 23px;
  height: 15px;
  top: 180px;
  left: 342px;
  font-size: 10px;
  text-align: center;
  padding-top: 4px;
  color: white;
`;
