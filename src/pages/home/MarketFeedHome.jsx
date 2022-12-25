import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader, FeedPageHeader } from '../../components/header/header'
import { HomeSection, HomeTitle, ListWrap, ListItem, CardWrap, CardCont, CardTitle, CardTxt, CardUser,   } from './homestyle'
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png'
import IconSnsClovaFill from '../../assets/icon/sns용-클로바.png'

export const MarketFeedHome = ({scrollTopData, followingData}) => {
  const [confirmedValue, setConfirmedValue] = useState(JSON.parse(localStorage.getItem('stored')))
  const token = localStorage.getItem("Access Token");
  const productArr = [];
  const [productData, setProductData] = useState([]);

  console.log('잘 내려오는지', followingData);

  useEffect(() => {

    if(followingData)
    followingData.map((list)=> {
      return(
        axios({
            method: 'get',
            url: `https://mandarin.api.weniv.co.kr/product/${list.accountname}`,
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          }).then((res) => {
            console.log("data", res.data.product)

            const data = res.data.product;

            if(data.length > 0) {
              localStorage.setItem(`${list.accountname}`, JSON.stringify(data))
            }
            })
            .then((error) => {
              console.log(error);
            })
      )
    })}   
  , [])

  // if(accountNameArr.length > 0)
  // accountNameArr.map((accountname) => {
  //   return (
  //     localStorage.getItem(accountname) ? productArr.push(...JSON.parse(localStorage.getItem(accountname))) : undefined
  //     )
  // })

  if(followingData)
  followingData.map((list) => {
    return (
      localStorage.getItem(list.accountname) ? productArr.push(...JSON.parse(localStorage.getItem(list.accountname))) : undefined
      )
  })

  useEffect(() => {
    setProductData(productArr)
    console.log(productData)
  }, [])
  

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
        localStorage.setItem(`${id}`, result.isConfirmed);
        const value = JSON.parse(localStorage.getItem(`${id}`));
        const obj = {...confirmedValue};
        
        obj[id] = obj[id] ? value : result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValue(obj)
      }else {
        localStorage.setItem(`${id}`, result.isConfirmed);
        const value = JSON.parse(localStorage.getItem(`${id}`));
        const obj = {...confirmedValue};

        obj[id] = obj[id] ? value : result.isConfirmed;
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
                {productData.length > 0 && productData.map((data, index) => {
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
                            <img src={IconSnsClovaFill} alt='친구 신청'/>
                            </> : <>
                            <img src={IconSnsClova} alt='친구 신청'/>
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