import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {SnsPostModalWrap, CloseBtn} from './snspoststyle'
import MainSnsPost from '../mainpost/mainSnsPost'
import CommentBox from '../comment/commentBox'

export const SnsPost = () => {
  const {postId}=useParams()
  const [postDetail ,setPostDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate=useNavigate();
  const token = localStorage.getItem('Access Token');
  const URL = `https://mandarin.api.weniv.co.kr/post/${postId}`;
  
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
      <div className='closeArt'>
      <CloseBtn onClick={()=>{navigate(-1)}}/>
      </div>
      <div className='SnsContentWrap'>
      {postDetail !== null && < MainSnsPost data={postDetail}/>} 
      <CommentBox postId={postId}
        comments={comments}
        getComments={getComments}/>
      </div>
    </SnsPostModalWrap>
  )
}
