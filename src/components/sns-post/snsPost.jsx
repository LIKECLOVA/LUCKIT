import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import {SnsPostModalWrap, CloseBtn, PostDetailWrap} from './snspoststyle'
import MainSnsPost from '../mainpost/mainSnsPost'
import CommentBox from '../comment/commentBox'


export const SnsPost = () => {
  const {postId}=useParams()
  const [postDetail ,setPostDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate=useNavigate();
  const token = localStorage.getItem('Access Token');
  const URL = `https://mandarin.api.weniv.co.kr/post/${postId}`;
  
 const postDetailaxios = async () => {
     const res= await axios.get(URL,{
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

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>LUCKIT - 게시글 상세페이지</title>
        <meta name='description' content='럭킷 채팅 페이지입니다. 럭킷메이트들과 대화를 나눠보세요!'/>
        </Helmet>
    </HelmetProvider>
    <PostDetailWrap>
    <SnsPostModalWrap>
      <div className='closeArt'>
      <CloseBtn onClick={()=>{navigate(-1)}}/>
      </div>
      <div className='SnsContentWrap'>
      {postDetail !== null && < MainSnsPost data={postDetail}/>} 
      <div className='SnsCommentWrap'>
      <CommentBox postId={postId}
        comments={comments}
        getComments={getComments}
        />
        </div>
      </div>
    </SnsPostModalWrap>
    </PostDetailWrap>
    </>
  )
}