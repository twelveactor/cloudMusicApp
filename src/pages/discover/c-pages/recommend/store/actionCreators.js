import * as actionTypes from './content'

import { getTopBanner ,getHotRecommend,getNewAlbum,getTopList} from '@/network/recommend'

// 修改 redux state
const changeTopBannerAction = (res) => ({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})
const changeHotRecommendAction = (res) => ({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends:res.result
})
const changeNewAlbumAction = (res) => ({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbums:res.albums
})

const changeUpRankingAction = (res) => ({
  type:actionTypes.CHANGE_UP_RANKING,
  upRankings:res.playlist
})
const changeNewRinkingAction = (res) => ({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRankings:res.playlist
})
const changeOriginRankingAction = (res) => ({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRankings:res.playlist
})



// 发送网络请求
export const getTopBannerAction=()=>{
  return dispatch => {
    getTopBanner().then(res=>{
      // 把 对象 派发给 reducer
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return dispatch =>{
    getHotRecommend(limit).then(res=>{
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch =>{
    getNewAlbum(limit).then(res=>{
      if (res.code !== 200) return console.log('newAlbum 数据请求失败！！！')
      // console.log(res)
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res=>{
      // console.log(res)
      switch (id){
        case 0:
          dispatch(changeUpRankingAction(res))
          break
        case 1:
          dispatch(changeNewRinkingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        default:
      }
    })
    // dispatch(getTopList(id))
  }
}