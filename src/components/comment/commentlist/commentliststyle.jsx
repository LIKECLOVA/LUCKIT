import styled from 'styled-components';

export const CommentListWrapper = styled.section`
  width: 100%;
  padding: 15px;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
  height: 100%;
`;

export const CommentListContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
`;

export const CommentListLi = styled.li`
  position: relative;
  margin-bottom: 32px;
`;

export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  margin-right: 15px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5px solid #eaeaea;
`;

export const InformationBox = styled.div`
  display: inline-block;
  position: absolute;
  top: 4px;
  span {
    font-weight: 600;
    font-size: 14px;
    margin-right: 6px;
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
  width: 20px;
`;
