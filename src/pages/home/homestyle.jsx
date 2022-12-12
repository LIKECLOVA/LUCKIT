import styled from 'styled-components'

export const HomeWrap = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HomeBannerImg = styled.img`

    width: 100%;
    height: 500px;
    background-color: pink;
    vertical-align: top;

`

export const SearchBtn = styled.button`

    margin-top: 22px;
    width: 180px;
    padding: 18px;
    background-color: #85CE2D;
    border-radius: 40px;
    color: white;

`
export const HomeTxt = styled.p`

    margin-top: 60px;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;

`
// 게시글 있을 시


export const HomeSection = styled.section`

    padding: 0 15px;
`

export const Hidden = styled.h2`

    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;

`

export const HomeTitle = styled.p`

background-color: yellowgreen;
font-size: 18px;
padding: 18px;
text-align: center;
border-radius: 30px;
`

export const ListWrap = styled.ul`

    margin-top: 60px;
`

export const ListItem = styled.li`

    margin-bottom: 60px;

`

export const CardImg = styled.img`

    margin-top: -30px;
    width: 180px;
    height: 200px;
    flex-shrink: 0;
    background-color:  pink;
    vertical-align: top;
    border-radius: 30px;

`

export const CardWrap = styled.div`

    display: flex;
    border-radius: 30px;
    box-shadow : 0 -12px 0 0 yellowgreen;
    background-color: skyblue;

`

export const CardCont = styled.div`

    position: relative; 
    display: flex;
    flex-direction: column;
    background-color: skyblue;
    padding: 20px;
    width: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    button {
        position: absolute;
        bottom: 20px;
        right: 20px;
        padding: 15px;
    }
    
`

export const CardTitle = styled.strong`

    width: 330px;
    font-size: 20px;
    font-weight: 500;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

export const  CardTxt = styled.p`

    flex-shrink: 0;
    width: 250px;
    height: 60px;
    margin-top: 20px;
    overflow: hidden;
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    background-color: yellow;
    line-height: 20px;
   
`

export const  CardUser = styled.p`

    width: 250px;
    margin-top: 15px;
    font-size: 14px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
