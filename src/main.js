import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/main.css'

var token = localStorage.getItem('token');

if(token){
    axios.defaults.headers.common["Authorization"] = 'Bearer' + token ;
}

const app = createApp(App)

app.use(router)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faHouse, faMap, faUser, faLock, faLocationDot, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faHouse)
library.add(faMap)
library.add(faUser)
library.add(faLock)
library.add(faLocationDot)
library.add(faRightFromBracket)


app.component('FontAwesomeIcon', FontAwesomeIcon).use(store).mount('#app')
