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
  margin-top: 50px;
  margin-bottom: 90px;
`;

export const ListWrap = styled.ul`

  margin-top: 60px;
`;

export const ListItem = styled.li`

  position: relative;
  margin-bottom: 70px;
  border-radius: 30px;
  box-shadow: 1px 1px 4px #dbdbdb;
`;