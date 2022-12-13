import styled from 'styled-components';

/* CommentBox 디자인 */

const CommentBoxWrap= styled.div`
  align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    position: relative;
    background: #FFF;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    z-index: 10;
    border-top:1px solid #DBDBDB;
`;

export { CommentBoxWrap }


/* CommentList 디자인*/

const CommentListWrap= styled.div`
  align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    background: #FFF;
    display: flex;
    flex-direction: column;
    z-index: 10;
    border-top:1px solid #DBDBDB;
`;

export { CommentListWrap }


/* CommentReply 댓글 한개 디자인 */

const CommentReplyWhap= styled.div`
  align-items: left;
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    position: relative;
    background: #FFF;
    display: flex;
    z-index: 10;
    margin-top:34px;
    :first-child{
        margin-top:18px;
    }
    img{
        margin: 0 20px;
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }
`;

export { CommentReplyWhap }

const CommentReplyAra= styled.div`
    align-items: left;
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding-top:12px;
    
    strong{
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
    }
    p{
        margin-top: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
`;

export { CommentReplyAra }