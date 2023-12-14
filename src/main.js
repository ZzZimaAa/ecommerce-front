import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// eslint-disable-next-line no-unused-vars
import swal from "sweetalert";
import store from './store';

//import "bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css"

//using axios as a global object
window.axios = require('axios')

createApp(App).use(router).use(store).mount('#app');