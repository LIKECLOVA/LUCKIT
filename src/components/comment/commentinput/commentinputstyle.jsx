import styled from 'styled-components';
import basicProfile from '../../../assets/icon/basic-profile.png';

export const CommentInpWrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 0.5px solid #ddd;
  background-color: #fff;
  padding: 15px;
`;

export const CommentInpform = styled.form`
  display: flex;
  width: 100%;
`;

export const CommentUserImgBox = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const CommentUserImg = styled.img.attrs((props) => ({
  src: props.authorImg || basicProfile,
  alt: '프로필 이미지',
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
`;

export const CommentTextInput = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  border: none;
  :focus {
    outline: none;
  }
`;

export const CommentSubmitBtn = styled.button`
  width: 60px;
  font-weight: 600;
  font-size: 14px;
  background-color: #fff;
  color: #457907;
  &:disabled {
    color: #ddd;
  }
`;
