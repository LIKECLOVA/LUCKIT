import styled from 'styled-components';

const MainSnsPostWrap = styled.div`
  position: relative;
  align-items: top;
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
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

export { MainSnsPostWrap };

const UserProfileImg = styled.img`
  object-fit: cover;
  margin-right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0.5px solid #eaeaea;
`;

export { UserProfileImg };

const SnsPostBox = styled.div`
  box-sizing: border-box;
  width: 290px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;

export { SnsPostBox };

const SnsPostContent = styled.p`
  margin: 14px 0px 15px 0px;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  white-space: initial;
`;

export { SnsPostContent };

const SnsIdWrap = styled.div`
  left: 0;
  box-sizing: border-box;
  height: 14px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-items: center;
  align-items: baseline;
  > strong {
    cursor: pointer;
    margin-right: 5px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }
  > p {
    cursor: pointer;
    font-size: 10px;
    line-height: 11px;
  }
`;

export { SnsIdWrap };

const IconWrap = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0.8rem 0rem;
  align-items: center;
  vertical-align: bottom;
  z-index: 10;

  > button {
    cursor: pointer;
  }
  .test {
    flex-grow: 1;
  }
`;

export { IconWrap };

export const CommentBtnWrap = styled.div`
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex-grow: 1;
  z-index: 10;
  span {
    font-size: 13px;
    color: #a3a3a3;
  }
`;

export const ImgListDiv = styled.div`
  img {
    width: 280px;
    height: 200px;
    margin: 4px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    border: 1px solid #dbdbdb;
    vertical-align: top;
  }
`;
