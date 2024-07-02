// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from "primevue/button"
import Listbox from 'primevue/listbox'


const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});


app.component('Button', Button);
app.component('Listbox', Listbox);
