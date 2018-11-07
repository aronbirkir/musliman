import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainView
    },
    {
      path: '/library/:libraryid',
      name: 'library-page',
      component: MainView
    },
    {
      path: '/playlist/:playlistid',
      name: 'playlist-page',
      component: MainView
    },
    {
      path: '/track/:trackid',
      name: 'track-page',
      component: MainView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
