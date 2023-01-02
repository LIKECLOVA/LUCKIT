import styled from 'styled-components';

export const ChatRoomWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  background: url('https://user-images.githubusercontent.com/102042383/210202710-f3b52572-bff5-48f9-a531-4d4ff419a620.png');
  background-size: cover;
`;

export const LeftChatTxT = styled.div`
  padding: 15px;
  margin-right: 20px;
  display: flex;

  .imgwrap {
    width: 50px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      box-shadow: 0px 2px 4px #e7e7e7;
    }
  }
  .txtwrap {
    padding: 10px;
    margin-left: 10px;
    background-color: #aee270;
    box-shadow: 0px 2px 4px #e7e7e7;
    border-radius: 0 15px 15px 15px;
    font-size: 12px;
    line-height: 25px;
  }
`;
export const RightChatTxT = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
  height: 70px;
  .txtWrap {
    display: flex;
    justify-content: flex-end;
      padding: 10px;
      margin-left: 10px;
      background-color: #fff;
      box-shadow: 0px 2px 4px #e7e7e7;
      border-radius: 15px 0 15px 15px;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export const ChatInputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    transform: translateY(-50%);
    top: 30px;
    left: 20px;
    width: 40px;
  }

  p {
    position: absolute;
    top: 23px;
    left: 70px;
    font-size: 12px;
  }

  button {
    position: absolute;
    top: 19px;
    right: 20px;
    font-size: 15px;
    border-radius: 20px;
    background-color: #fff;
    color: #c5c5c5;
  }
`;

export const ChatInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  padding-left: 90px;
  border: none;
  background-color: #fff;
  outline: none;
`;
