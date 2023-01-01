import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { SearchListWrap, Span, Div, SearchResult, H2, SnsProfileWrap, AuthorNavLink, AuthorImgNavLink, NoResultTxt, DefaultWrap, SearchMain } from './searchstyle'
import DefaultUserImg from '../../assets/icon/basic-profile.png'

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [searchUserData, setSearchUserData] = useState([]);
  const userToken = localStorage.getItem("Access Token");

  useEffect(() => {

    if(keyword) {
      axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
        headers: {
          'Authorization': `Bearer ${userToken}`,
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
      <H2>검색 페이지</H2>
      <SearchMain>
        { searchUserData && keyword ? 
            <SearchListWrap>
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
            </SearchListWrap>
           : 
            <DefaultWrap>
              <span>검색 TIP</span><p>취미 키워드를 넣어서 검색해 보세요.</p>
              <ul className='searchKeyword'>
                <li>집꾸미기</li>
                <li>여행</li>
                <li>베이킹</li>
                <li>사진</li>
                <li>다이어리 꾸미기</li>
                <li>콘서트</li>
                <li>아이돌</li>
                <li>댄스</li>
                <li>전시회</li>
                <li>미술</li>
                <li>etc..</li>
              </ul>
            </DefaultWrap>
          }
        { searchUserData.length === 0 && keyword.length >= 1 &&
            <NoResultTxt>검색 결과가 없습니다.</NoResultTxt>
        }
      </SearchMain>
      <NavBar />
    </>
  );
};
