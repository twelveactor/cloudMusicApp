import React, {memo, useEffect} from 'react';
import {RankingWrapper} from './style'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import MCTopRanking from '@/components/top-ranking/top-ranking'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopListAction} from "../../store/actionCreators";

export default memo(function MCRecommendRanking() {


  /**
   * redux 区域
   */
 const {upRankings,newRankings,originRankings} =  useSelector((state)=>({
    upRankings:state.getIn(['recommend','upRankings']),
    newRankings:state.getIn(['recommend','newRankings']),
    originRankings:state.getIn(['recommend','originRankings'])
  }),shallowEqual)

  /**
   * hooks 区域
   */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(1))
    dispatch(getTopListAction(2))
  },[dispatch])

  return (
    <RankingWrapper>

      <ThemeHeaderRecommend  title={'榜单'} />
      <div className={'tops'}>
       <MCTopRanking info={upRankings} />
       <MCTopRanking info={newRankings} />
       <MCTopRanking info={originRankings} />
      </div>

    </RankingWrapper>
  )
})
