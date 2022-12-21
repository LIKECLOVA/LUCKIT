import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {SnsPostModalWrap} from './snspoststyle'
import MainSnsPost from '../mainpost/mainSnsPost'
import CommentBox from '../comment/commentBox'


export const SnsPost = () => {
  const {postId}=useParams()
  const [postDetail ,setPostDetail] = useState(null);
  const [comments, setComments] = useState([]);

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

 const getComments = () => {
  axios({
    url: `https://mandarin.api.weniv.co.kr/post/${postId}/comments?limit=10`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      setComments(res.data.comments);
    })
    .catch((error) => {
      console.log(error);
    });
};

  useEffect( ()=>{
    postDetailaxios()
    getComments()
  },[])

  console.log('뭐얌',comments)

  return (
    <SnsPostModalWrap>
      <button>닫기</button>
      {postDetail !== null && < MainSnsPost data={postDetail}/>} 
      <CommentBox postId={postId}
        comments={comments}
        getComments={getComments}/>
    </SnsPostModalWrap>
  )
}
