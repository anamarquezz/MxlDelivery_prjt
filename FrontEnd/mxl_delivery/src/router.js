import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import mxlimenu from "./views/mxlimenu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path:"/mxlimenu",
      name:"mxlimenu",
      component:mxlimenu
    }
    
  ]
});
