import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {firebaseApp} from "@/components/firebaseConfig";
import { VueFire, VueFireAuth } from 'vuefire'

const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
    ],
})
app.mount('#app');