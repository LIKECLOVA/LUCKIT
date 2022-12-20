import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {SnsPostModalWrap, CommentInp} from './snspoststyle'
import MainSnsPost from '../mainpost/mainSnsPost'
import {CommentBox} from '../comment/comment-box/commentBox'


export const SnsPost = () => {
  const {postId}=useParams()
  const [postDetail ,setPostDetail] = useState(null);
  const URL = `https://mandarin.api.weniv.co.kr/post/${postId}`;
  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';

//   console.log(URL)
//  console.log('뀨?',postId)
 const postDetailaxios = async () => {
     const res= await axios.get(URL,{   // 
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })

    setPostDetail(res.data.post)
 }

  // 팔로잉한 유저의 게시글 정보 불러오는 fetch
  // async function fetchFeedPostData(){
  //   await fetch(URL+FEED_PATH, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-type': 'application/json',
  //     },
  //   })
  //   .then(async (data) => console.log( await data.json()))
  //   // .then((data) =>  {
  //   //   console.log(data)
  //   // });
  // }

  useEffect( ()=>{
    // fetchFeedPostData();
    postDetailaxios()

  },[])

  return (
    <SnsPostModalWrap>
      <button>닫기</button>
      {postDetail !== null && < MainSnsPost data={postDetail}/>} 
      <CommentBox/>
      <CommentInp/>
    </SnsPostModalWrap>
  )
}
