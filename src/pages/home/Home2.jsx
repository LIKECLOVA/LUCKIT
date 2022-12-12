import React from 'react'
// import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header'
import { NavBar } from '../../components/navbar/navBar'
import { HomeBannerImg, HomeSection, Hidden, HomeTitle, ListWrap, ListItem, CardWrap, CardImg, CardCont, CardTitle, CardTxt, CardUser,   } from './homestyle'

const Home2 = () => {
  return (
    <main>
        <Header />
        <HomeBannerImg />
        <HomeSection>
            <Hidden>Home 피드 페이지</Hidden>
            <HomeTitle>럿킷 메이트를 기다리고 있어요!✨</HomeTitle>
            <ListWrap>
                <ListItem>
                    <CardWrap>
                    <CardImg />
                    <CardCont>
                        <CardTitle>아이브 콘서트 가요!아이브 콘서트 가요!아이브 콘서트 가요!</CardTitle>
                        <CardTxt>같이 즐겁게 덕질하실 다이브 럭킷 찾아요!아아아아아아아아아 같이 즐겁게 덕질하실 다이브 럭킷 찾아요!아아아아아아아아아 </CardTxt>
                        <CardUser>FROM. 유저 닉네임유저 닉네임유저 닉네임</CardUser>
                        <button type='click'>🍀</button>
                    </CardCont>
                    </CardWrap>
                </ListItem>
                <ListItem>
                    <CardWrap>
                    <CardImg />
                    <CardCont>
                        <CardTitle>아이브 콘서트 가요!</CardTitle>
                        <CardTxt>같이 즐겁게 덕질하실 다이브 럭킷 찾아요 </CardTxt>
                        <CardUser>FROM. 유저 닉네임</CardUser>
                        <button type='click'>🍀</button>
                    </CardCont>
                    </CardWrap>
                </ListItem>
                <ListItem>
                    <CardWrap>
                    <CardImg />
                    <CardCont>
                        <CardTitle>아이브 콘서트 가요!아이브 콘서트 가요!아이브 콘서트 가요!</CardTitle>
                        <CardTxt>같이 즐겁게 덕질하실 다이브 럭킷 찾아요! </CardTxt>
                        <CardUser>FROM. 유저 닉네임</CardUser>
                        <button type='click'>🍀</button>
                    </CardCont>
                    </CardWrap>
                </ListItem>
            </ListWrap>
        </HomeSection>
        <NavBar />
    </main>
  )
};

export default Home2;