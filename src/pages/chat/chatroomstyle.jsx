import styled from 'styled-components';

export const ChatRoomWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LeftChatTxT = styled.div`
    padding:15px;
    display:flex;
    .imgwrap{
        width:70px;
        img{
            width: 100%;
        }
    }
    .txtwrap{
        background-color: #fff;
        width: 300px;
        margin-left: 30px;
        border-radius:20px;
        padding:15px;
    }
    
`;
export const RightChatTxT = styled.div`
    display:flex;
    flex-direction: row-reverse;
    padding:15px;
    div{
        display:flex;
        justify-content: flex-end;
        background-color: #fff;
        padding:15px;
        border-radius:20px;

    }
`;

export const ChatInputWrap = styled.div`
    position: relative;
    img{
        position: absolute;
        transform: translateY(-50%);
        top:50%;
        left:20px;
        width:50px;
    }
`

export const ChatInput = styled.input`
    width:100%;
    height:80px;
    padding:20px;
    padding-left: 90px;
`