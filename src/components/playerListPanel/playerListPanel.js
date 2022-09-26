import React, {memo, useEffect, useRef} from 'react'
import {PlayerListPanelWrapper} from "./style";
import {useSelector} from "react-redux";
import {formatMinuteSecond} from "../../utils/formCount";

export default memo(function MCPlayerListPanel(props) {
  const {isPlaying,currentTime} = props

  /**
   * state Area
   */
  const notData = 'Not Data'
  // const [scrollTop, setScrollTop] = useState(0);
  // const [scrollHeight, setScrollHeight] = useState(0);
  // const [clientHeight, setClientHeight] = useState(0);
  // const [isRuns, setIsRuns] = useState(0);

  /**
   * redux Area
   */
  const {playList,currentSong,lyricList,currentLyricIndex} = useSelector((state => ({
    playList:state.getIn(['player','playList']),
    currentSong:state.getIn(['player','currentSong']),
    currentSongIndex:state.getIn(['player','currentSongIndex']),
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex'])
  })))
  // console.log(Math.floor(currentTime) , '-' ,lyricList[currentLyricIndex- 1]?.time)

  /**
   * hook Area
   */
  const scrollRef = useRef()
  const ulScrollRef = useRef()

  // const onscroll = throttle((e) => {
  //   console.log(e.target.scrollHeight ,'-', e.target.scrollTop ,'-', e.target.clientHeight)
  //   setScrollTop(e.target.scrollTop)
  //   // setScrollHeight(e.target.scrollHeight)
  //   // setClientHeight(e.target.clientHeight)
  // },3000)
  // useEffect(()=>{
  //   // setLyricTop(currentLyricIndex * 30)
  //   scrollRef.current.scrollTop += 20
  // },[currentLyricIndex])
  //
  /**
   * handle Function
   */
  // useEffect(()=>{
  //   // window.addEventListener('scroll',onscroll,false)
  //   document.addEventListener('scroll',onscroll,true)
  //   // document.addEventListener('scroll',ulScroll,true)
  //
  //   return ()=>{
  //     // window.removeEventListener('scroll',onscroll)
  //     document.removeEventListener('scroll',onscroll)
  //     // document.removeEventListener('scroll',ulScroll)
  //   }
  // },[onscroll])



// 开始滚动
  useEffect(() => {
    let timer;
    if (isPlaying) {
      // setTimeout 只会执行一次，currentLyricIndex 需要监听 变化，变化重新在执行一边
      // currentTime 进度条播放期间如果大于 当前歌词 时间，就执行一次 scrollTop += 40
      if (currentTime && lyricList[currentLyricIndex - 1]?.time) {
        if (currentTime > lyricList[currentLyricIndex - 1]?.time) {
          timer = setTimeout(
            () =>
              // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
              scrollRef.current.scrollTop >= ulScrollRef.current.scrollHeight
                ? (scrollRef.current.scrollTop = 0)
                : scrollRef.current.scrollTop += 40,
            0
          );
        }
      }
    }
    return () => {
      // clearTimeout(timer);
      clearTimeout(timer);
    };
  }, [isPlaying,currentLyricIndex]);


  return (
   <PlayerListPanelWrapper picUrl={currentSong.al.picUrl}>
     {/* 播放头 */}
     <div className={'player-header sprite_player'}>
     {/* 播放头左右两边*/}
       <div className={'player-header-title'}>
         <h3 className={'title-number'}>播放列表({playList.length || notData})</h3>
         <h3 className={'song-name'}>{currentSong.name || notData}</h3>
       </div>
     </div>
     {/* 播放内容*/}
     <div className={'player-content'}>
       <div className={'player-content-left'}>
         {
           playList
             ?
             playList.map(item=>{
               return (
                 <div className={'pre-row-song'} key={item.id}>
                   <div className={'pre-row-song-name'}>{item.name || notData}</div>
                   <div className={'pre-row-song-singer-time'}>
                     <a href={'#/'}>{item.ar[0].name || notData}</a>
                     <span>{formatMinuteSecond(item.dt)}</span>
                   </div>
                 </div>
               )
             })
             :
             <></>
         }
       </div>
       <div className={'cut-off'}></div>
       <div className={'player-content-right'} >
          {/*<div className={'scroll-content'}  onScroll={onscroll} ref={scrollRef}>*/}
          <div className={'scroll-content'}  ref={scrollRef}>
            <ul className={'song-list'} ref={ulScrollRef}>
              {
                lyricList
                  ?
                  lyricList.map((item,index)=>{
                    // console.log(index)
                    return (
                      <li key={item.time.toString()}
                          className={currentLyricIndex === index ? 'active':'' }
                          style={{
                            paddingTop:index === 0 ? '100px':0 ,
                            paddingBottom:index === lyricList.length -1  ? '130px':0
                          }}>{item.content}</li>
                    )
                  })
                  :
                  <></>
              }
              </ul>
          </div>
       </div>
     </div>
   </PlayerListPanelWrapper>
  )
})
