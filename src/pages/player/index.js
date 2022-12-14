import React, {memo} from 'react'
import {PlayerLeft, PlayerRight, PlayerWrapper} from "./style";


export default memo(function MCPlayerPage() {

  return (
      <PlayerWrapper>
        <div className={'content wrap-v2'}>
          <PlayerLeft>
            <h2>HYPlayerInfo</h2>
            <h2>HYSongContent</h2>
          </PlayerLeft>
          <PlayerRight>
            <h2>HYSimiPlaylist</h2>
            <h2>HYSimiSong</h2>
            <h2>Download</h2>
          </PlayerRight>
        </div>
      </PlayerWrapper>
  )
})
