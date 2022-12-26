import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { SearchMain, SearchListWrap, Span, Div, NoResultWrap, SearchResult } from './searchstyle'
import { SnsProfileWrap, AuthorNavLink, AuthorImgNavLink } from '../profile/myprofilestyle';
import DefaultUserImg from '../../assets/icon/basic-profile.png'

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [searchUserData, setSearchUserData] = useState([]);
  const token = localStorage.getItem("Access Token");

  useEffect(() => {

    if(keyword) {
      axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
        setSearchUserData(res.data);
        })
        .then((error) => {
          console.log(error);
        });
    }
  }, [keyword])

  const onChange = ((event) => {
    setKeyword(event.target.value)
  })

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  }

  const KeywordColor = ({ user, word, type }) => {
    return user.includes(word) ? (
        <Div type={type}>
          {user.split(word)[0]}
          <Span>{keyword}</Span>
          {user.split(word)[1]}
        </Div>
    ) : (
        <Div type={type}>{user}</Div>
    );
};

  return (
    <>
      <SearchHeader value={keyword} onChange={onChange}/>
      {keyword && searchUserData ? 
        <SearchListWrap>
          <ul>
          {searchUserData && searchUserData.map((user, index) => {
            return (
              <li key={index}>
                <SnsProfileWrap>
                  <AuthorImgNavLink to={`/profile/${user.accountname}`}>
                    <img src={user.image} onError={onErrorImg} alt="프로필이미지" />
                  </AuthorImgNavLink>
                  <AuthorNavLink to={`/profile/${user.accountname}`}>
                    <KeywordColor user={user.username} word={keyword} type='username' />
                    <SearchResult>
                      <span>@</span>
                      <KeywordColor user={user.accountname} word={keyword}type='accountname' />
                  </SearchResult>
                  </AuthorNavLink>
                </SnsProfileWrap>
              </li>
            )
          })}
          </ul>
        </SearchListWrap> : 
        <SearchMain>
          <span>검색 TIP</span><p>취미 키워드를 넣어서 검색해 보세요.</p>
          <ul className='searchKeyword'>
            <li>인테리어</li>
            <li>다이어리 꾸미기</li>
            <li>운동</li>
            <li>게임</li>
            <li>독서</li>
            <li>콘서트</li>
            <li>아이돌</li>
            <li>댄스</li>
            <li>전시회</li>
            <li>미술</li>
            <li>etc..</li>
          </ul>
        </SearchMain>
        }
      { searchUserData.length === 0 && keyword.length >= 1 &&
        <NoResultWrap>
          <p>검색 결과가 없습니다.</p>
        </NoResultWrap>}
      <NavBar />
    </>
  );
};
