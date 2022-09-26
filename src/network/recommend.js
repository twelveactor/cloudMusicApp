import MCRequest from './request'

// 获取 banner 数据
export function getTopBanner(){
  // return request({
  //   url:'/banner'
  // })
  return MCRequest.get({
    url:'/banner'
  })
}

// 获取 热门歌单 数据
export function getHotRecommend(limit){
  return MCRequest.get({
    url:'/personalized',
    params:{
      limit
    }
  })
}

// 获取 新专辑 数据
// let time = new Date()
// let getYear = time.getFullYear()
// let getMonth = time.getMonth() + 1
// export function getNewAlbum(limit){
//   return MCRequest.get({
//     url:'/top/album',
//     params:{
//       offset:0,
//       limit,
//       year:getYear,
//       month:getMonth
//     }
//   })
// }
export function getNewAlbum(){
  return MCRequest.get({
    url:'/album/newest'
  })
}

// 获取 榜单 数据
// 飙升榜id=19723756 新歌榜id=3779629 原创榜id=2884035
function type (id){
  if (id < 0 || id > 2 ){
    return [19723756,3779629,2884035][0]
  }
  return [19723756,3779629,2884035][id]
}
export function getTopList(id){
  return MCRequest.get({
    url:'/playlist/detail',
    params:{
      id:type(id)
    }
  })
}
