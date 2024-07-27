// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from "primevue/button"
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';


const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.bg-dark',
            cssLayer: false
        }
    }
});



app.component('Button', Button);
app.component('Listbox', Listbox);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('Toolbar', Toolbar);
app.component('SplitButton', SplitButton);
app.component('FileUpload', FileUpload);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('ColumnGroup',ColumnGroup);
app.component('Row',Row);




import TrashCanIcon from '@/components/icons/trash-can.vue';

app.component('TrashCanIcon',TrashCanIcon)
