import React from 'react'
import { SnsUploadArt, SnsUploadSec, SnsUploadForm, SnsUploadImg} from './snsstyle';
import {ImgUploadBtn} from '../../components/button/iconBtn'

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
  <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="" />
</SnsUploadImg>
</SnsUploadForm>
    </SnsUploadSec>
    <ImgUploadBtn posi='fixed'/>
    </>
  )};