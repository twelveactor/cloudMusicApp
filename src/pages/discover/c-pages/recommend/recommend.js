import React, {memo} from "react";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
}from './style'

import MCTopBanner from './c-cpns/top-banner/top-banner'
import MCHotRecommend from './c-cpns/hot-recommend/hot-recommend'
import MCRecommendRanking from './c-cpns/recommend-ranking/recommend-ranking'
import MCNewAlbum from './c-cpns/new-album/new-album'
import MCHotAnchor from './c-cpns/hot-anchor'
import MCUserLogin from  './c-cpns/user-login'
import MCSettleSinger from './c-cpns/settle-singer/settle-singer'

// 推荐页面
function MCRecommend(props) {


  return (
    <RecommendWrapper>
      {/* banner 轮播图*/}
      <MCTopBanner />
      {/* 内容部分 */}
      <Content>

        <RecommendLeft>
          {/* 热门推荐歌单 */}
          <MCHotRecommend />
          {/* 新专辑 */}
          <MCNewAlbum />
          {/* 榜单 */}
          <MCRecommendRanking />
        </RecommendLeft>

        <RecommendRight>
          <MCUserLogin />
          <MCSettleSinger />
          <MCHotAnchor />
        </RecommendRight>

      </Content>
    </RecommendWrapper>
  )
}

export default memo(MCRecommend)

// 推荐页面 非 通过 hooks 连接方法
// function MCRecommend(props) {
//   // 获取共享的 方法
//   const {getBanner,topBanners} = props;
//
//   useEffect(()=>{
//     // 发起获取 banner 的请求
//     getBanner()
//   },[getBanner])
//
//   return (
//     <div>
//       MCRecommend推荐页面:{topBanners.length}
//     </div>
//   )
// }
// 连接 redux ,但是每个文件都写 这一串操作， 稍显繁琐， 可以改用 hooks
// const mapStateToProps = (state) => ({
//   // 此处 state 是合并处 最外层的 state
//   topBanners:state.recommend.topBanners
// })
// const mapDispatchToProps = (dispatch) => ({
//   getBanner:()=>{
//     dispatch(getTopBannerAction())
//   }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(memo(MCRecommend))