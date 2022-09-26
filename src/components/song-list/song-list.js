import React, {memo, useEffect, useRef, useState} from "react";
import {ItemListWrapper, SongListWrapper, TopInfoWrapper} from "./style";
import { formatMinuteSecond, getSizeImage} from "../../utils/formCount";
import {RightOutlined, UpOutlined} from "@ant-design/icons";
import {Table,Tag} from "antd";
import MCNotData from '@/components/not-data/not-data'
import {getPlayList, getPlayListTrackAll} from "../../network/player";
import {getCurrentSongAction} from "../../pages/player/store/actionCreator";
import {useDispatch} from "react-redux";

// 歌单
function MCSongList(props) {
  // 拿到 歌单 id
  const id = props.location.search.split('?')[1] || ''

  const [playListInfo, setPlayListInfo] = useState({});
  const [playListTrackAll, setPlayListTrackAll] = useState([]);
  const [showOrHide,setShowOrHide] = useState(false)
  // 图标x y
  const [tagXY] = useState({x:0,y:-100})
  // 保存当前点击的专辑中单曲行数据
  const [rowSing,setRowSing] = useState({})

  // dom 实例
  const descriptionRef = useRef();
  // description 专辑介绍
  const singerDescription = playListInfo.description && playListInfo.description.split('\n')
  const tags = playListInfo.tags || []

  const dispatch = useDispatch()
  useEffect( ()=>{
    async function fetchData(id) {
      // 歌单详情
      const {playlist} = await getPlayList(id)
      // 歌单歌曲
      const {songs} = await getPlayListTrackAll(id)

      setPlayListInfo(playlist)
      setPlayListTrackAll(songs)
    }

   if (id){
     fetchData(id)
   }
  },[id])
  // 歌单 单曲 点击
  useEffect(()=>{
    if (Object.keys(rowSing).length !== 0){
      dispatch(getCurrentSongAction(rowSing.key))
    }
  },[dispatch,rowSing])

  // 控制展示收起按钮
  const handleShowOrHide = () => {
    setShowOrHide(!showOrHide)
    if (showOrHide){
      descriptionRef.current.style.display = '-webkit-box'
    }else{
      descriptionRef.current.style.display = 'block'
    }
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
          <a href={'todo'}>{time}</a>
        </div>
      )
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
      render:(singer)=>(
        <div>
          <a href={'todo'}>{singer}</a>
        </div>
      )
    }
  ];

  // 配置列表数据
  const data = [];
  const songsList = playListTrackAll || []
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
  // 点击播放图标 拿到每行数据
  // const rowClick = (row) =>{console.log(row)}
  const playerClick = (record) => {
    setRowSing(record)
  }
  
  return (
    <SongListWrapper className={'wrap-v2'} >
      { id ?
        <>
          <TopInfoWrapper>
            <div className={'top-tag-info'}>
              <div className={'singer-cover '}>
                <a href={'#/'} className={'image-position image_cover'}> </a>
                <img src={getSizeImage(playListInfo?.coverImgUrl,200)} alt=""/>
              </div>
              <div className={'singer-info'}>
                <div className={'type-name'}>
                  <button className={'type-icon sprite_icon2'}> </button>
                  <span className={'name'}>{playListInfo?.name || '未知'}</span>
                </div>
                <div className={'tags'}>
                  标签：
                  {
                    tags.map(item =>{
                      return <Tag color="red" key={item}>{item}</Tag>
                    })
                  }
                </div>
                <div className={'btn-player'}>
                  <div className={'btn-bg sprite_button2'}>
                    <p>播放</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'album-description'} ref={descriptionRef}>
              <p className={'font-description'}>歌单介绍</p>

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

          <ItemListWrapper x={tagXY.x} y={tagXY.y}>
            <h2>包含歌曲列表 - {songsList.length || 0} 首歌</h2>
            <Table columns={columns}
                   dataSource={data}
                   bordered
            />
          </ItemListWrapper>
        </>
        :
        <MCNotData />}
    </SongListWrapper>
  )
}

export default memo(MCSongList)

