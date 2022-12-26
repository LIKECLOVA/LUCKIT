import React, { useState, useEffect } from 'react';
import { Article } from './carouselstyle';

const bannerData = [
  {
    id: 1,
    name: '광고1',
    image: 'https://user-images.githubusercontent.com/102042383/209500468-490399a9-2066-42ac-b84a-e6c5b6c4db49.png',
  },
  {
    id: 2,
    name: '광고2',
    image: 'https://user-images.githubusercontent.com/102042383/209500473-79d5ead6-291b-4bf4-9127-1ed356f44e30.png',
  },
  {
    id: 3,
    name: '광고3',
    image: 'https://user-images.githubusercontent.com/102042383/209503290-7169ccb2-84de-4d80-a808-5a9017a37e37.png',
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
