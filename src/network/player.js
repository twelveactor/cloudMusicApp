import MCRequest from './request'

// 获取 歌曲单曲 数据
export function getSongDetail(ids){
  return MCRequest.get({
    url:'/song/detail',
    params:{
      ids
    }
  })
}

// 获取 单曲歌词 数据
export function getSongLyric(id){
  return MCRequest.get({
    url:'/lyric',
    params:{
      id
    }
  })
}

// 获取 专辑 歌单数据
export function getAlbumList(id){
  return MCRequest.get({
    url:'/album',
    params:{
      id
    }
  })
}

// 获取 热门推荐 歌单 及 歌单 全部歌词
export function getPlayList(id){
  return MCRequest.get({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}
export function getPlayListTrackAll(id){
  return MCRequest.get({
    url:'/playlist/track/all',
    params:{
      id,
      limit:10,
      offset:1
    }
  })
}