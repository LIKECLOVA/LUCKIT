import styled from 'styled-components';

export const MarketPreviewBoxWrap = styled.div`
    height:200px;
    margin: 0 0 55px;
    background-color: white;

    .headingWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 16px;
        }
    
        h2 > strong {
            font-size: 20px;
            font-weight: 600;
            margin-right: 3px;
        }

        img {
            width: 25px;
            height: 25px;
            padding: 7px;
            border-radius: 50%;
            background-color: #F5F3F3;
            vertical-align: top;
        }
    }


        ul {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
            gap: 20px;
            margin-top: 20px;
        }
    
        li {
            flex-shrink: 0;
            width: 180px;
            border: 2px solid #F1F1F1;
            border-radius: 10px;
            overflow: hidden;
        
        p {
            text-align: center;
            padding: 8px;
            dispaly: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
        
        }
    
        img {
            width: 100%;
            height: 110px;
            object-position: center;
            object-fit: cover;
            vertical-align: top;
        }

    }

`