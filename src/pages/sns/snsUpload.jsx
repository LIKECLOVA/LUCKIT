import React, { useState, useRef ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { SnsUploadSec, SnsUploadImg, SnsTextLable, SnsTextInput, FileUploader,FileInput, SingleImg, DeleteBtn, Img } from './snsstyle';
import {PostUploadHeader} from '../../components/header/header'


export const SnsUpload = () => {
  const token = localStorage.getItem('Access Token');
  const [content, setContent] = useState('');
  const fileInput = useRef(null);
  const [showImg, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [uploadBtn, SetuploadBtn] = useState(true);
  const navigate = useNavigate(); 

  const data = {
    'post': {
      'content': '',
      'image': ''
    }
  }

/* 이미지 업로드 함수 */
async function ImgUpload(userImg) {
  const formData = new FormData()
  const URL = 'https://mandarin.api.weniv.co.kr/';
  
  formData.append('image', userImg)
  const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData)
  
  const Imgup= URL + res.data.filename;

  return Imgup;
}

  /* 이미지 띄워주는 함수 */
  const handleAddImg = (e) => {
    let fileURLs = [...showImg];
    let files = [...postImg];
    const fileArr = e.target.files;
    const maxSize = 10 * 1024 * 1024;
    let TotalfileSize = 0;

    for (let i = 0; i < fileArr.length; i++) {
      TotalfileSize += fileArr[i].size;

      if (TotalfileSize > maxSize) {
        alert('첨부파일의 총 사이즈는 10MB 이내로 등록 가능합니다.');
        return
      }
      else{
      const currentImgURL = URL.createObjectURL(fileArr[i]);

      fileURLs.push(currentImgURL);

      files.push(fileArr[i]);
      }
    }

    if (fileURLs.length > 3) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      fileURLs = fileURLs.slice(0, 3);
      files = files.slice(0, 3);
    }

    setPostImg(files);
    setShowImg(fileURLs);
  }


/* 이미지 삭제함수 */
  const handleDeleteImg = (id) => {
    setShowImg(showImg.filter((_, index) => {return(index !== id)}));

    setPostImg(postImg.filter((_, index) => {return(index !== id)}));
  };


  /* 게시글 업로드 함수 */
  async function handlePostSns() {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const REQ_PATH = '/post';
    const snsImgList = [];

    for (let i = 0; i < postImg?.length; i++) {
      const img =ImgUpload(postImg[i]);
 
      snsImgList.push(img);
         
    }
    const SnsImgs = await Promise.all(snsImgList)

    data.post.image = SnsImgs.join(',');
    data.post.content = content;

    try {
      await axios.post(URL + REQ_PATH, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
      })
      .then(navigate('/snspage'))
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (content.length === 0 && postImg.length === 0) {
      SetuploadBtn(false);  
    }
    else {
      SetuploadBtn(true);
    }
  }, [content, postImg])

  return (
    <>
    <PostUploadHeader handlePostSns={handlePostSns} disabled={uploadBtn ? null : 'disabled'}/>

    <SnsUploadSec>
    <SnsTextLable htmlFor='snspost' />
      <SnsTextInput 
          name='snspost' 
          id='snspost' 
          placeholder='게시글 입력하기 ...' 
          value={content} 
          onChange={(e) => { setContent(e.target.value) 
          }} />
      <SnsUploadImg>
      {
        showImg.length === 1 ?
            showImg.map((image, id) => {return(
              <div key={id} >
                <SingleImg key={id} src={image} />
                <DeleteBtn onClick={() => {return handleDeleteImg(id)}} />
              </div>
            )})
            :
            showImg.map((image, id) => {return(
              <div key={id} >
                <Img key={id} src={image} />
                <DeleteBtn onClick={() => {return handleDeleteImg(id)}} />
              </div>
            )})
      }
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
  )};