import React from 'react';
import { TextLabel, MarketInput } from './marketuploadstyle';

export const TitleInput = ({ setTitle, defaultValue }) => {
  return (
    <>
      <TextLabel>
        제목
        <MarketInput
          key={defaultValue}
          placeholder='ex. 전시회 같이 보러갈 럭킷 구해요!'
          type='text'
          name='Title'
          minLength='2'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          defaultValue={defaultValue}
        />
      </TextLabel>
    </>
  );
};

export const DetailInput = ({ setDetail, defaultValue }) => {
  <TextLabel>
    제목
    <MarketInput
      key={defaultValue}
      placeholder='2월부터 전시회 같이 보러 다녀용'
      type='text'
      name='Detail'
      minLength='2'
      onChange={(e) => {
        setDetail(e.target.value);
      }}
      defaultValue={defaultValue}
    />
  </TextLabel>;
};
