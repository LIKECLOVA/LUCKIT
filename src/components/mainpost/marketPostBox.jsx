import React, { useState } from 'react'
import Swal from 'sweetalert2';
import {
  CardWrap,
  CardCont,
  CardTitle,
  CardTxt,
  CardUser,
  CardImg,
} from './marketpostboxstyle';
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png';
import IconSnsClovaFill from '../../assets/icon/sns용-클로바.png';

export default function MarketPostBox({data, index, id}) {
  const [confirmedValue, setConfirmedValue] = useState(JSON.parse(localStorage.getItem('stored')));
  const myAccountName = localStorage.getItem("Account Name");

  const onClickApplyBtn = (e) => {
    const tarketId = e.currentTarget.id;

    Swal.fire({
      title: "<p style='font-size:20px; padding:20px;'>취미 메이트를 신청할까요?</p>",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: '신청',
      confirmButtonColor: "#66b607",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("<p style='font-size:20px'>신청되었습니다.</p>", '', 'success');
        const obj = {...confirmedValue};
      
        obj[tarketId] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValue(obj)
      }else {
        const obj = {...confirmedValue};

        obj[tarketId] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj))
        setConfirmedValue(obj)
      }
    })
}

  return (
    <CardWrap>
      <CardImg src={data.itemImage}/>
      <CardCont>
          <CardTitle>{data.itemName}</CardTitle>
          <CardTxt>{data.link}</CardTxt>
          <CardUser>FROM. {data.author.username}</CardUser>
          {id !== myAccountName ? <>
          <button onClick={onClickApplyBtn} id={index}>
            {confirmedValue && confirmedValue[index] ? <>
            <img src={IconSnsClovaFill} alt='취미 메이트 신청 버튼'/>
            </> : <>
            <img src={IconSnsClova} alt='취미 메이트 신청 버튼'/>
            </>}
          </button>
          </> : <></>}
      </CardCont>
    </CardWrap>
  )
}
