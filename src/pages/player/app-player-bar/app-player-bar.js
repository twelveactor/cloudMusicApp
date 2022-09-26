import React, {memo, useCallback, useEffect, useRef, useState} from 'react'

import {PlaybarWrapper,Control,PlayInfo,Operator} from './style'

import { Slider,message } from 'antd';
import {getCurrentSongAction,changeSequenceAction,changeCurrentIndexAndSongAction,changeCurrentLyricIndexAction} from "../store/actionCreator";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getSizeImage, formatMinuteSecond, getPlaySong, formatDate} from "../../../utils/formCount";
import {NavLink} from "react-router-dom";

import MCPlayerListPanel from '../../../components/playerListPanel/playerListPanel'

export default memo(function MCAppPlayerBar() {
  /**
   * state Area
   */
  const [currentTime,setCurrentTime] = useState(0)
  const [progress,setProgress] = useState(0)
  const [isChange,setIsChange] = useState(false)
  const [isPlayingChange,setIsPlayingChange] = useState(false)
  // 控制 播放列表面板显示隐藏
  const [isPanel,setIsPanel] = useState(false)



  /**
   * redux Area
   */
  const {currentSong,sequence,playList,lyricList} = useSelector((state)=>({
    currentSong:state.getIn(['player','currentSong']),
    sequence:state.getIn(["player", "sequence"]),
    playList:state.getIn(["player", "playList"]),
    lyricList:state.getIn(["player", "lyricList"]),
    currentLyricIndex:state.getIn(["player", "currentLyricIndex"])
  }),shallowEqual)

  /**
   * hooks Area
   */
  const dispatch = useDispatch()
  const audioRef = useRef();

  useEffect(()=>{
    dispatch(getCurrentSongAction(1977916162))
  },[dispatch])

  useEffect(()=>{
    // 请求播放器
    audioRef.current.src = getPlaySong(currentSong?.id)
    // [currentSong] 当前歌曲发生改变就立即播放
    audioRef.current.play().then(res=>{
      setIsPlayingChange(true)
    }).catch(err=>{
      setIsPlayingChange(false)
      console.log(err)
      return err
    })

  },[currentSong])

  /**
   * other Area
   */
  // 格式化初始化时间
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ("");
  const singerName = ((currentSong && currentSong.ar && currentSong.ar[0].name) || '未知')
  const currentSongTime = (currentSong ? formatMinuteSecond(currentSong.dt):0)

  const duration = currentSong.dt || 0
  // let  = currentTime / duration * 100

  /**
   * handle function
   */
  const handlePlayerMusic = () =>{
    isPlayingChange ? audioRef.current.pause():audioRef.current.play()
    setIsPlayingChange(!isPlayingChange)
  }

  const handleAudioTimeUpdate = (e) => {
    // 如果滑动条在没有在进行滑动改变的时候才设置进度
    if (!isChange){
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }

    // 获取当前时间段内的歌词
    let currentLyricIndex = 0
    for ( ;currentLyricIndex < lyricList.length; currentLyricIndex++){
      let lyricItem = lyricList[currentLyricIndex]
      if (currentTime < lyricItem.time){
        // currentLyricIndex = i
        break
      }
    }

    if (currentLyricIndex !== currentLyricIndex -1){
      dispatch(changeCurrentLyricIndexAction(currentLyricIndex - 1))
      if (isPlayingChange){
        message.open({
          content:lyricList[currentLyricIndex - 1]?.content,
          duration: 0 ,
          key:'lyric',
          className: 'lyric-class',
          style:{
            marginBottom:'20px'
          },
          onClick:()=>{
            // if (!isPanel){
            //   setClickDuration(0)
            // }
            // setIsPanel(true)
            // setClickDuration(1)
          }
        }).then(res=>{
          console.log(res)
        })
      }
    }
    // console.log(lyricList[currentLyricIndex-1]?.content,currentTime)
  }

  // 滑块进度条
  const sliderChange = useCallback((value) => {
    setIsChange(true)
    const currentChangeTime = value / 100 * duration
    setCurrentTime(currentChangeTime)
    setProgress(value)
  },[duration])

  const sliderAfterChange = useCallback((value) => {
    // 都转换为毫秒,滑动条控制音乐进度播放
    const currentAfterTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentAfterTime
    setCurrentTime(currentAfterTime * 1000)
    setIsChange(false)

    if (!isPlayingChange){
      handlePlayerMusic()
    }
  },[duration,isPlayingChange,handlePlayerMusic])

  // loop 设置播放方式按钮
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2){
      currentSequence = 0
    }
    // 修改 redux
    dispatch(changeSequenceAction(currentSequence))
  }

  // 控制歌曲切换上一首 or 下一首
  const changeMusicPrevOrNext = (tag) => {
    if(tag === 'prev'){
      dispatch(changeCurrentIndexAndSongAction(-1))
    }else{
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  // audio 播放结束之后
  const handleMusicEnded = () => {
    if (sequence === 2){
      // 单曲循环，当前歌曲播放结束在继续播放
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }else{
      // 结束播放，如果是顺序播放直接播放下一首
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  // 播放歌单列表
  const playerListClick = () => {
    setIsPanel(!isPanel)
  }


  return (
    <PlaybarWrapper className={'sprite_player'}>
      <div className={'content wrap-v2'}>

        <Control isPlaying={isPlayingChange}>
          <button className={'sprite_player prev'} onClick={event => changeMusicPrevOrNext('prev')}> </button>
          <button className={'sprite_player play'} onClick={event => handlePlayerMusic()}> </button>
          <button className={'sprite_player next'} onClick={event => changeMusicPrevOrNext('next')}> </button>
        </Control>
        <PlayInfo>
          <div className={'image sprite_player'}>
            <NavLink to={'/discover/player'}>
              <img src={ getSizeImage(picUrl,34) } alt=""/>
            </NavLink>
          </div>
          <div className={'info'}>
            <div className={'song'}>
              {currentSong?.name || '未知'}
              <a className={'singer-name'} href={'#/'}>{singerName}</a>
            </div>
            <div className={'progress'}>
              <Slider defaultValue={0}
                      value={progress}
                      onAfterChange={sliderAfterChange}
                      onChange={sliderChange}/>

              <div className={'time'}>
                <span className={'now-time'}>{formatDate(currentTime,'mm:ss')}</span>
                <span className={'divider'}> /</span>
                <span className={'divider'}>{currentSongTime}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"> </button>
            <button className="sprite_player btn share"> </button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"> </button>
            <button className="sprite_player btn loop" onClick={event => changeSequence()}> </button>
            <span  className="sprite_player btn playlist loop-position" onClick={event => playerListClick()}>
              <span className={'loop-count'}>{playList.length}</span>
            </span>

          </div>
        </Operator>
        <audio ref={audioRef}
               onTimeUpdate={event => handleAudioTimeUpdate(event)}
               onEnded={event => handleMusicEnded()}/>
      </div>
      {isPanel ? <MCPlayerListPanel isPlaying={isPlayingChange} currentTime={currentTime}/>:<></>}
    </PlaybarWrapper>
  )
})
