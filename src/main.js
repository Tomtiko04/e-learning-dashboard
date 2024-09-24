import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//vue toast
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

const vuetify = createVuetify({
	components,
	directives,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify);
app.use(ToastPlugin, {
	position: "top-right",
});

app.mount('#app')
