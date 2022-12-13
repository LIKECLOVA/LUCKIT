import styled from 'styled-components';

export const MarketPreviewBoxWrap = styled.div`
    height:200px;
    margin: 34px 0;
    background-color: white;

        h2 {
            font-size: 18px;
        }
    
        h2 > strong {
            font-weight: 600;
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
            width: 160px;
            background-color: #D5EBBB;
            border: 1px solid black;
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