import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader, FeedPageHeader } from '../../components/header/header'
import { HomeSection, HomeTitle, ListWrap, ListItem, CardWrap, CardCont, CardTitle, CardTxt, CardUser,   } from './homestyle'
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png'

export const MarketFeedHome = ({scrollTopData}) => {
  const [datas, setDatas] = useState()
  const accountName = localStorage.getItem("Account Name");
  const token = localStorage.getItem("Access Token");

  useEffect(() => {

    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${accountName}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then((res) => {
        setDatas(res.data.product);
            })
            .then((error) => {
              console.log(error);
            });
  }, [])

  const onClickApplyBtn = () => {
    Swal.fire({
      title: "<p style='font-size:20px; padding:20px;'>취미 메이트를 신청할까요?</p>",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: '신청',
      confirmButtonColor: "#66b607",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("<p style='font-size:20px'>신청되었습니다.</p>", '', 'success')
      }
  })
}
  
  return (
    <>
      {scrollTopData > 500 ? <>
        <FeedPageHeader />
        </> : <>
        <HomepageHeader />
        </>}
      <Carousel />
        <main>
          <HomeSection>
              <h2>Home 피드 페이지</h2>
              <HomeTitle>럿킷 메이트를 기다리고 있어요!✨</HomeTitle>
              <ListWrap>
                {datas && datas.map((data, index) => {
                  return (
                    <ListItem key={index}>
                      <CardWrap>
                      <img src={data.itemImage}/>
                      <CardCont>
                          <CardTitle>{data.itemName}</CardTitle>
                          <CardTxt>같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요!</CardTxt>
                          <CardUser>FROM. {data.author.username}</CardUser>
                          <button onClick={onClickApplyBtn}>
                            <img src={IconSnsClova} alt='친구 신청'/>
                          </button>
                      </CardCont>
                      </CardWrap>
                  </ListItem>
                  )
                })}
              </ListWrap>
          </HomeSection>
        </main>
    </>
  )
};