import styled from 'styled-components';

const MainSnsPostWhap= styled.div`
    align-items:top;
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    height: 350px;
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    overflow: hidden;
img{
    margin: 0 20px;
    border: 3px solid #85CE2D;
      border-radius: 50%;
      width: 80px;
      height: 80px;
}
`;

export { MainSnsPostWhap }

const SnsPostBox= styled.div`
    align-items: left;
    box-sizing: border-box;
    width: 90%;
    height: 350px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    z-index: 10;
p{
    margin: 10px 0px;
    font-size: 14px;
    line-height: 16px;
}
img{
      margin-top:20px;
      border-radius: 10px;
      width: 319px;
      height: 264px;
}
`;

export { SnsPostBox }

const SnsIdWhap= styled.div`
    left:0;
    box-sizing: border-box;
    width: 50%;
    height: 14px;
    background: rgb(255, 255, 255);
    display: flex;
    z-index: 10;
    > strong{
    margin: 10px 0px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
}
> p{
    margin: 10px 0px;
    font-size: 10px;
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
    > strong{
    margin: 10px 0px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
}
>button{
    cursor: pointer;
}
`;

export { IconWrap }