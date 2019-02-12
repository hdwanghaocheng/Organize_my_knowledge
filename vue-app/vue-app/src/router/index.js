import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonHeader from '@/components/common/CommonHeader'
import CommonFooter from '@/components/common/CommonFooter'
import Movie from "@/components/movie/Movie"
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'

import MovieTop250 from '@/components/movie/MovieTop250'
import Albums from '@/components/music/musicList'
import Player from '@/components/music/MusicPlayer'
import PhotoDetail from '@/components/photo/PhotoDetail'
import Login from '@/components/welcome/Login'
import Index from '@/components/welcome/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/movie',
      component:Movie
    },
    {
      path     : '/music',
      component: Music,
      redirect : '/music/music_albums',
      children : [
        {path:'/music/music_albums',component:Albums},
        {path:'/music/music_player/:id',component:Player}
      ]
    }
  ]
})