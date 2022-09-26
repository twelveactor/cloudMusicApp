/**
 * recommend reducer
 */
import {Map} from 'immutable'
import * as actionTypes from './content'


// 对数据进行 immutable 包裹为不可变数据
const defaultState= Map({
  // banner 数据
  topBanners:[],
  // 热门推荐歌单数据
  hotRecommends:[],
  // 新碟上架歌曲数据
  newAlbums:[],

  // 三个榜单数据
  upRankings:{},
  newRankings:{},
  originRankings:{}
})

export function reducer(state = defaultState , action){
  switch (action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      // return {...state, topBanners: action.topBanners}
      // immutable 修改数据的方式
      return state.set('topBanners',action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends',action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums',action.newAlbums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRankings',action.upRankings)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRankings',action.newRankings)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRankings',action.originRankings)
    default:
      return state
  }
}
