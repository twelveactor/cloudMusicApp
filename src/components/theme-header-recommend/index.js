import React, {memo} from "react";

import {HeaderWrapper} from './style'

import PropTypes from 'prop-types';

const ThemeHeaderRecommend =  memo(function (props){

  const { title ,keywordList} = props


  return(
    <HeaderWrapper>
      <div className={'left'}>
        <i className={'sprite_02 icon'}> </i>
        <h3 className={'title'}> {title} </h3>
        <div className={'keyword'}>
          {
            keywordList?.map((item,index)=>{
              return(
               <div className={'item'} key={item} >
                 <a href="/#">{item} </a>
                 <span className={'divider'}>|</span>
               </div>
              )
            })
          }
        </div>
      </div>

      <div className={'right'}>
        <a href="/#"> 更多 </a>
        <i className={'icon sprite_02'}> </i>
      </div>
    </HeaderWrapper>
  )
})

// 类型限制
ThemeHeaderRecommend.propTypes = {
  title:PropTypes.string,
  keywordList:PropTypes.array
}
ThemeHeaderRecommend.defaultProps = {
  title:'未知',
  keywordList:[]
}



export default ThemeHeaderRecommend