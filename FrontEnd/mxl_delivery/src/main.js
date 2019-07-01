import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import '@fortawesome/fontawesome-free/css/all.css' 

import 'vuetify/dist/vuetify.min.css' 


import vuetify from "vuetify"
Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
