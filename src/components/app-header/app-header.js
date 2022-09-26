import React, { memo} from "react";

import {headerLinks} from '@/common/local-data' // header 本地数据

import {NavLink} from "react-router-dom";
import {Input} from "antd"; // 引入 ant 组件
import {SearchOutlined} from '@ant-design/icons'; // 引入 ant 图标

// import MCLogin from '../../pages/login/login'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
}from './style'


export default memo(function MCAppHeader() {

  // const [sign,setSign] = useState(false)

  // title 标签遍历
  const showSelectItem = (item,index) => {
    if (index < 3){
      return (
        <NavLink to={item.link} key={item.title}>{item.title}
          <i className="sprite_01 icon" />
        </NavLink>
      )
    }else{
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  // const loginCheck = (item) =>{
  //   setSign(item)
  // }


  return (
    <HeaderWrapper>
      {/* header 栏*/}
      <div className={'header-context wrap-v1'}>

        {/* 左边图标 */}
        <HeaderLeft>
          <a href="/#" className={'logo sprite_01'}>网易云音乐</a>
          <div className={'select-list'}>
            {
              headerLinks.map((item,index)=>{
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>

        {/* 右边 点击栏 */}
        <HeaderRight>
          <Input placeholder={'音乐/视频/用户'}
                 prefix={[<SearchOutlined key={'headerSearchOutlined'}/>]}
                 className={'search'}/>
          <div className={'center'}>创作者中心</div>
          <div>登录</div>
          {/*<div onClick={loginCheck}>登录</div>*/}
          {/*<MCLogin loginModalOpen={item =>loginCheck(item)} sign={sign}/>*/}
        </HeaderRight>

      </div>
      {/* header 栏下划线内容 */}
      <div className={'header-underline'}> </div>
    </HeaderWrapper>
  );
})