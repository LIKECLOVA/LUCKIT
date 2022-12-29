import styled from 'styled-components';


export const ChatRoomWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #d5efd5;
`;

export const RightChatTxT = styled.div`
    padding:15px;
    display:flex;
    .imgwrap{
        width:70px;
        img{
            border-radius:50%;
            width: 100%;
        }
    }
    .txtwrap{
        padding:15px;
    }
    
`;
export const LeftChatTxT = styled.div`
    display:flex;
    flex-direction: row-reverse;
    padding:15px;
    height: 70px;
    div{
        display:flex;
        justify-content: flex-end;
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
    border:none;
    background-color: white;
    outline: none;
`