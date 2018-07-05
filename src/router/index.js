import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import my404 from '@/components/404'
import mypage from '@/components/mypage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'my404',
      component: my404
    },
    {
      path: '/mypage',
      name: 'mypage',
      meta: {
        text: '343243243243'
      },
      component: mypage
    }
  ]
})
