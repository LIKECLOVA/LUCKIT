import styled from 'styled-components';

const MainSnsPostWhap= styled.div`
    position: relative;
    align-items:top;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 20px 0px 40px 0px;
    width: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    .snsImgList {
    width: 420px;
    display: flex;
    gap: 10px;
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
      margin: 0 20px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
`;

export { UserProfileImg }

const SnsPostBox= styled.div`
    align-items: left;
    box-sizing: border-box;
    width: 420px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
`;

export { SnsPostBox }

const SnsPostContent= styled.p`
      margin: 15px 0px;
      font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    white-space: initial;
`;

export { SnsPostContent }

// const SnsPostImg= styled.img`
//       border-radius: 10px;
//       width: 355px;
//       height: 264px;
// `;

// export { SnsPostImg }

const SnsIdWhap= styled.div`
    left:0;
    box-sizing: border-box;
    height: 14px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-items:center;
    align-items: baseline;
    > strong{
    margin-right:5px;
    font-size: 16px;
    line-height: 14px;
    font-weight: 600;
}
> p{
    font-size: 12px;
    line-height: 11px;
}
`;

export { SnsIdWhap }

const IconWrap= styled.div`
    display: flex;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 1.6rem;
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
        font-size:1rem;
    }
`;

export const ImgListDiv = styled.div`

  img {
    width: 420px;
    height: 320px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    border: 1px solid #DBDBDB;
    vertical-align: top;
  }
`

