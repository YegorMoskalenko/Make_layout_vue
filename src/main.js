import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from '@/components/UI'

const app = createApp(App)

uiComponents.forEach(uiComponent => {
    app.component(uiComponent.name, uiComponent)
})

app
    .use(store)
    .use(router)
    .mount('#app')
