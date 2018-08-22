import Vue from 'vue'
import Router from 'vue-router'

import PostList from '../components/PostList'
import articleConponent from '../components/articleConponent'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: PostList
    },
    {
      path: '/article/:userId',
      name: 'article',
      component: articleConponent
    }
  ]
})
