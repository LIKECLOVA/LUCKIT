import styled from 'styled-components';
import closeBtn from '../../assets/icon/x.svg'

const SnsPostModalWrap= styled.div`
  align-items: left;
    box-sizing: border-box;
    width: 95%;
    height: 95%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #E2F2CE;
    display: flex;
    flex-direction: column;
    z-index: 20;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
    .SnsContentWrap{
    overflow: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
    }
    .closeArt{
      position: absolute;
      z-index: 30;
      width: 100%;
      height: 1.9rem;
      background-color: #E2F2CE;
    }
`;

export { SnsPostModalWrap }


const CommentInp= styled.input`
  align-items: left;
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    padding-top: 11px;
    background: #E2F2CE;
    z-index: 10;
    border: none;
    border-top: 1px solid #DBDBDB;
`;

export { CommentInp }

export const CloseBtn= styled.button`
    box-sizing: border-box;
    cursor: pointer;
    background: url(${closeBtn});
    background-size: cover;
    position: absolute;
    width: 1rem;
    height: 1rem;
    padding: 0px;
    right: 10px;
    top: 10px;
`;

export const SnsContentWrap= styled.div`
  display: flex;
  flex-direction: column;
  z-index: 90;

  
  border-radius: 8px;
`;