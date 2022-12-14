import styled from 'styled-components'

export const Article = styled.article`

    width: 600px;
    margin: 0 auto;
    position: relative;

    .bannerWrap {
        width: 100%;
        height: 550px;
        display: flex;
        overflow: hidden;
    }

    li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
    }

    li.activeSlide {
        opacity: 1;
        transfrom : translateX(0);
    }

    li.lastSlide {
        transform: translateX(-100%);
    }

    li.nextSlide {
        transform: translateX(100%);
    }

    img {
        width: 600px;
        height: 550px;
        object-fit: cover;
        object-position: center;
    }

    button {
        position: absolute;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        color: rgba(0, 0, 0, 0.5);
        background: rgba(255,255,255, 0.4);
        border-radius: 20px;
        cursor: pointer;
    }

    .prevBtn {
        left: 10px;
        padding: 30px 20px 30px 15px;
    }

    .nextBtn {
        right: 10px;
        padding: 30px 15px 30px 20px;
    }

`