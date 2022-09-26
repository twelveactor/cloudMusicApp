import React,{memo} from "react";
import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";

import {
  dicoverMenu
}from '@/common/local-data'

import {
  DiscoverWrapper,
  TopMenu
}from './style'

// 发现页面
export default memo(function MCDiscover(props) {
  // 获取当前路由
  const { route } = props
  // console.log(route)


  // header underline Menu
  const underlineMenuData=(item,index)=>{
    return(
      <div key={item.title} className={'item'}>
        <NavLink to={item.link}>{item.title}</NavLink>
      </div>
    )
  }

  return (
     <DiscoverWrapper>
       <div className={'top'}>
         <TopMenu className={'wrap-v1'}>
           {
             dicoverMenu.map((item,index)=>{
               return underlineMenuData(item,index)
             })
           }
         </TopMenu>
       </div>

       {/* 导入当前路径子路由 */}
       { renderRoutes(route.routes) }
     </DiscoverWrapper>
  );
})