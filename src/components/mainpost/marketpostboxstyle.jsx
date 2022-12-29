import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  border-radius: 24px;
  box-shadow: 0px -8px 0 0px #edf8e1;
`;

export const CardImg = styled.img`
  margin-top: -22px;
  width: 138px;
  height: 150px;
  flex-shrink: 0;
  vertical-align: top;
  border-radius: 24px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 3px 3px #f3f3f3;
  background: #fff;
`;

export const CardCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 14px 14px 12px;
  flex-grow: 1;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  button {
    position: absolute;
    bottom: 14px;
    right: 14px;
    padding: 0;
    background-color: transparent;

    img {
      width: 44px;
      height: 44px;
      vertical-align: top;
    }
  }
`;

export const CardTitle = styled.strong`
  font-size: 14px;
  width: 165px;
  line-height: 20px;
  font-weight: 500;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardTxt = styled.p`
  flex-shrink: 0;
  width: 145px;
  height: 46px;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardUser = styled.p`
  width: 145px;
  margin-top: 12px;
  font-size: 10px;
  line-height: 14px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
