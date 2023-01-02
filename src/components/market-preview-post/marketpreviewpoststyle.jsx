import styled from 'styled-components';

export const MarketPreviewBoxWrap = styled.section`
  height: 186px;
  margin: 0 0 30px;

  h2 {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export const HeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 12px;
  }

  h3 > strong {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-right: 3px;
  }
`;

export const MarketPostWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    margin-top: 15px;
    /* overflow-y: hidden;
    overflow-x: auto; */
    ::-webkit-scrollbar {
    height: 1.4rem;
    }
    ::-webkit-scrollbar-thumb {
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
    border: 0.5rem solid #fff;
    }
    ::-webkit-scrollbar-track {
    }

    .noPostBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            margin: 10px 0;
        }

        p {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.5)
    font-weight: 300;
        }
    }
`;

export const MarketPostList = styled.li`
  flex-shrink: 0;
  width: 140px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 5px #e8e8e8;
  border-radius: 10px;
  overflow: hidden;

  p {
    text-align: center;
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  img {
    width: 100%;
    height: 90px;
    object-position: center;
    object-fit: cover;
    vertical-align: top;
    border-radius: 10px;
    box-shadow: 0 -2px 1px 0 #f1f1f1;
  }
`;
