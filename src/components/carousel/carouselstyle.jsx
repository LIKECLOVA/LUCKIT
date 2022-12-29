import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .bannerWrap {
    width: 100%;
    height: 420px;
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
    transfrom: translateX(0);
  }

  li.lastSlide {
    transform: translateX(-100%);
  }

  li.nextSlide {
    transform: translateX(100%);
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: center;
  }

  button {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    background: transparent;
    border-radius: 20px;
    cursor: pointer;
    padding: 110px 80px;
  }

  .prevBtn {
    left: 10px;
  }

  .nextBtn {
    right: 10px;
  }
`;
