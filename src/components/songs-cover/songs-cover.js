import React, {memo} from "react";
import {SongsCoverWrapper} from './style'
import {getFormCount,getSizeImage} from '@/utils/formCount'
import {NavLink} from "react-router-dom";

export default memo(function MCSongsCover(props){
  /**
   * state 区域
   */
  const {info} = props

  /**
   * redux 区域
   */

  /**
   * hooks 区域
   */

  /**
   * 其他业务区域
   */



  return(
    <NavLink to={`/discover/songlist?${info.id}`}>

    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl,140)} alt='' title={info.name} />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"> </i>
              {getFormCount(info.playCount)}
            </span>
            <i className="sprite_icon play"> </i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap" title={info.name} >
        {info.name}
      </div>
      {
        info.creator ? <div className="cover-source text-nowrap">by {info.copywriter || info.creator.nickname }</div>:''
      }
    </SongsCoverWrapper>

    </NavLink>
  )
})
