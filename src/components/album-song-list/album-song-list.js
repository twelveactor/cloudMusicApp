import React, {memo, useEffect, useState,useRef} from 'react';
import MCNotData from '@/components/not-data/not-data'
import {getAlbumList} from  '@/network/player'
import {AlbumListWrapper, AlbumSongListWrapper, TopInfoWrapper} from "./style";
import {formatDate, getSizeImage,formatMinuteSecond} from "../../utils/formCount";
import {RightOutlined,UpOutlined} from '@ant-design/icons'; // 引入 ant 图标
import { Table } from 'antd';
import {useDispatch} from "react-redux";
import {getCurrentSongAction} from "../../pages/player/store/actionCreator";

export default memo(function MCAlbumSongList(props) {
  // 保存 路由传递 过来的 专辑 id
  const id = props.location.search?.split('?')[1]

  /**
   * state Area
   */
  const [albumList,setAlbumList] = useState({})
  const [showOrHide,setShowOrHide] = useState(false)
  // 保存当前点击的专辑中单曲行数据
  const [rowSing,setRowSing] = useState({})
  // 保存当前 专辑 中所有歌曲，方便全部播放
  const [allSongList] = useState([])

  // 图标x y
  const [tagXY] = useState({x:0,y:-100})

  // dom 实例
  const descriptionRef = useRef();

  // 歌手基本信息
  const singerName = (albumList.album && albumList.album.artist.name) || '未知'
  // description 专辑介绍
  const singerDescription = albumList.album && albumList.album.description.split('\n')
  /**
   * redux Area
   */
  // 派发 redux 请求
  const dispatch = useDispatch()

  /**
   * hooks Area
   */
  useEffect(()=>{
    // 获取 专辑 数据
    if (id){
      getAlbumList(id).then(res=>{
      // console.log(res)
      setAlbumList(res)
    })
}
  },[id])

  // 专辑 单曲 点击
  useEffect(()=>{
    if (Object.keys(rowSing).length !== 0){
      dispatch(getCurrentSongAction(rowSing.key))
    }
  },[dispatch,rowSing])
  useEffect(()=>{
    if (allSongList.length !== 0){
      allSongList.map(item => {
        console.log(item)
        return dispatch(getCurrentSongAction(item.key))
      })
    }
  },[dispatch,allSongList])

  /**
   * handleClick Area
   */
  // 控制展示收起按钮
  const handleShowOrHide = () => {
    setShowOrHide(!showOrHide)
    if (showOrHide){
      descriptionRef.current.style.display = '-webkit-box'
    }else{
      descriptionRef.current.style.display = 'block'
    }
  }

  // 点击播放图标 拿到每行数据
  // const rowClick = (row) =>{console.log(row)}
  const playerClick = (record,index) => {
    // console.log(record)
    // click current sava row data
    setRowSing(record)
  }



  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      // render	生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
      render: (text,record, index) => (
        <div className={'index-info'} >
          <span>{text}</span>
          <a href={'#/'} className={`index-icon sprite_table ${index === rowSing.index-1 ? 'icon-active':''}`}
             onClick={event => playerClick(record,index)}> </a>
        </div>
      ),
    },
    {
      title: '歌曲标题',
      dataIndex: 'songTitle',
      key: 'songTitle',
      render:(title)=>(
        <div className={'song-title'}>
          <span>{title}</span>
          <a href={'#/'} className={'title-name sprite_table'}> </a>
        </div>
      )
    },
    {
      title: '时长',
      dataIndex: 'time',
      key: 'time',
      render:(time)=>(
        <div>
          <a href={'#/'}>{time}</a>
        </div>
      )
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
      render:(singer)=>(
        <div>
          <a href={'#/'}>{singer}</a>
        </div>
      )
    }
  ];

  // 配置列表数据
  const data = [
    // {
    //   key: '1',
    //   index:'1',
    //   songTitle: 'John Brown',
    //   time: 32,
    //   singer: 'New York No. 1 Lake Park'
    // }
  ];
  const songsList = albumList.songs || []
  songsList.map((item,index)=>{
    const dataObj = {
      key:item.id,
      index:index + 1,
      songTitle:item.name,
      time:formatMinuteSecond(item?.dt),
      singer:item?.ar[0]?.name || '未知'
    }
    return data.push(dataObj)
  })

  // 全部播放按钮,列表有的数据直接从列表数据取就可以了
  const playerButtonClick = () => {
    console.log('click')
    // return
    // if (data){
    //   setAllSongList(data)
    // }
  }

  return (
    <AlbumSongListWrapper className={'wrap-v2'} >
      { id ?
        <>
          <TopInfoWrapper>
            <div className={'top-tag-info'}>
              <div className={'singer-cover '}>
                <a href={'#/'} className={'image-position image_cover'}> </a>
                <img src={getSizeImage(albumList?.album?.picUrl,177)} alt=""/>
              </div>
              <div className={'singer-info'}>
                <div className={'type-name'}>
                  <button className={'type-icon sprite_icon2'}> </button>
                  <span className={'name'}>{albumList?.album?.name || '未知'}</span>
                </div>
                <div className={'publish-info'}>
                  <p className={'p-info'}>歌手：<a href="#/">{singerName}</a></p>
                  <p className={'p-info'}>发行时间：{formatDate(albumList?.album?.publishTime,'yyyy-MM-dd')}</p>
                  <p className={'p-info'}>发行公司：{albumList?.album?.company || '未知'}</p>
                </div>
                <div className={'btn-player'}>
                  <div className={'btn-bg sprite_button2'}>
                    <p onClick={event => playerButtonClick()}>播放</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'album-description'} ref={descriptionRef}>
              <p className={'font-description'}>专辑介绍</p>
              {
                singerDescription
                  ?
                  singerDescription.map((item,index)=>{
                  return (
                    <p key={index} className={'line-text'}>{item}</p>
                  )
                  })
                  : '...'
              }
            </div>
            <>
              {
                showOrHide
                  ?
                  <p className={'show-put-click'} onClick={event => handleShowOrHide()}>收起<UpOutlined /> </p>
                  :
                  <p className={'show-put-click'} onClick={event => handleShowOrHide()}>展开<RightOutlined /></p>
              }
            </>
          </TopInfoWrapper>

          <AlbumListWrapper x={tagXY.x} y={tagXY.y}>
            <h2>包含歌曲列表</h2>
            <Table columns={columns}
                   dataSource={data}
                   bordered
                  //  onRow={recode => {
                  //    return {
                  //     onClick: () => {rowClick(recode)}, // 点击行
                  //   }
                  // }}
            />
          </AlbumListWrapper>
        </>
        :
        <MCNotData />}
    </AlbumSongListWrapper>
  )
})
