import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as M from './marketuploadstyle';
import { ImgUpload } from './imgUpload';
import { TitleInput, DetailInput } from './marketInput';

export const MarketUpload = () => {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [showImg, setShowImg] = useState('');
  const [userImg, setImg] = useState('');
  const [Title, setTitle] = useState('');
  const [Detail, setDetail] = useState('');
  const [btn, setBtn] = useState(true);

  // 서버에 보낼 데이터
  const postData = {
    product: {
      itemName: Title,
      price: 999,
      link: Detail,
      itemImage: '',
    },
  };

  // 버튼 활성화
  useEffect(() => {
    if (Title.length >= 2 && Detail !== '' && showImg === '') {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [Title, Detail, showImg]);

  // 이미지 미리보기
  const onChange = (e) => {
    const maxSize = 10 * 1024 * 1024;
    const fileSize = e.target.files[0].size;

    if (fileSize > maxSize) {
      alert('첨부파일 사이즈는 10MB 이내로 등록 가능합니다.');
      return;
    }
    if (e.target.files[0]) {
      setShowImg(e.target.files[0]);
      setImg(e.target.files[0]);
    }
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setShowImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 서버에 내보내기
  async function marketSave() {
    try {
      const imgData = await ImgUpload(userImg);

      postData.product.itemImage = imgData;
      const URL = 'https://mandarin.api.weniv.co.kr';
      const REQ_PATH = '/product';
      const token = JSON.parse(localStorage.getItem('token'));
      const accountname = JSON.parse(localStorage.getItem('accountname'));

      await axios.post(URL + REQ_PATH, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      dispatch(AxiosPetInfo(`${URL + REQ_PATH}/${accountname}`));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <M.MarketHeader>
        <button>뒤로가기</button>
        <button>업로드</button>
      </M.MarketHeader>
      <M.Form>
        <ImgUpload onChnage={onChange} src={showImg} fileref={fileInput} setImg={setImg} />
        <M.InputSection>
          <TitleInput Title={Title} setTtile={setTitle} />
          <DetailInput Detail={Detail} setDetail={setDetail} />
        </M.InputSection>
      </M.Form>
    </>
  );
};
