import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { PostUploadHeader } from '../../header/header';
import { MarketImage } from '../marketUpload/marketImage';
import { MarketInput } from '../marketUpload/marketInput';
import { InputWrap, MarketForm } from '../marketUpload/marketinputstyle';
import Error from '../../../pages/404-error/errorPage';

export const MarketUpdate = () => {
  const { productid } = useParams();
  // 데이터 전송에 필요한 유저 토큰
  const [userToken, setUserToken] = useState();
  const [itemName, setItemName] = useState('');
  const [itemDetail, setItemDetail] = useState('');
  const [isActive, setIsActive] = useState('');
  const [disabled, setIsDisabled] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [view, setView] = useState('pending');

  const navigate = useNavigate();

  useEffect(() => {
    setUserToken(localStorage.getItem('Access Token'));
  }, []);

  useEffect(() => {
    if (itemName.length > 1 && itemDetail.length > 1) {
      setIsActive(true);
      setIsDisabled(false);
    } else {
      setIsActive(false);
      setIsDisabled(true);
    }
  });

  useEffect(() => {
    getProduct(productid);
  }, [productid]);

  async function getProduct() {
    try {
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/product/detail/${productid}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });

      setItemImage(res.data.product.itemImage);
      setItemName(res.data.product.itemName);
      setItemDetail(res.data.product.itemDetail);
    } catch (error) {
      setView('rejected');
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios
        .put(
          `https://mandarin.api.weniv.co.kr/product/${productid}`,
          {
            product: {
              itemName: itemName,
              price: 99999999,
              link: itemDetail,
              itemImage: itemImage,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-type': 'application/json',
            },
          }
        )
        .then((res) => {
          const id = res.data.product.author.accountname;

          (function () {
            navigate(`/profile/${id}`);
          })();
        });
    } catch (error) {
      setView('rejected');
    }
  };

  return (
    <>
      {view === 'fulfilled' && (
        <MarketForm method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
          <PostUploadHeader isActive={isActive} disabled={disabled} />
          <h1 className='a11y-hieen'>럭킷 메이트 등록 페이지</h1>
          <InputWrap>
            <MarketImage itemImage={itemImage} setItemImage={setItemImage} />
            <MarketInput
              itemName={itemName}
              setItemName={setItemName}
              itemDetail={itemDetail}
              setItemDetail={setItemDetail}
              setIsActive={setIsActive}
              setIsDisabled={setIsDisabled}
            />
          </InputWrap>
        </MarketForm>
      )}{' '}
      {view === 'pending' && (
        <>
          <p>로딩중</p>
        </>
      )}
      {view === 'rejected' && (
        <>
          <Error />
        </>
      )}
    </>
  );
};
