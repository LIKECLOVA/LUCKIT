import React from 'react'
import { SnsUploadArt, SnsUploadSec, SnsUploadForm, SnsUploadImg, ImgUploadBtn} from './snsstyle';

export const SnsUpload = () => {
  return (
    <>
    <SnsUploadArt>
      <button>뒤로가기</button>
      <button>업로드</button>
    </SnsUploadArt>
    <SnsUploadSec>
<SnsUploadForm>
<textarea name="snsuploadtxt" id="snsuploadtxt" placeholder='게시글 입력하기 ...'/>
<SnsUploadImg>
  <img src="" alt="" />
</SnsUploadImg>
</SnsUploadForm>
    </SnsUploadSec>
    <ImgUploadBtn>
    <input name="snsuploadimg" id="snsuploadimg" type="file"/>
    </ImgUploadBtn>
    </>
  )};