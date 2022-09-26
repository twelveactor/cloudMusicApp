import React, {memo, useEffect, useRef} from 'react';

import { Carousel } from 'antd';

import {AlbumWrapper} from './style'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getNewAlbumAction} from "../../store/actionCreators";
import MCAlbumCover from '@/components/album-cover/album-cover'

export default memo(function MCNewAlbum() {
  /**
   * state 区域
   */


  /**
   * redux 区域
   */
    // 拿到获取 dispatch 的hook方法
    const dispatch = useDispatch()
    const {newAlbums} = useSelector((state)=>({
      newAlbums:state.getIn(['recommend','newAlbums'])
    }),shallowEqual)

  /**
   * hooks 区域
   */
  useEffect(()=>{
    dispatch(getNewAlbumAction())
  },[dispatch])


  /**
   * 其他业务区域
   */
  const CarouselRef = useRef()
  const handleCarousel = (handles) => {
    if (handles === 'left'){
      CarouselRef.current.prev()
    }
    if (handles === 'right'){
      CarouselRef.current.next()
    }
  }


  return (
    <AlbumWrapper>
      <ThemeHeaderRecommend  title={'新专辑'} />
      <div className={'content'}>
        {/* 控制左右图标sprite_02精灵图  */}
        <button className={'arrow arrow-left sprite_02'} onClick={event => handleCarousel('left')}> </button>

        <div className={'album'}>
          <Carousel ref={CarouselRef} dots={false}>
            {
              [0,1].map(item=>{
                return (
                  <div key={item} className={'page'}>
                    {
                      newAlbums.slice(item * 5,(item + 1)*5).map(iten=>{
                        // console.log(newAlbums.slice(item * 5,(item + 1)*5))
                        return <MCAlbumCover key={iten.id} item={iten} size = {100} width = {118} bgp="-570px" />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <button className={'arrow arrow-right sprite_02'} onClick={event => handleCarousel('right')}> </button>
      </div>
    </AlbumWrapper>
  )
})
