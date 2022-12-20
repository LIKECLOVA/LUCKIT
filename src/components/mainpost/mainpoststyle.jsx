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
    z-index: 10;
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    overflow: hidden;
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
    width: 90%;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    z-index: 10;
`;

export { SnsPostBox }

const SnsPostContent= styled.p`
      margin: 15px 0px;
      font-weight: 300;
    font-size: 18px;
    line-height: 16px;
`;

export { SnsPostContent }

const SnsPostImg= styled.img`
      border-radius: 10px;
      width: 355px;
      height: 264px;
`;

export { SnsPostImg }

const SnsIdWhap= styled.div`
    left:0;
    box-sizing: border-box;
    height: 14px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-items:center;
    align-items: baseline;
    z-index: 10;
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
    align-items: center;
    box-sizing: border-box;
    width: 50%;
    height: 14px;
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    padding: 10px 0px;
    margin: 10px 0px;
>button{
    cursor: pointer;
}
`;

export { IconWrap }