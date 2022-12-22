import React, { useEffect, useRef, useState } from 'react';
import * as M from './marketinputstyle';

export const MarketInput = ({ itemName, itemDetail, setItemName, setItemDetail, setIsActive, setIsDisabled }) => {
  const inputRef = useRef();
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [detailErrorMessage, setDetailErrorMessage] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (itemName.length > 1 && itemDetail.length > 1) {
      setIsActive(true);
      setIsDisabled(false);
    } else {
      setIsActive(false);
      setIsDisabled(true);
    }
  });

  useEffect(() => {
    if (itemName.length < 2 && itemName !== '') {
      setNameErrorMessage('2 - 15글자 이내로 입력해주세요.');
    } else if (itemName === '') {
      setNameErrorMessage('');
    } else {
      setNameErrorMessage('');
    }
  }, [itemName]);

  useEffect(() => {
    if (itemDetail.length < 2 && itemDetail !== '') {
      setDetailErrorMessage('2글자 이상 입력해주세요.');
    } else if (itemDetail === '') {
      setDetailErrorMessage('');
    } else if (itemDetail.length > 10) {
      setDetailErrorMessage('친절한 럭킷님이시군요! 럭킷 매칭 확률이 높아지고 있어요!');
    } else {
      setDetailErrorMessage('');
    }
  }, [itemDetail]);

  function handleOnChange(e) {
    const inputType = e.target.id.slice(5);

    inputType === 'Name' && setItemName(e.target.value);
    inputType === 'Detail' && setItemDetail(e.target.value);
  }

  return (
    <>
      <M.TextLabel htmlFor='inputName'>내가 찾는 럭킷은?</M.TextLabel>
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
      <M.ErrorMessage>{nameErrorMessage} </M.ErrorMessage>
      <M.TextLabel htmlFor='inputDetail'>간단하게 설명 부탁드려요!</M.TextLabel>
      <M.MarketInput
        id='inputDetail'
        type='text'
        placeholder='ex. 2월부터 전시회 같이 보러 가고 싶어요!'
        minLength='2'
        onChange={handleOnChange}
        value={itemDetail}
      />
      <M.ErrorMessage>{detailErrorMessage} </M.ErrorMessage>
    </>
  );
};
