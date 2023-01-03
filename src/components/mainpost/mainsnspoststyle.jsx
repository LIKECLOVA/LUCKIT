import styled from 'styled-components';
import { palette } from '../../styles/global/globalColor';

const MainSnsPostWrap = styled.div`
  position: relative;
  align-items: top;
  box-sizing: border-box;
  margin: 20px 10px;
  width: 95%;
  background: #fff;
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
      height: 16px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${palette.연한회색};
      border-radius: 20px;
      border: 4px solid #fff;
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
  border: 0.5px solid ${palette.연연회색};
`;

export { UserProfileImg };

const SnsPostBox = styled.div`
  box-sizing: border-box;
  width: 290px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export { SnsPostBox };

const SnsPostContent = styled.p`
  margin: 15px 0px;
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  white-space: initial;
`;

export { SnsPostContent };

const SnsIdWrap = styled.div`
  left: 0;
  box-sizing: border-box;
  height: 14px;
  background: #fff;
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
  font-size: 8px;
  line-height: 12px;
  margin: 8px 0px;
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
  margin-right: 10px;
  flex-grow: 1;
  z-index: 10;
  span {
    font-size: 11px;
    color: ${palette.중간회색};
  }
`;

export const ImgListDiv = styled.div`
  img {
    width: 280px;
    height: 340px;
    margin: 4px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    border: 0.5px solid #dbdbdb;
    vertical-align: top;
  }
`;
