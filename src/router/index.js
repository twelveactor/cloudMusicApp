import React from 'react'
import { Redirect } from "react-router-dom";

// import MCMine from '../pages/mine/mine'
// import MCDiscover from '../pages/discover/discover'
// import MCFriend from '../pages/friend/friend'
//
// import MCRecommends from '../pages/discover/c-pages/recommend/recommend'
// import MCAlbum from '../pages/discover/c-pages/album/album'
// import MCArtis from '../pages/discover/c-pages/artist/artist'
// import MCDjradio from '../pages/discover/c-pages/djradio/djradio'
// import MCRanking from '../pages/discover/c-pages/ranking/ranking'
// import MCSongs from '../pages/discover/c-pages/songs/songs'
// import MCPlayerPage from '../pages/player'
//
// // const MCAlbumSongList = React.lazy(()=> import('../components/album-song-list/album-ssong-list'))
// import MCAlbumSongList from '../components/album-song-list/album-song-list'
// import MCSongList from '../components/song-list/song-list'

const MCDiscover = React.lazy(() => import('../pages/discover/discover'))
const MCMine = React.lazy(() => import('../pages/mine/mine'))
const MCFriend = React.lazy(() => import('../pages/friend/friend'))
const MCRecommends = React.lazy(() => import('../pages/discover/c-pages/recommend/recommend'))
const MCAlbum = React.lazy(() => import( '../pages/discover/c-pages/album/album'))
const MCArtis = React.lazy(() => import('../pages/discover/c-pages/artist/artist'))
const MCDjradio = React.lazy(() => import('../pages/discover/c-pages/djradio/djradio'))
const MCRanking = React.lazy(() => import('../pages/discover/c-pages/ranking/ranking'))
const MCSongs = React.lazy(() => import('../pages/discover/c-pages/songs/songs'))
const MCPlayerPage = React.lazy(() => import('../pages/player'))
const MCAlbumSongList = React.lazy(() => import('../components/album-song-list/album-song-list'))
const MCSongList = React.lazy(() => import('../components/song-list/song-list'))

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path:'/discover',
    component:MCDiscover,
    routes:[
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      { path:'/discover/recommend' ,component:MCRecommends},
      { path:'/discover/album' ,component:MCAlbum},
      { path:'/discover/artist' ,component:MCArtis},
      { path:'/discover/djradio' ,component:MCDjradio},
      { path:'/discover/ranking' ,component:MCRanking},
      { path:'/discover/songs' ,component:MCSongs},
      {
        path:'/discover/player',
        component:MCPlayerPage
      },
      {
        path:'/discover/albumsonglist',
        component:MCAlbumSongList
      },
      {
        path:'/discover/songlist',
        component:MCSongList
      }
    ]
  },
  {
    path:'/mine',
    component:MCMine
  },
  {
    path:'/friend',
    component:MCFriend
  }

]

export default routes