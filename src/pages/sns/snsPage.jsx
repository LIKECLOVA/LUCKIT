import React,{ useEffect , useState} from 'react';
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
  
  const [list ,setList] = useState([]);
  // const [followList,setFollowList] = useState([]);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  // const STORY_PATH=`/profile/:accountname/following`;
  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';
  
  async function fetchFeedPostData(){
    await fetch(URL+FEED_PATH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
    .then((data) => data.json())
    .then((data) =>  {
      setList(data.posts)
      // console.log(data.posts)
    });
  }
  // async function fetchUserStoryData() {
    
  //   await fetch( URL+STORY_PATH, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => console.log([...data]))
  //     /* setFollowList([...data]));*/
  // }
  useEffect( ()=>{
    fetchFeedPostData();
    // fetchUserStoryData();
  },[])

  return (
    <>
    <FeedPageHeader />
    <SnsPageArt>
      <ul>
      {/* {followList.map((story)=> {
           return <li><img src={story.image} /></li>
        })} */}
      </ul>
    </SnsPageArt>
    <SnsPageSec>
      <h1>럭킷들의 새로운 소식을 확인해보세요!</h1>
      <MainPostArea>
        {list.map((value)=> {
           return < MainSnsPost data={value} key={value._id} />
        })}
      </MainPostArea>
    </SnsPageSec>
    <NavBar />
    </>
  )
}
