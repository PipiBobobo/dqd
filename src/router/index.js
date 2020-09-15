import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import HomePage from '../views/home/homepage/HomePage'
import LiveBroadcast from '../views//home/livebroadcast/LiveBroadcast'
import Match from '../views//home/match/Match'
import MatchData from '../views/home/matchdata/MatchData'
import Hot from '../views/home/homepage/Hot'
import Important from '../views/home/livebroadcast/Important'
import Major from '../views/home/match/Major'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'home/homepage/Hot',
  },
  {
    path: '/home',
    component: Home,
    redirect:'home/homepage/Hot',
    children:[
      {
        path:'/home/homepage',
        component:HomePage,
        children:[
          {
            path:'/home/homepage/Hot',
            component:Hot
          },
        ]
      },
      {
        path:'/home/livebroadcast',
        component:LiveBroadcast,
        redirect:'/home/livebroadcast/Important',
        children:[
          {
            path:'/home/livebroadcast/Important',
            component:Important,
          }
        ]
      },
      {
        path:'/home/match',
        component:Match,
        redirect:'/home/match/Major',
        children:[
          {
            path:'/home/match/Major',
            component:Major,
          }
        ]
      },
      {
        path:'/home/matchdata',
        component:MatchData
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
