// 使用 redux-immutable 的 combineReducers 合并方法，不使用 redux 的
// import {combineReducers} from 'redux'
import {combineReducers} from "redux-immutable";

// 导入子组件reducer
import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store";
import {reducer as playerReducer} from '../pages/player/store'

// 合并 reducer
const cReducer = combineReducers({
  recommend: recommendReducer,
  player:playerReducer
})

export default cReducer