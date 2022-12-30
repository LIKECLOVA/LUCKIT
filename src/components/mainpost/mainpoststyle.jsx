import styled from 'styled-components';

const MainSnsPostWhap= styled.div`
    position: relative;
    align-items:top;
    box-sizing: border-box;
    padding: 1rem 0rem;
    width: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    border-top-right-radius:15px;
    border-top-left-radius: 15px;
    overflow: hidden;
    color: #000;
    .snsImgList {
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
    height: 1.4rem;
    }
    ::-webkit-scrollbar-thumb {
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
    border: 0.5rem solid #fff;
    }
    ::-webkit-scrollbar-track {
    }
  }
`;

export { MainSnsPostWhap }

const UserProfileImg= styled.img`
      object-fit: cover;
      margin: 0px 8px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
`;

export { UserProfileImg }

const SnsPostBox= styled.div`
    align-items: left;
    box-sizing: border-box;
    width: 290px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
`;

export { SnsPostBox }

const SnsPostContent= styled.p`
      margin: 20px 0px 15px 0px;
      font-weight: 300;
      color: #000;
    font-size: 14px;
    line-height: 24px;
    white-space: initial;
`;

export { SnsPostContent }

const SnsIdWhap= styled.div`
    left:0;
    box-sizing: border-box;
    height: 14px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-items:center;
    align-items: baseline;
    > strong{
    cursor: pointer;
    margin-right:5px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #000;
}
> p{
    cursor: pointer;
    font-size: 10px;
    line-height: 11px;
    color: #000;
}
`;

export { SnsIdWhap }

const IconWrap= styled.div`
    display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0.8rem 0rem ;
  align-items: center;
  vertical-align:bottom;
  z-index: 10;

>button{
    cursor: pointer;
}
.test{
    flex-grow: 1;
}
`;

export { IconWrap }


export const CommentBtnWrap= styled.div`
    box-sizing: border-box;
    background: #fff;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    flex-grow: 1;
    z-index: 10;
    span{
        font-size:0.9rem;
    }
`;

export const ImgListDiv = styled.div`

  img {
    width: 280px;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    border: 1px solid #DBDBDB;
    vertical-align: top;
  }
`

