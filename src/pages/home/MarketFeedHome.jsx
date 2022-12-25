import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Carousel } from '../../components/carousel/carousel';
import { HomepageHeader, FeedPageHeader } from '../../components/header/header';
import {
  HomeSection,
  HomeTitle,
  ListWrap,
  ListItem,
  CardWrap,
  CardCont,
  CardTitle,
  CardTxt,
  CardUser,
} from './homestyle';
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png';
import IconSnsClovaFill from '../../assets/icon/sns용-클로바.png';

export const MarketFeedHome = ({scrollTopData, followingData}) => {
  const [confirmedValue, setConfirmedValue] = useState(JSON.parse(localStorage.getItem('stored')))
  const token = localStorage.getItem("Access Token");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    followingData.map((list) => {
      return axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${list.accountname}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          for( const product of res.data.product ) {
            setProductData((e) => [...e, product])
          }
        })
    });
  }, []);
  
  const onClickApplyBtn = (e) => {
    const id = e.currentTarget.id;

    Swal.fire({
      title: "<p style='font-size:20px; padding:20px;'>취미 메이트를 신청할까요?</p>",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: '신청',
      confirmButtonColor: "#66b607",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("<p style='font-size:20px'>신청되었습니다.</p>", '', 'success');
        const obj = {...confirmedValue};
      
        obj[id] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValue(obj)
      }else {
        const obj = {...confirmedValue};

        obj[id] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValue(obj)
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
                {productData.length > 0 &&
                  productData.map((data, index) => {
                  return (
                    <ListItem key={Math.random()}>
                      <CardWrap>
                      <img src={data.itemImage}/>
                      <CardCont>
                          <CardTitle>{data.itemName}</CardTitle>
                          <CardTxt>{data.link}</CardTxt>
                          <CardUser>FROM. {data.author.username}</CardUser>
                          <button onClick={onClickApplyBtn} id={index}>
                            {confirmedValue && confirmedValue[index] ? <>
                            <img src={IconSnsClovaFill} alt='취미 메이트 신청 버튼'/>
                            </> : <>
                            <img src={IconSnsClova} alt='취미 메이트 신청 버튼'/>
                            </>}
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