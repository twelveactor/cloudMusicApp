import React,{memo , Suspense} from "react";
import {renderRoutes} from 'react-router-config' // 路由映射配置
import {HashRouter} from 'react-router-dom'
import {Provider} from "react-redux";

import routes from "./router"; // 路由映射表
import store from './store'

import MCAppHeader from './components/app-header/app-header'
import MCAppFooter from "./components/app-footer/app-footer";
import MCAppPlayerBar from './pages/player/app-player-bar/app-player-bar'

import { Spin } from 'antd';

export default memo(function App() {
  return (
    // store redux 状态管理
    <Provider store={store}>

      {/* 路由 */}
      <HashRouter>
        {/* header 头 */}
        <MCAppHeader />

        {/* 主体 路由 数据 ，懒加载需要包裹一个组件 */}
        <Suspense fallback={<div><Spin /></div>}>
          { renderRoutes(routes) }
        </Suspense>


        {/* 播放器播放控制条 */}
        <MCAppPlayerBar />

        {/* footer 注脚 */}
        <MCAppFooter />

      </HashRouter>

    </Provider>

  );
})