import styled from 'styled-components';

export const MapModalWrap = styled.div`
  position: absolute;
`;

export const MapSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;

  .wrap {
    position: fixed;
    left: 360px;
    bottom: -300px;
    width: 260px;
    height: 155px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 20px;
    outline: 500px solid #a5a5a5ac;
    z-index: 5;
  }
  .wrap * {
    padding: 0;
    margin: 0;
  }
  .wrap .info {
    position: relative;
    width: 100%;
    height: 155px;
    background: #fff;
    border-radius: 20px;
  }
  .wrap .info:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .info .title {
    padding: 10px 0 0px 15px;
    height: 40px;
    background: #a1d85f;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: #fff;
  }
  .info .close {
    position: absolute;
    top: 12px;
    left: 235px;
    width: 15px;
    height: 15px;
    background: url('https://user-images.githubusercontent.com/102042383/210167055-2535026a-38d7-497a-9952-d934827afaef.png');
    background-size: cover;
  }
  .info .close:hover {
    cursor: pointer;
  }
  .info .body {
    position: relative;
    overflow: hidden;
  }
  .info .desc {
    position: relative;
    margin: 20px 0 0 145px;
    height: 75px;
  }
  .desc .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 14px;
    color: #64b603;
  }
  .desc .jibun {
    font-size: 11px;
    color: #888;
    margin-top: 10px;
  }
  .info .img {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 110px;
    height: 75px;
    border-radius: 10px;
    box-shadow: 0px 1px 3px #dbdbdb;
    overflow: hidden;
    background-size: cover;
  }

  .info .img .preview {
    object-fit: cover;
  }

  .info .link {
    color: #eb7db0 !important;
    font-size: 9px;
  }
`;
