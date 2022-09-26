import React, { memo,useState } from 'react'
import { Statistic } from 'antd';
import {SettleSingerWrapper} from "./style";
import { SmileTwoTone } from '@ant-design/icons';
import { Space } from 'antd';

export default memo(function MCSettleSinger() {

  const [statisticValue, setStatisticValue] = useState(0);


  const smileClick = () => {
    setStatisticValue(statisticValue + 1)
  }

  return (
    <SettleSingerWrapper>
      <h3 className={'h-like'}>Click on a smile</h3>
      <div className={'btn-like container'}>
        <Statistic value={statisticValue} prefix={<Space><SmileTwoTone spin onClick={event => smileClick()} /></Space>}/>
      </div>
    </SettleSingerWrapper>
  )
})
