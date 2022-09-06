import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'

library.add(fas, fab);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')