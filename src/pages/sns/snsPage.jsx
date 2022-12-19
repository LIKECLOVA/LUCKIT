import React from 'react';
// import ScrollMenu from "react-horizontal-scrolling-menu";
import MainSnsPost from '../../components/mainpost/mainSnsPost'
import { SnsPageArt, SnsPageSec, MainPostArea } from './snsstyle';
import { FeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';



export const SnsPage = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  //   // 모달창 노출
  //   const showModal = () => {
  //       setModalOpen(!modalOpen);
  //   };


  return (
    <>
    <FeedPageHeader />
    <SnsPageArt>
      <ul>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
        <li>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160622_226%2Fsang7145_1466595386985CQdGk_JPEG%2Fg.jpg&type=sc960_832" alt="스토리이미지1" />
        </li>
      </ul>
    </SnsPageArt>
    <SnsPageSec>
      <h1>럭킷들의 새로운 소식을 확인해보세요!</h1>
      <MainPostArea>
      <MainSnsPost/>
      <MainSnsPost/>
      </MainPostArea>
    </SnsPageSec>
    <NavBar />
    </>
  )
}
