import React from 'react';
import { SearchHeader } from '../../components/header/header';
import { NavBar } from '../../components/navbar/navBar';
import { SearchMain } from './searchstyle'

export const Search = () => {
  return (
    <div>
      <SearchHeader />
      <SearchMain>
        <span>검색 TIP</span><p>취미 키워드를 넣어서 검색해 보세요.</p>
        <div className='searchKeyword'>
          <span>집꾸미기</span>
          <span>다꾸</span>
          <span>운동</span>
          <span>콘서트</span>
          <span>아이돌</span>
          <span>댄스</span>
          <span>전시회</span>
          <span>미술</span>
          <span>etc..</span>
        </div>
      </SearchMain>
      <NavBar />
    </div>
  );
};
