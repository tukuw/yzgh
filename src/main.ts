import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router  from './router/index'
import  { store ,key} from './store/index'

createApp(App).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(router).use(store,key).mount('#app')
