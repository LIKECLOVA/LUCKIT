import styled from 'styled-components';

export const HomeWrap = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBtn = styled.button`
  width: 160px;
  padding: 24px 18px;
  background-color: #85ce2d;
  border-radius: 40px;
  color: white;
  margin: 26px 0 120px;
  font-size: 16px;
`;

export const HomeTxt = styled.p`
  margin-top: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`;
// 게시글 있을 시

export const HomeSection = styled.section`
  padding: 0 15px 20px;

  h2 {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .swal2-title {
    color: red;
  }
`;

export const HomeTitle = styled.p`
  background-color: #edf8e1;
  padding: 18px;
  text-align: center;
  border-radius: 30px;
  color: #457907;
  font-weight: 500;
`;

export const ListWrap = styled.ul`
  margin-top: 60px;
`;

export const ListItem = styled.li`
  margin-bottom: 70px;
  border-radius: 30px;
  box-shadow: 1px 1px 4px #dbdbdb;

  img {
    margin-top: -26px;
    width: 190px;
    height: 200px;
    flex-shrink: 0;
    vertical-align: top;
    border-radius: 30px;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  border-radius: 30px;
  box-shadow: 0px -12px 0 0px #edf8e1;

  #previewImg {
    background: #fff;
    box-shadow: 0 1px 4px 0 #dbdbdb;
  }
`;

export const CardCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 0;
    background-color: transparent;

    img {
      width: 60px;
      height: 60px;
      vertical-align: top;
    }
  }
`;

export const CardTitle = styled.strong`
  width: 330px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardTxt = styled.p`
  flex-shrink: 0;
  width: 250px;
  height: 60px;
  margin-top: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 20px;
`;

export const CardUser = styled.p`
  width: 250px;
  margin-top: 15px;
  font-size: 14px;
  line-height: 16px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
