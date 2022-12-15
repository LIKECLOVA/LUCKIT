import React from 'react'
import { Button,FollowButton } from './buttonstyle'

export const NextBtn = ({size}) => {
  return (
    <Button size={size}>다음</Button>
  )
}

export const FollowBtn = ({size,onClick,isFollow }) => {
 
  return <FollowButton isFollow={isFollow} onClick={ onClick } size={size}>{isFollow ? '취소': '팔로우'}</FollowButton>
}

export const StoreBtn = ({size}) => {
  return <Button size={size}>저장</Button>
}

export const UploadBtn = ({size}) => {
  return <Button size={size}>업로드</Button>
}

