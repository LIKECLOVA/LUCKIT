import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle';
import IconMarketPostUpload from '../../assets/icon/market-plus.png';
import { MarketPreviewModal } from '../modal/modal';

export const MarketPreviewPost = ({ marketPostsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem('Account Name');
  const { id } = useParams();

  const onClick = () => {
    setIsOpen(true);
  };

  const onClickClose = (value) => {
    setIsOpen(value);
  };

  return (
    <MarketPreviewBoxWrap>
      {marketPostsData.length !== 0 ? (
        <>
          <div className='headingWrap'>
            <h2>
              <strong>{accountName}</strong>님이 찾는 럭킷 메이트✨
            </h2>
            <Link to='#'>
              <img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼' />
            </Link>
          </div>
          <ul>
            {marketPostsData &&
              marketPostsData.map((post) => {
                return (
                  <li key={post.id}>
                    {accountName === id ? (
                      <>
                        <button onClick={onClick}>
                          <p>{post.itemName}</p>
                          <img src={post.itemImage} />
                        </button>
                      </>
                    ) : (
                      <NavLink to='#'>
                        <p>{post.itemName}</p>
                        <img src={post.itemImage} />
                      </NavLink>
                    )}
                  </li>
                );
              })}
          </ul>
          {isOpen && <MarketPreviewModal onClickClose={onClickClose} />}
        </>
      ) : (
        <>
          <div className='headingWrap'>
            <h2>
              <strong>{accountName}</strong>님이 찾는 럭킷 메이트✨
            </h2>
            <Link to='#'>
              <img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼' />
            </Link>
          </div>
        </>
      )}
    </MarketPreviewBoxWrap>
  );
};
