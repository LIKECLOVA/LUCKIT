import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProfileAndChatHeader } from '../../components/header/header';
import MarketPostBox from '../../components/mainpost/marketPostBox';
import { MarketPreviewModal } from '../../components/modal/modal';
import { NavBar } from '../../components/navbar/navBar';
import { ListItem, ListWrap, MarketPostTitle, MarketPostWrap, MarketMoreBtn } from './marketpoststyle';
import IconMoreBtn from '../../assets/icon/s-icon-more-vertical.png'

export function MarketPost() {
  const [marketPostsData, setMarketPostsData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('Access Token');

useEffect(() => {
    axios({
        method: 'get',
        url: `https://mandarin.api.weniv.co.kr/product/${id}/?limit=20`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    }).then((res) => {
            setMarketPostsData(res.data.product);
        })
        .then((error) => {
            console.log(error);
        });
}, [])

const onClick = () => {
    setIsOpen(true);
  };

  const onClickClose = (value) => {
    setIsOpen(value);
  };
    
  return (
    <>
      <ProfileAndChatHeader />
      <MarketPostWrap>
        <h2>마켓 게시글 페이지</h2>
        <MarketPostTitle>
            <strong>{marketPostsData && marketPostsData[0].author.username}</strong> 님이 찾는 럭킷 메이트<br />
            네잎클로버를 눌러 매칭을 신청해 보세요!✨
        </MarketPostTitle>
        <main>
            <ListWrap>
            {marketPostsData &&
                marketPostsData.map((data, index) => {
                return (
                <ListItem key={Math.random()}>
                    <MarketPostBox data={data} index={index} id={id}/>
                    <MarketMoreBtn onClick={onClick}>
                        <img src={IconMoreBtn} alt='더보기 버튼'/>
                    </MarketMoreBtn>
                </ListItem>
                )
            })}
            </ListWrap>
        </main>
        {isOpen && <MarketPreviewModal onClickClose={onClickClose} />}
    </MarketPostWrap>
    <NavBar />
    </>
  )
}
