import React, { useState, useEffect } from 'react'
import { Article } from './carouselstyle'

const bannerData = [
    {
        id: 1,
        name: '광고1',
        image: 'https://raw.githubusercontent.com/christianB053/likelion/develop/christmas-cookies.jpg'
    },
    {
        id: 2,
        name: '광고2',
        image: 'https://raw.githubusercontent.com/christianB053/likelion/develop/angel.jpg'
    },
    {
        id: 3,
        name: '광고3',
        image: 'https://raw.githubusercontent.com/christianB053/likelion/develop/snowman.jpg'
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
        <button onClick={()=> {return setIndex(index-1)}} className='prevBtn'></button>
        <button onClick={()=> {return setIndex(index+1)}} className='nextBtn'></button>
      </div>
    </Article>
  )
}