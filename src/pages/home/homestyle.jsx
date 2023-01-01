import styled from 'styled-components';

export const HomeWrap = styled.div`
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  h2 {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTxt = styled.p`
  margin: 12px 0 26px;
  font-weight: 500;
  text-align: center;
`;
// 게시글 있을 시

export const HomeSection = styled.section`
  padding: 0 15px 60px;

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
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #457907;
  background-color: #edf8e1;
  border-radius: 30px;
  padding: 16px;
`;

export const ListWrap = styled.ul`
  margin-top: 50px;
`;

export const ListItem = styled.li`
  position: relative;
  margin-bottom: 55px;
  border-radius: 25px;
  box-shadow: 1px 1px 4px #dbdbdb;
`;
