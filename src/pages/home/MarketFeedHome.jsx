import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { Carousel } from '../../components/carousel/carousel'
import { HomepageHeader, FeedPageHeader } from '../../components/header/header'
import { HomeSection, HomeTitle, ListWrap, ListItem, CardWrap, CardCont, CardTitle, CardTxt, CardUser,   } from './homestyle'
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png'
import IconSnsClovaFill from '../../assets/icon/sns용-클로바.png'

export const MarketFeedHome = ({scrollTopData}) => {
  // 데이터는 임시로 넣은 것
  // 추후 팔로잉한 유저들의 마켓글 데이터 가져올 예정
  const [datas, setDatas] = useState()
  const accountName = localStorage.getItem("Account Name");
  const token = localStorage.getItem("Access Token");
  const [confirmedValue, setConfirmedValues] = useState(JSON.parse(localStorage.getItem('stored')))

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
        setConfirmedValues(obj)
      }else {
        localStorage.setItem(`${id}`, result.isConfirmed);
        const value = JSON.parse(localStorage.getItem(`${id}`));
        const obj = {...confirmedValue};

        obj[id] = obj[id] ? value : result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValues(obj)
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
                    <ListItem key={Math.random()}>
                      <CardWrap>
                      <img src={data.itemImage}/>
                      <CardCont>
                          <CardTitle>{data.itemName}</CardTitle>
                          <CardTxt>같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요! 같이 즐겁게 덕질하실 다이브 럭킷 찾아요!</CardTxt>
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