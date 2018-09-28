import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import main from '@/pages/main'
import home from '@/pages/home/home'
import order from '@/pages/order'
import my from '@/pages/my'
import recent from '@/pages/recent/recent'
import one from '@/pages/recent/one'
import two from '@/pages/recent/two'
import three from '@/pages/recent/three'
import meishiDetail from '@/pages/recent/meishi-detail'
import lifeDetail from '@/pages/recent/life-detail'
import playdetail from '@/pages/recent/play-detail'
import detail from '@/pages/home/detail'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: main,
			children: [
				{
					path: '/home',
					name: 'home',
					component: home,
          meta: {
            keepAlive: false // 需要被缓存
          }
				},
				{
					path: '/recent',
					name: 'recent',
					component: recent,
          meta: {
            keepAlive: true // 需要被缓存
          },
          children:[
            {
              path: '',
              name: 'one',
              component: one,
              meta: {
                keepAlive: true // 需要被缓存
              }
            },

            {
              path: '/two',
              name: 'two',
              component: two,
              meta: {
                keepAlive: true // 需要被缓存
              }
            },
            {
              path: '/three',
              name: 'three',
              component: three,
              meta: {
                keepAlive: true // 需要被缓存
              }
            }

          ]
				},

				{
					path: '/order',
					name: 'order',
					component: order,
          meta: {
            keepAlive: true // 需要被缓存
          }
				},
				{
					path: '/my',
					name: 'my',
					component: my,
         meta: {
            keepAlive: true // 需要被缓存
          }
				}
			]
		},
		{
			path: '/detail/:detailid',
			name: 'detail',
			component: detail
		},
    {
      path: '/meishiDetail/:meishiid',
      name: 'meishiDetail',
      component: meishiDetail,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/lifeDetail/:lifeid',
      name: 'lifeDetail',
      component: lifeDetail,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/playdetail/:playid',
      name: 'playdetail',
      component: playdetail,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/register',
			name: 'register',
			component: register
		}
	]
})
