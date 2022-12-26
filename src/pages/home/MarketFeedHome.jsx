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

export const MarketFeedHome = ({ scrollTopData, followingData }) => {
  const [confirmedValue, setConfirmedValue] = useState(JSON.parse(localStorage.getItem('stored')));
  const token = localStorage.getItem('Access Token');
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
      }).then((res) => {
        for (const product of res.data.product) {
          setProductData((e) => [...e, product]);
        }
      });
    });
  }, []);

  const onClickApplyBtn = (e) => {
    const id = e.currentTarget.id;

    Swal.fire({
      imageUrl:
        'https://user-images.githubusercontent.com/102042383/209487151-26edc09f-d556-45f2-abaf-4b60c692d57d.gif',
      imageWidth: 350,
      imageHeight: 350,

      showCancelButton: true,
      cancelButtonText: '럭킷 매칭 취소',
      confirmButtonText: '럭킷 매칭 신청',
      confirmButtonColor: '#66b607',
      backdrop: `
          rgba(0,0,0,.4)
    url("https://img1.picmix.com/output/stamp/normal/6/4/9/3/2063946_9932b.gif")
    center top
    no-repeat
  `,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "<p style='font-size:20px; padding:20px;'>럭킷 매칭 신청이 완료되었습니다!</p>",
          showConfirmButton: false,
          timer: 1500,
          backdrop: `
          rgba(0,0,0,.4)
    url("https://media1.giphy.com/media/J2UTOBXizlRujwpq0K/giphy.gif?cid=ecf05e47zsvvxoo2l97k557epdyn47z5x7ki7yl1x0k8vywu&rid=giphy.gif&ct=s")
    center top
    no-repeat
  `,
        });
        const obj = { ...confirmedValue };

        obj[id] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj));
        setConfirmedValue(obj);
      } else {
        const obj = { ...confirmedValue };

        obj[id] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj));
        setConfirmedValue(obj);
      }
    });
  };

  return (
    <>
      {scrollTopData > 500 ? (
        <>
          <FeedPageHeader />
        </>
      ) : (
        <>
          <HomepageHeader />
        </>
      )}
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
                      <img id='previewImg' src={data.itemImage} />
                      <CardCont>
                        <CardTitle>{data.itemName}</CardTitle>
                        <CardTxt>{data.link}</CardTxt>
                        <CardUser>FROM. {data.author.username}</CardUser>
                        <button onClick={onClickApplyBtn} id={index}>
                          {confirmedValue && confirmedValue[index] ? (
                            <>
                              <img src={IconSnsClovaFill} alt='취미 메이트 신청 버튼' />
                            </>
                          ) : (
                            <>
                              <img src={IconSnsClova} alt='취미 메이트 신청 버튼' />
                            </>
                          )}
                        </button>
                      </CardCont>
                    </CardWrap>
                  </ListItem>
                );
              })}
          </ListWrap>
        </HomeSection>
      </main>
    </>
  );
};
