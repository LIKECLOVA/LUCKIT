import React, { useState, useEffect } from 'react'
import { Article } from './carouselstyle'

const bannerData = [
    {
        id: 1,
        name: '광고1',
        image: 'https://pixabay.com/get/ge42b02d348e5d0ae8fa677996638b841043a769037bdd246029c8f685b37f75fb0ec3523e09665a1c2ab443da8155b5167421b0c7683f9e79f5720fd6bf22822b299a8b9461bba764364a16dd5e1f0b4_1280.jpg'
    },
    {
        id: 2,
        name: '광고2',
        image: 'https://pixabay.com/get/g381663a3f12d006db061b9d433c1de7864415869c8b108b484a891c345d6ecb61ad6195a4eb3a25446e7ec50ebee1c8c5ee4ad82d280e4c0dd81f6d393a0d1e6568a6b4c31982a0f0f9d2794dc3fd9b7_1280.jpg'
    },
    {
        id: 3,
        name: '광고3',
        image: 'https://pixabay.com/get/gc0bd4217638e85c3041930e42f53396c9af5b6dd853c3d8c4ad1e1a4259e7f443d5b9b673729b3a29ab794e340038fde82e459924de63a8db1705f87baf6e3e326cfc2020c8db9ede5d8e043d79ae7b8_1280.jpg'
    },
]

export function Carousel() {
    const banners = bannerData;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = banners.length - 1;

        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000);

        return () => {return clearInterval(slider)};
    }, [index])

  return (
    <Article>
      <ul className='bannerWrap'>
        {banners.map((banner, bannerIndex) => {
            const { id, name, image } = banner;
            let position = 'nextSlider'

            if(bannerIndex === index) {
                position = 'activeSlide';
            }
            if(bannerIndex === index -1 || 
                (index === 0 && bannerIndex === banners.length - 1)) {
                position = 'lastSlide';
            }
            return (
                <li key={id} className={position}>
                    <img src={image} alt={name} />
                </li>
            )
        })}
      </ul>
      <div className='btnWrap'>
        <button onClick={()=> {return setIndex(index-1)}} className='prevBtn'>◀️</button>
        <button onClick={()=> {return setIndex(index+1)}} className='nextBtn'>▶️</button>
      </div>
    </Article>
  )
}