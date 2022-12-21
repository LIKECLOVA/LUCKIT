import React, { useEffect, useRef } from 'react';
import * as M from './marketinputstyle';

export const MarketInput = ({ itemName, itemDetail, setItemName, setItemDetail }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleOnChange(e) {
    const inputType = e.target.id.slice(5);

    inputType === 'Name' && setItemName(e.target.value);
    inputType === 'Detail' && setItemDetail(e.target.value);
  }

  return (
    <>
      <M.InputWrap>
        <M.TextLabel htmlFor='inputName' />
        <M.MarketInput
          id='inputName'
          type='text'
          placeholder='ex. 전시회 좋아하는 럭킷 구해요!'
          maxLength='15'
          minLength='2'
          onChange={handleOnChange}
          value={itemName}
          ref={inputRef}
        />
        <M.TextLabel htmlFor='inputDetail' />
        <M.MarketInput
          id='inputDetail'
          type='text'
          placeholder='ex. 2월부터 전시회 같이 보러 가고 싶어요!'
          onChange={handleOnChange}
          value={itemDetail}
        />
      </M.InputWrap>
    </>
  );
};
