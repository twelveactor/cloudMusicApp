import React, {memo,useEffect} from "react";

import {HotRecommendWrapper} from './style'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getHotRecommendsAction} from "../../store/actionCreators";
import MCSongsCover from '@/components/songs-cover/songs-cover'

export default memo(function MCHotRecommend(){
  /**
   * state 区域
   */

  /**
   * redux 区域
   */
  // 拿到获取 dispatch 的hook方法
  const dispatch = useDispatch()
  // 通过 useSelect 拿到 redux 保存的数据
  const { hotRecommends } = useSelector((state)=>({
    hotRecommends:state.get('recommend').get('hotRecommends')
  }),shallowEqual)

  /**
   * hooks 区域
   */
  useEffect(()=>{
    dispatch(getHotRecommendsAction(8))
  },[dispatch])

  /**
   * 其他业务区域
   */



  return(
   <HotRecommendWrapper>
     <ThemeHeaderRecommend title={'热门推荐'} keywordList={['未知']}/>
     <div className={'recommend-list'}>
       {
         hotRecommends.map(item=>{
           return <MCSongsCover info={item} key={item.id}/>
         })
       }
     </div>
   </HotRecommendWrapper>
  )
})
