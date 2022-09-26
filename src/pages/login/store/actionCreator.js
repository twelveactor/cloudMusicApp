import * as actionTypes from './content'

import {
  getLogin,
  createLogin,
  checkLogin,
}from '@/network/login'

const changeLoginDataAction = (type,res) =>({
  type,
  res
})

export const getLoginCookieAction = () =>{
  return (dispatch) =>{
   getLogin().then(res=>{
     dispatch(changeLoginDataAction(actionTypes.LOGIN_COOKIE,res.data.key))
   })
  }
}
export const getCreateLoginAction = () =>{
  return (dispatch) =>{
    createLogin().then(res=>{
      dispatch(changeLoginDataAction(actionTypes.LOGIN_KEYS))
    })
  }
}
export const getLoginCheckAction = () =>{
  return (dispatch) =>{
    checkLogin().then(res=>{
      dispatch(changeLoginDataAction(res.data))
    })
  }
}