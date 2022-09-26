import React, {memo} from 'react';
import {TopRankingWrapper} from './style'
import {getSizeImage} from "../../utils/formCount";
import { getCurrentSongAction } from '@/pages/player/store/actionCreator';
import { useDispatch } from 'react-redux';


export default memo(function MCTopRanking(props) {
  const {info}=props


  // 点击按钮，获取当前歌曲信息
  const dispatch = useDispatch();
  const handlePlayMusic = (item) => {
    dispatch(getCurrentSongAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className={'header'}>
        <div className={'image'}>
          <img src={getSizeImage(info?.coverImgUrl,120)} alt=""/>
          <a href="#/" className={'image_cover'}>毛玻璃效果</a>
        </div>
        <div className='info'>
          <a href="#/">{info?.name || '未知'}</a>
          <div>
            <button className={'btn play sprite_02'}> </button>
            <button className={'btn favor sprite_02'}> </button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          info?.tracks?.slice(0,10).map((item,index)=>{
            return (
              <div className="list-item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                 <span className={'name'}><a href="/todo">{item.name}</a></span>
                  <div className={'operate'}>
                    <button className={'btn play sprite_02'} onClick={event => handlePlayMusic(item)}> </button>
                    <button className={'btn addto sprite_icon2'}> </button>
                    <button className={'btn favor sprite_02'}> </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href={"/todo"}>查看全部 ></a>
      </div>
    </TopRankingWrapper>
  )
})
