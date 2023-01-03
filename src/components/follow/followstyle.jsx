import styled from 'styled-components';

export const FollowLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 71px;
    flex-shrink: 0;
  }
`;

export const FollowInfoWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
  div{
    flex-grow:1;
    width:160px;
  }
  div p {
    margin-left: 10px;
  }

  .userAccount {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .userIntro {
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
