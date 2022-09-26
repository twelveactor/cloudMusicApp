import React, {memo} from 'react';
import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/formCount'
import {NavLink} from "react-router-dom";

export default memo(function MCAlbumCover(props) {
  const { item, size = 130, width = 153, bgp = "-845px" } = props;

  // const InlinkPage = [{
  //   title:'专辑歌单',
  //   link:'/albumsonglist'
  // }]


  // // 获取当前 点击 专辑的 数据
  // const albumClick = (item) => {
  //   console.log(item)
  //   console.log(props.history)
  //   console.log(props.route.routes)
  // }



  return (
    <NavLink to={`/discover/albumsonglist?${item.id}`}>

      <AlbumWrapper size={size} width={width} bgp={bgp} >
        <div className={'album-image'}>
          <img src={getSizeImage(item.picUrl,size)} alt=""/>
          <span className={'cover image_cover'}> </span>
          {/*{*/}
          {/*  InlinkPage.map(item=>{*/}
          {/*    return (*/}
          {/*      <NavLink to={item.link} key={item.title}/>*/}
          {/*    )*/}
          {/*  })*/}
          {/*}*/}
        </div>
        <div className={'album-info'}>
          <div className={'name'}>{item.name}</div>
          <div className={'artist'}>{item.artist.name}</div>
        </div>
      </AlbumWrapper>

   </NavLink>
  )
})
