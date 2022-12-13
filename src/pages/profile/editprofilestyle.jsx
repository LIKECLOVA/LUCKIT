import styled from "styled-components";


export const EditProfilePageWrap = styled.div`
    margin-top:120px;
    padding:15px;
`
export const EditProfilePageUserInfo = styled.div`
    display:flex;
    margin-bottom: 50px;
    img{
        width:180px;
        object-fit:cover;
    }
    .profiledetail{
        display:flex;
        justify-content: space-evenly;
        flex-direction: column;
        margin-left:50px;
    }
    & + label{
        padding-left: 20px;
        font-size:20px;
    }
`

export const EditProfileUserInput = styled.input`
    width:280px;
    height:70px;
    border-radius:30px;
    padding:10px;
`

export const EditProFileUserLabel = styled.label`
`

export const EditProfileTextarea = styled.textarea`
  width: 100%;
  height: 195px;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 20px;
  border: none;
  margin-top: 10px;
`;