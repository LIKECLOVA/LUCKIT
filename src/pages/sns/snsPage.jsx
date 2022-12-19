import React,{ useEffect , useState} from 'react';
import MainSnsPost from '../../components/mainpost/mainSnsPost'
import { SnsPageArt, SnsPageSec, MainPostArea } from './snsstyle';
import { FeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';


export const SnsPage = () => {
  
  const [list ,setList] = useState([]);
  const [followList,setFollowList] = useState([]);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  const STORY_PATH=`/profile/fffffff/following`;
  const USER_PATH=`/user/myinfo`;
  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';
  
  // 팔로잉한 유저의 게시글 정보 불러오는 fetch
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
    });
  }
// 팔로잉한 유저 프로필 정보 불러오는 fetch
  async function fetchUserStoryData() {  
    await fetch( URL+STORY_PATH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) =>setFollowList([...data]))
      // 내 프로필 정보 불러오는 fetch
      await fetch( URL+USER_PATH, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },  
  })
      .then((data) => data.json())
      .then((data) => {
        const myStoryImg = {image : data.user.image}

        setFollowList(value => [ myStoryImg, ...value] )
      })
}

  useEffect( ()=>{
    fetchFeedPostData();
    fetchUserStoryData();
  },[])

  return (
    <>
    <FeedPageHeader />
    <SnsPageArt>
      <ul>
      {followList.map((story)=> {
           return <li><img src={story.image} /></li>
        })}
      {}
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
