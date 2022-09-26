import React, {memo, useCallback, useEffect, useRef, useState} from "react";

import {Carousel, Image} from 'antd';

import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopBannerAction} from "../../store/actionCreators";
import {getCurrentSongAction} from "../../../../../player/store/actionCreator";

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
}from './style'



export default memo(function MCTopBanner(){
  /**
   * state 区域
   */
  // state 记录banner 切换的下标
  const [currentIndex,setCurrentIndex] = useState(0)

  /**
   * redux 区域
   */
  const dispatch = useDispatch()
  // 1 组件和 redux 关联：获取数据和进行操作 , useSelector 将state映射到组件中 ，useDispatch 直接获取dispatch函数
  const {topBanners} = useSelector(state=>({
    // 方法一：因为 主store合并子store的时候使用的 immutable ,获取state需要进行get,而子store也被immutable进行了包裹，也需要get获取
    // topBanners:state.get('recommend').get('topBanners')
    // 方法二：通过迭代获取，根据数组层次依次进行获取
    topBanners:state.getIn(['recommend','topBanners'])

  }),shallowEqual)

  // console.log(topBanners)

  /**
   * hooks 区域
   */
  const bannerRef = useRef(); // 获取 走马灯组件实例
  // 生命周期hooks
  useEffect(()=>{
    // 发射banner数据请求
    dispatch(getTopBannerAction())
  },[dispatch])

  /**
   * 其他业务区域
   */

  // banner 渲染图片
  const imageBanner = (item,index) => {
      // console.log(item.targetId)
    return(
      <div className={'banner-item'} key={item.imageUrl} onClick={event => bannerClick(item.targetId)} >
        <Image className={'image'} src={item.imageUrl} alt={item.typeTitle} preview={false}/>
      </div>
    )
  }

  // banner 图片点击获取id
  const bannerClick = (id) => {
    // console.log(id)
    dispatch(getCurrentSongAction(id))
  }

  // 切换面板的回调,对函数进行 callback 包裹，能进行缓存,保证组件不会随随便便刷新
  const imageChange = useCallback((from ,to) =>{
    setTimeout(()=>{
      setCurrentIndex(to)
    },0)
  },[])
  // },[currentIndex])

  // 背景图片高斯模糊虚化拼接操作
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')

  return(
    <BannerWrapper bgImage={bgImage}>
      <div className={'banner wrap-v2'}>
        <BannerLeft>
            {/* 走马灯 banner */}
            <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={imageChange}>
              {
                topBanners.map((item,index)=>{
                  return imageBanner(item,index)
                })
              }
            </Carousel>

        </BannerLeft>
        {/* style 已经定义好了图片背景跳转 */}
        <BannerRight> </BannerRight>

        <BannerControl>
          {/* 使用组件实例 调用 走马灯 点击切换图片的方法 */}
          <button className={'btn left'} onClick={event => bannerRef.current.prev()}> </button>
          <button className={'btn right'} onClick={event => bannerRef.current.next()} > </button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
