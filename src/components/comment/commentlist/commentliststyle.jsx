import styled from 'styled-components';

export const CommentListWrapper = styled.section`
  width: 100%;
  padding: 2rem 1.6rem;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
`;

export const CommentListContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  max-width: 39rem;
  margin: 0 auto;
`;

export const CommentListLi = styled.li`
  position: relative;
  margin-bottom: 1.6rem;
`;

export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  margin-right: 1.2rem;
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const InformationBox = styled.div`
  display: inline-block;
  position: absolute;
  top: 6px;

  span {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.7rem;
    margin-right: 0.6rem;
  }

  small {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #767676;
  }
`;

export const CommentText = styled.span`
  display: block;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin: 0 0 0 4.8rem;
`;

export const ModalBtnBox = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  width: 2rem;
`;