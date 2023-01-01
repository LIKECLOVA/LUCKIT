import styled from 'styled-components';

export const CommentListWrapper = styled.section`
  width: 100%;
  padding: 20px 10px 15px 10px;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
  height: 100%;
`;

export const CommentListContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  max-width: 39rem;
  margin: 0 auto;
`;

export const CommentListLi = styled.li`
  position: relative;
  margin-bottom: 1.8rem;
`;

export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  margin-right: 15px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5px solid #ddd;
`;

export const InformationBox = styled.div`
  display: inline-block;
  position: absolute;
  top: 4px;
  span {
    font-weight: 600;
    font-size: 14px;
    margin-right: 0.6rem;
  }

  small {
    font-weight: 300;
    font-size: 10px;
    line-height: 5px;
    color: #767676;
  }
`;

export const CommentText = styled.span`
  display: block;
  font-weight: 300;
  font-size: 14px;
  margin-left: 65px;
  margin-top: -20px;
`;

export const ModalBtnBox = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  width: 2rem;
`;
