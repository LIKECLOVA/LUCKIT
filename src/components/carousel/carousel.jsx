import React, { useState, useEffect } from 'react';
import { Article } from './carouselstyle';

const bannerData = [
  {
    id: 1,
    name: '럭킷 출시 기념, 설문 조사 참여만 해도 키링 100% 증정',
    image: 'https://user-images.githubusercontent.com/102042383/209595769-1fa34571-ac5a-4a1c-9ba6-9bfa6cf6ec4b.png',
  },
  {
    id: 2,
    name: '럭킷 취미 추천, 취향을 잇는 집 꾸미기',
    image: 'https://user-images.githubusercontent.com/102042383/209569995-dee8b50c-13aa-47a1-a420-64e368151255.png',
  },
  {
    id: 3,
    name: '럭킷 일본 가자, 오사카 여행 단독 특가 오픈',
    image: 'https://user-images.githubusercontent.com/102042383/209570001-9ac9446d-0b69-4ebf-9ffb-cf0dde3d9448.png',
  },
];

export function Carousel() {
  const banners = bannerData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = banners.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => {
      return clearInterval(slider);
    };
  }, [index]);

  return (
    <Article>
      <ul className='bannerWrap'>
        {banners.map((banner, bannerIndex) => {
          const { id, name, image } = banner;
          let position = 'nextSlider';

          if (bannerIndex === index) {
            position = 'activeSlide';
          }
          if (bannerIndex === index - 1 || (index === 0 && bannerIndex === banners.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <li key={id} className={position}>
              <img src={image} alt={name} />
            </li>
          );
        })}
      </ul>
      <div className='btnWrap'>
        <button
          onClick={() => {
            return setIndex(index - 1);
          }}
          className='prevBtn'
        ></button>
        <button
          onClick={() => {
            return setIndex(index + 1);
          }}
          className='nextBtn'
        ></button>
      </div>
    </Article>
  );
}
