import React,{ useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom'
import MainSnsPost from '../../components/mainpost/mainSnsPost'
import { SnsPageArt, SnsPageSec, MainPostArea, SnsStoryImg, AddBtn} from './snsstyle';
import { FeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png'
import {SerchBtn} from '../../components/button/button'


export const SnsPage = () => {

  const [list ,setList] = useState([]);
  const [followList,setFollowList] = useState([]);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  const STORY_PATH=`/profile/clover3/following`;
  const USER_PATH=`/user/myinfo`;
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTFkOGFiMTdhZTY2NjU4MWQ4OTNkNyIsImV4cCI6MTY3NjczNTE2MCwiaWF0IjoxNjcxNTUxMTYwfQ.mZ65WvbPOHTMjCBes56OHWVcTBH-yPHsRrlQvorojEQ";
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';
  
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
      .then((data) =>{setFollowList([...data])
      })
      // 내 프로필 정보 불러오는 fetch
      await fetch( URL+USER_PATH, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },  
  })
      .then((data) => data.json())
      .then((data) => {
        const myStoryImg = {image : data.user.image, accountname:data.user.accountname, following: data.user.following}
        
        setFollowList(value => [ myStoryImg, ...value] )
      })
}

  useEffect( ()=>{
    fetchFeedPostData();
    fetchUserStoryData();
  },[])

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  }

  return (
    <NavLink>
    <FeedPageHeader />
    <SnsPageArt>
      <ul>
      {followList.map((story)=> {
           return<NavLink to={`/profile/${story.accountname}`}><li><SnsStoryImg src={story.image} onError={onErrorImg} /></li></NavLink>
        })}
      {}
      </ul>
    </SnsPageArt>
    {followList.length === 1 ? 
    <SnsPageSec className='test1'>
    <h1>새로운 럭킷을 찾아보세요!</h1>
    <SerchBtn size='middle'>검색하기</SerchBtn>
    </SnsPageSec>
    :
    <SnsPageSec>
      <h1>럭킷들의 새로운 소식을 확인해보세요!</h1>
      <MainPostArea>
        {list.map((value)=> {
           return < MainSnsPost data={value} key={value._id} />
        })}
      </MainPostArea>
    </SnsPageSec>
    }
    
    <NavLink to={'/snsupload'}>
    <AddBtn />
    </NavLink>
    <NavBar />
    </NavLink>
  )
}
