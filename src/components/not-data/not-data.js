import React,{memo} from "react";
import { Empty } from 'antd';
import {NotDataWrapper} from "./style";


// 朋友页面
export default memo(function MCNotData() {
  return (
    <NotDataWrapper height={window.innerHeight}>
      <div className={'position-empty'}>
        <Empty image={Empty.PRESENTED_IMAGE_DEFAULT}
               description={
                 <span className={'font-empty'}>
                  正在开发中...
                </span>
               }/>
      </div>
    </NotDataWrapper>
  );
})