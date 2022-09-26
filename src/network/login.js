import MCRequest from './request'

export  function getLogin(){
  return MCRequest.get({
    url:'/login/qr/key'
  })
}

export  function createLogin(key,qrimg){
  return MCRequest.get({
    url:`/login/qr/create`,
    params:{
      key,
      qrimg
    }
  })
}

export  function checkLogin(key){
  return MCRequest.get({
    url:`/login/qr/check`,
    params:{
      key
    }
  })
}

export function loginOut(){
  return MCRequest.get({
    url:'/logout'
  })
}

export function LoginState(){
  return MCRequest.get({
    url:'/login/status'
  })
}

export function getAccount(){
  return MCRequest.get({
    url:'/user/account'
  })
}

// export function getRecommendSong(){
//   return MCRequest.get({
//     url:'/recommend/songs'
//   })
// }