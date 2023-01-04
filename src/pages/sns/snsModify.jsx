import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  SnsUploadSec,
  SnsUploadImg,
  SnsTextLable,
  SnsTextInput,
  FileUploader,
  FileInput,
  SingleImg,
  DeleteBtn,
  Img,
} from './snsstyle';
import { PostUploadHeader } from '../../components/header/header';

export const SnsModify = () => {
  const token = localStorage.getItem('Access Token');
  const [content, setContent] = useState('');
  const fileInput = useRef(null);
  const [showImgs, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.state.postId;
  const oripostContent = location.state.postContent;
  const oripostImg = location.state.postImg;

  const data = {
    post: {
      content: '',
      image: showImgs?.length === 0 ? postImg : showImgs,
    },
  };

  /* 이미지 업로드 함수 */
  async function ImgUpload(userImg) {
    const formData = new FormData();
    const URL = 'https://mandarin.api.weniv.co.kr/';

    formData.append('image', userImg);
    const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData);

    const Imgup = URL + res.data.filename;

    return Imgup;
  }

  function sliceImg(oripostImgs) {
    const arr = oripostImgs?.split(',');

    return arr;
  }

  useEffect(() => {
    setShowImg(() => sliceImg(oripostImg));
  }, []);

  /* 이미지 띄워주는 함수 */
  const handleAddImg = (e) => {
    let fileURLs = [...showImgs];
    let files = [...postImg];
    const fileArr = e.target.files;

    for (let i = 0; i < fileArr.length; i++) {
      const currentImgURL = window.URL.createObjectURL(fileArr[i]);

      fileURLs.push(currentImgURL);
      files.push(fileArr[i]);
    }

    if (fileURLs.length > 3) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      fileURLs = fileURLs.slice(0, 3);
      const preImglen = getPreImglen(fileURLs);

      files = files.slice(0, 3 - preImglen); // 추가 이미지 길이  = 3- 기존이미지 길이
    }

    setPostImg(files);
    setShowImg(fileURLs);
  };

  /* 이미지 삭제함수 */
  const handleDeleteImg = (id) => {
    const preImglen = getPreImglen(showImgs);

    setShowImg(showImgs.filter((_, index) => index !== id));
    setPostImg(postImg.filter((_, index) => index !== id - preImglen));
  };

  function getPreImglen(showImg) {
    let addImgLength = 0;

    showImg.map((image) => {
      if (image.slice(0, 4) === 'blob') {
        addImgLength += 1;
      }
      return 0;
    });
    return showImg.length - addImgLength;
  }

  /* 게시글 업로드 함수 */
  async function handlePostSns() {
    const snsImgList = [];

    showImgs?.map((showImg) => {
      if (showImg.slice(0, 4) !== 'blob') {
        snsImgList.push(showImg);
      }
      return 0;
    });

    for (let i = 0; i < postImg?.length; i++) {
      const img = ImgUpload(postImg[i]);

      snsImgList.push(img);
    }
    const SnsImgs = await Promise.all(snsImgList);

    if (snsImgList.length > 3) {
      snsImgList.slice(0, 3);
    }

    data.post.image = SnsImgs.join(',');
    data.post.content = content?.length === 0 ? oripostContent : content;

    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const REQ_PATH = '/post/';

      await axios
        .put(URL + REQ_PATH + postId, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        })
        .then(navigate(-1));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length === 0 && postImg.length === 0) {
      SetuploadBtn(false);
    } else {
      SetuploadBtn(true);
    }
  }, [content, postImg]);

  return (
    <>
        <Helmet>
          <title>LUCKIT - SNS 게시글 수정</title>
          <meta name='description' content='럭킷 게시글 수정 페이지입니다. 작성한 게시글을 수정해보세요!' />
        </Helmet>
      <PostUploadHeader handlePostSns={handlePostSns} disabled={uploadBtn ? null : 'disabled'} />

      <SnsUploadSec>
        <SnsTextLable htmlFor='snspost' />
        <SnsTextInput
          key={oripostContent}
          defaultValue={oripostContent}
          name='snspost'
          id='snspost'
          placeholder='게시글 입력하기 ...'
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <SnsUploadImg>
          {showImgs.length === 1
            ? showImgs.map((image, id) => {
                return (
                  <div key={id}>
                    <SingleImg key={id} src={image} />
                    <DeleteBtn
                      onClick={() => {
                        return handleDeleteImg(id);
                      }}
                    />
                  </div>
                );
              })
            : showImgs.map((image, id) => {
                return (
                  <div key={id}>
                    <Img key={id} src={image} />
                    <DeleteBtn
                      onClick={() => {
                        return handleDeleteImg(id);
                      }}
                    />
                  </div>
                );
              })}
        </SnsUploadImg>
        <FileUploader htmlFor='input-file'>
          <FileInput
            id='input-file'
            name='PostingImg'
            type='file'
            multiple
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            onChange={handleAddImg}
            ref={fileInput}
          />
        </FileUploader>
      </SnsUploadSec>
    </>
  );
};
