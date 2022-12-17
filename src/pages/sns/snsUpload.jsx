import React, { useState, useRef } from 'react'
import axios from 'axios'
import { SnsUploadArt, SnsUploadSec, SnsUploadImg, SnsTextLable, SnsTextInput, FileUploader,FileInput, SingleImg, DeleteBtn, Img } from './snsstyle';
import {StoreBtn} from '../../components/button/button'

/*
{
    "user": {
        "_id": "639aaf6417ae666581c61058",
        "username": "clover",
        "email": "clover@naver.com",
        "accountname": "cloverGood",
        "intro": "hi",
        "image": "http://146.56.183.55:5050/Ellipse.png",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFhZjY0MTdhZTY2NjU4MWM2MTA1OCIsImV4cCI6MTY3NjI2NjUxOCwiaWF0IjoxNjcxMDgyNTE4fQ.MRzZ7BLEa1mDMVT-qGRYYiI6L00-wChvd0e95hAD7Cs",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzEwODI1MTgsImV4cCI6MTY3MjI5MjExOH0.YVlF7NCRf1FSH06TLN3PJriCQkd_Xd5YHPxu__-cI6A"
    }
}
*/

export const SnsUpload = () => {
  const [content, setContent] = useState('');
  const fileInput = useRef(null);
  const [showImg, setShowImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  // const [uploadBtn, SetuploadBtn] = useState(true);

  const data = {
    'post': {
      'content': '',
      'image': ''
    }
  }

/* 이미지 업로드 함수 */
async function ImgUpload(userImg) {
  const URL = 'https://mandarin.api.weniv.co.kr';
  const formData = new FormData()

  formData.append('image', userImg)
  const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData)

  return `${URL}/${res.data.filename}`
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
      snsImgList.push(ImgUpload(postImg[i]));
    }
    await Promise.all(snsImgList);

    data.post.image = snsImgList.join(',');
    data.post.content = content;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFhZjY0MTdhZTY2NjU4MWM2MTA1OCIsImV4cCI6MTY3NjI2NjUxOCwiaWF0IjoxNjcxMDgyNTE4fQ.MRzZ7BLEa1mDMVT-qGRYYiI6L00-wChvd0e95hAD7Cs';

    try {
      await axios.post(URL + REQ_PATH, data, {
        /* 토큰들어갈 자리 */
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
      })
      // .then( async()=> {axios.post(URL + REQ_PATH + '/' + accountname + '/userpost')})
      // .then(dispatch(AxiosPost(URL + REQ_PATH + '/' + accountname + '/userpost')))
        // .then(async() =>{
        //   const config = {
        //     headers: {
        //       'Authorization' : `Bearer ${token}`,
        //       'Content-type' : 'application/json'
        //     },
        //   }
        //   const res = await axios(URL,config);
          
        //   console.log('성공',res);

        //   return res.data;
        // })
    }
    catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   if (content.length > 0 && postImg.length > 0) {
  //     SetuploadBtn(false);
  //   }
  //   else {
  //     SetuploadBtn(true);
  //   }
  // }, [content, postImg])




  return (
    <>
    <SnsUploadArt>
      <button>뒤로가기</button>
      <StoreBtn size='middle-sm' onClick={handlePostSns}/>
    </SnsUploadArt>

    <SnsUploadSec>
    <SnsTextLable htmlFor='snspost' />
      <SnsTextInput 
          name='snspost' 
          id='snspost' 
          placeholder='게시글 입력하기 ...' 
          value={content} 
          onChange={(e) => { setContent(e.target.value) }} />
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