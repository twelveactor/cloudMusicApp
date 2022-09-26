import {Map} from 'immutable'
import * as actionTypes from './content'

const defaultState = Map( {
    cookie:'',
    key:'',
    timeStamps:''
})

export function reducer( state = defaultState , action){
  switch (action.type){
    case actionTypes.LOGIN_COOKIE:
      return state.set('cookie',action.cookie)
    case actionTypes.LOGIN_KEYS:
      return state.set('key',action.key)
    case actionTypes.LOGIN_TIMESTAMPS:
      return state.set('timeStamps',action.timeStamps)
    default:
      return state
  }
}