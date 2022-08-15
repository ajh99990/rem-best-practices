import { createApp } from 'vue'
import App from './App.vue'
import router from "./routeConfig"
import {setDomFontSizeByUa} from './autoSize.js'
setDomFontSizeByUa()

const app = createApp(App)

app.use(router)

app.mount('#app')