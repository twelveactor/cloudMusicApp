import React, { memo } from 'react'
import {UserLoginWrapper} from "./style";

export default memo(function MCUserLogin() {
  return (
    <UserLoginWrapper className={'sprite_02'}>

      <div className={'user-login-bg '}>
        <p className={'login-text'}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a className={'login-btn sprite_02'} href={'#/'}>用户登录</a>
      </div>

    </UserLoginWrapper>
  )
})
