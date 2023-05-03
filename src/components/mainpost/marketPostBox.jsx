import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { CardWrap, CardCont, CardTitle, CardTxt, CardUser, CardImg } from './marketpostboxstyle';
import IconSnsClova from '../../assets/icon/sns용-클로바-disabled.png';
import IconSnsClovaFill from '../../assets/icon/sns용-클로바.png';
import { MarketPostMoreBtn } from '../button/iconBtn';
import DefaultUserImg from '../../assets/icon/basic-profile.png';

export default function MarketPostBox({ data, accountname }) {
  const [confirmedValue, setConfirmedValue] = useState(JSON.parse(localStorage.getItem('stored')));
  const myAccountName = localStorage.getItem('Account Name');

  const onClickApplyBtn = (e) => {
    const targetId = e.currentTarget.id;

    Swal.fire({
      imageUrl:
        'https://user-images.githubusercontent.com/102042383/210169119-cd6360aa-d675-4766-94b6-dcb76b05c632.gif',
      width: 390,
      imageWidth: 380,
      imageHeight: 300,
      showCancelButton: true,
      cancelButtonText: '럭킷 매칭 취소',
      confirmButtonText: '럭킷 매칭 신청',
      confirmButtonColor: '#66b607',
      background: 'none',
      backdrop: `
       #ffffff92
    url("https://img1.picmix.com/output/stamp/normal/6/4/9/3/2063946_9932b.gif")
    center top
    no-repeat
  `,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: 340,
          position: 'center',
          icon: 'success',
          title: "<p style='font-size:20px; padding:20px; '>신청이 완료되었습니다!</p>",
          showConfirmButton: false,
          timer: 1500,
          backdrop: `
          rgba(0,0,0,.4)
    url("https://media1.giphy.com/media/J2UTOBXizlRujwpq0K/giphy.gif?cid=ecf05e47zsvvxoo2l97k557epdyn47z5x7ki7yl1x0k8vywu&rid=giphy.gif&ct=s")
    center top
    no-repeat
  `,
        });
        const obj = { ...confirmedValue };

        obj[targetId] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj));
        setConfirmedValue(obj);
      } else {
        const obj = { ...confirmedValue };

        obj[targetId] = result.isConfirmed;
        localStorage.setItem('stored', JSON.stringify(obj));
        setConfirmedValue(obj);
      }
    });
  };

  const onErrorImg = (e) => {
    e.target.src = DefaultUserImg;
  };

  return (
    <CardWrap>
      <CardImg src={data.itemImage?.includes("mandarin.api") ? data.itemImage.replace("mandarin.api", "api.mandarin") : data.itemImage} onError={onErrorImg} />
      <CardCont>
        <CardTitle>{data.itemName}</CardTitle>
        <CardTxt>{data.link}</CardTxt>
        <CardUser>FROM. {data.author.username}</CardUser>
        {accountname !== myAccountName ? (
          <>
            <button onClick={onClickApplyBtn} id={data.id}>
              {confirmedValue && confirmedValue[data.id] ? (
                <>
                  <img src={IconSnsClovaFill} alt='취미 메이트 신청 버튼' />
                </>
              ) : (
                <>
                  <img src={IconSnsClova} alt='취미 메이트 신청 버튼' />
                </>
              )}
            </button>
          </>
        ) : (
          <></>
        )}
      </CardCont>
      <MarketPostMoreBtn productId={data.id} />
    </CardWrap>
  );
}
