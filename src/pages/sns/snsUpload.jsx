import React from 'react'
import { Snsuploadart, Snsuploadsec, SnsuploadForm, SnsUploadImg, ImgUploadBtn} from './snsstyle';

export const SnsUpload = () => {
  return (
    <>
    <Snsuploadart>
      <button>뒤로가기</button>
      <button>업로드</button>
    </Snsuploadart>
    <Snsuploadsec>
<SnsuploadForm>
<textarea name="snsuploadtxt" id="snsuploadtxt" placeholder='게시글 입력하기 ...'/>
<SnsUploadImg>
  <img src="" alt="" />
</SnsUploadImg>
</SnsuploadForm>
    </Snsuploadsec>
    <ImgUploadBtn>
    <input name="snsuploadimg" id="snsuploadimg" type="file"/>
    </ImgUploadBtn>
    </>
  )};