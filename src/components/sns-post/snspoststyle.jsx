import styled from 'styled-components';
import closeBtn from '../../assets/icon/x.svg';
import { palette } from '../../styles/global/globalColor';

export const PostDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${palette.연중회색};
`;

const SnsPostModalWrap = styled.div`
  align-items: left;
  box-sizing: border-box;
  width: 95%;
  height: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 20;
  box-shadow: 0 1px 5px #c5c5c5;
  border-radius: 15px;
  overflow: hidden;
  .SnsContentWrap {
    box-shadow: 0px -15px 0 0px ${palette.연두색};
    border-radius: 15px;
    margin-top: 28px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .closeArt {
    position: absolute;
    z-index: 30;
    width: 100%;
    height: 24px;
    background-color: ${palette.연두색};
  }
`;

export { SnsPostModalWrap };

const CommentInp = styled.input`
  align-items: left;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  padding-top: 11px;
  background: ${palette.연두색};
  z-index: 10;
  border: none;
  border-top: 1px solid ${palette.연중회색};
`;

export { CommentInp };

export const CloseBtn = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  background: url(${closeBtn});
  background-size: cover;
  position: absolute;
  width: 12px;
  height: 12px;
  padding: 0px;
  right: 14px;
  top: 10px;
`;
