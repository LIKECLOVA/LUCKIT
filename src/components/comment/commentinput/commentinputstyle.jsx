import styled from 'styled-components';
import basicProfile from '../../../assets/icon/basic-profile.png'

export const CommentInpWrap= styled.div`
    display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 3.9rem;
  border-top: 0.5px solid #ddd;
  background-color: #fff;
  padding: 1.2rem 1.6rem;    
`;

export const CommentInpform = styled.form`
  display: flex;
  width: 100%;
`;

export const CommentUserImgBox = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 1.8rem;
`;

export const CommentUserImg = styled.img.attrs((props) => ({
  src: props.authorImg || basicProfile,
  alt: '프로필 이미지',
}))`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentTextInput = styled.input`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  border: none;
`;

export const CommentSubmitBtn = styled.button`
  width: 7rem;
  font-weight: 400;
  font-size: 1.1rem;
  background-color: #fff;
  color: #457907;
  &:disabled {
    color: #ddd;
  }
`;