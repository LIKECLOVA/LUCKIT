import styled from 'styled-components';

export const JoinProfileWrap = styled.div`
  padding: 25px;

  h2 {
    margin-top: 50px;
    font-size: 40px;
  }
  p:nth-of-type(1) {
    font-size: 20px;
    margin-top: 14px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    margin-top: 14px;
  }
  .profileMidWrap {
    margin-top: 100px;
    display: flex;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .buttonFlexBox {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const ProfileLabel = styled.label`
  display: block;
  .profileMidWrap + & {
    margin-top: 50px;
  }
`;

export const ProfileInput = styled.input`
  display: block;
  width: 270px;
  height: 70px;
  border-radius:50px;
  padding:15px;
  border: none;
  background-color:#f1f1f1;
`;

export const ProfileTextarea = styled.textarea`
  width: 100%;
  height: 195px;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
`;
