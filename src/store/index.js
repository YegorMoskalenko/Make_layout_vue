import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocalStorage = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

export default createStore({
    modules: {

    },
    plugins: [vuexLocalStorage.plugin]
})
