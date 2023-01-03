import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';
import MainSnsPost from '../../components/mainpost/mainSnsPost';
import { SnsPageArt, SnsPageSec, MainPostArea, SnsStoryImg } from './snsstyle';
import { SnsFeedPageHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import DefaultUserImg from '../../assets/icon/basic-profile-img-.png';
import { SearchBtn } from '../../components/button/button';
import { PostUploadBtn } from '../../components/button/iconBtn';
import { AxiosFollow } from '../../reducers/getFollowSlice';
import { AxiosUserData } from '../../reducers/getUserInfoSlice';
import { Loading } from '../../components/loading/loading';

export const SnsPage = () => {
  const userToken = localStorage.getItem('Access Token');
  const myAccountName = localStorage.getItem('Account Name');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = `https://mandarin.api.weniv.co.kr`;
  const FEED_PATH = `/post/feed`;
  const STORY_PATH = `/profile/${myAccountName}/following?limit=0`;
  const USER_PATH = `/profile/${myAccountName}`;
  const dispatch = useDispatch();
  const followList = useSelector((state) => state.followInfoSlice.followData);
  const myInfo = useSelector((state) => state.userInfoSlice.userData);
  const [numFeed, setNumFeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();

  // 피드 데이터 받아오는 함수
  const getFeedPostData = useCallback(async () => {
    const option = {
      url: `${URL}${FEED_PATH}?limit=10&skip=${numFeed}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };

    setLoading(true);

    await axios(option)
      .then((res) => {
        // 원래list에 새list 붙이기
        setList(list.concat(res.data.posts));
        setLoading(false);
        setIsLoading(false);
        if (res.data.posts.length < 10) {
          setDone(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [numFeed]);

  useEffect(() => {
    getFeedPostData();
    dispatch(AxiosFollow(URL + STORY_PATH));
    dispatch(AxiosUserData(URL + USER_PATH));
  }, []);

  useEffect(() => {
    if (!done) {
      getFeedPostData();
    }
  }, [numFeed]);

  useEffect(() => {
    //  inview===true 이고 로딩중이 아닐 때
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
    }
  }, [inView, loading]);

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LUCKIT - Sns피드</title>
          <meta name='description' content='럭킷 Sns피드입니다. 럭킷메이트들의 새로운 소식을 확인해보세요! ' />
        </Helmet>
      </HelmetProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SnsFeedPageHeader />
          <SnsPageArt>
            <ul>
              <NavLink to={`/profile/${myAccountName}`}>
                <li>
                  <SnsStoryImg src={myInfo.image} onError={onErrorImg} />
                </li>
              </NavLink>
              {followList.map((story) => {
                return (
                  <NavLink key={story._id} to={`/profile/${story.accountname}`}>
                    <li>
                      <SnsStoryImg src={story.image} onError={onErrorImg} />
                    </li>
                  </NavLink>
                );
              })}
              {}
            </ul>
          </SnsPageArt>
          {followList.length === 0 ? (
            <SnsPageSec className='SnsDefalutPage'>
              <p className='SnSText'>
                럭킷들을 팔로우하고
                <br />
                다양한 소식을 받아보세요!
              </p>
              <NavLink to='/search'>
                <SearchBtn size='middle' />
              </NavLink>
            </SnsPageSec>
          ) : (
            <SnsPageSec>
              <h1>럭킷들의 새로운 소식을 확인해보세요! ✨</h1>
              <MainPostArea>
                {list.map((post, i) =>
                  // 마지막 요소에 ref추가 (ref보이면 이벤트실행)
                  list.length - 2 === i ? (
                    <div key={post.id} ref={ref} />
                  ) : (
                    <div key={post.id}>
                      <MainSnsPost data={post} />
                    </div>
                  )
                )}
              </MainPostArea>
            </SnsPageSec>
          )}
          <PostUploadBtn pathName='/snsupload' />
          <NavBar />
        </>
      )}
    </>
  );
};
