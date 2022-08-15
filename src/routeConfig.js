import * as VueRouter from "vue-router"
import MobileUser from "./pages/mobile/user.vue"
import MobileHome from "./pages/mobile/index.vue"
import PcUser from "./pages/pc/user.vue"
import PcHome from "./pages/pc/index.vue"
import { isMobile } from "./helper"

const routes = [
  {
    path: '/mobile',
    children: [
      { path: '', component: MobileHome },
      {
        path: 'user',
        component: MobileUser,
      },
    ],
  },
  {
    path: '/',
    children: [
      { path: '', component: PcHome },
      {
        path: 'user',
        component: PcUser,
      },
    ],
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

//方案1，用ua判断设备做重定向
router.beforeEach((to) => {
  const isFromMobile = isMobile();
  const isToMobile = to.path.indexOf('mobile') < 0 ? false : true;
  return correctEntry({ to, isFromMobile, isToMobile })
})
//方案2，根据屏幕可视区域宽度做重定向
/* router.beforeEach((to) => {
}) */

/** 根据用户设备信息校正入口
* 移动设备走mobile
* tablet、desktop、tv走pc
*/
function correctEntry({ to, isFromMobile, isToMobile }) {
  if (!isFromMobile && isToMobile) {
    return { path: `/`, query: to.query }
  } else if (isFromMobile && !isToMobile) {
    return { path: `/mobile`, query: to.query }
  }
  return true
}

export default router 
