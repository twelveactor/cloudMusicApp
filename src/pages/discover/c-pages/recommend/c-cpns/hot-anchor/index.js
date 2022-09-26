import React, { memo } from 'react'
import {HotAnchorWrapper} from "./style";

export default memo(function MCHotAnchor() {

  return (
    <HotAnchorWrapper>
      <div className="main">
        <div className="shadow-wrapper">
          <div className="shadow"></div>
        </div>
        <div className="dragon">
          <div className="body"></div>
          <div className="horn-left"></div>
          <div className="horn-right"></div>
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="blush left"></div>
          <div className="blush right"></div>
          <div className="mouth"></div>
          <div className="tail-sting"></div>
        </div>
        <div className="fire-wrapper">
          <div className="fire"></div>
        </div>
        <div className="progress">
          <div className="outer">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </HotAnchorWrapper>
  )
})
