import styled from 'styled-components';
import closeBtn from '../../assets/icon/x.svg'


export const PostDetailWrap = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
`


const SnsPostModalWrap= styled.div`
  align-items: left;
    box-sizing: border-box;
    width: 95%;
    height: 95%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: flex;
    flex-direction: column;
    z-index: 20;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    overflow: hidden;
    .SnsContentWrap{
      box-shadow: 0px -15px 0 0px  #E2F2CE;
      border-radius:15px;
      margin-top: 2rem;
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