import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from './store/actions.js';
import mutations from './store/mutations.js'


export default new Vuex.Store({
  state: {  
     loading:{
      value:0,
      show:false
    },
    clientesItems:[{
      id:1,
      Nombre:"Pizzonona",
      direccion:"lalala"
    },
    {
      id:2,
      Nombre:"little caesar",
      direccion:"lalala"
    },
    {
      id:3,
      Nombre:"birrieria Jalisco",
      direccion:"lalala"
    }],
    sdialog:{
      is:'',
      titulobarra:'',
      mensaje:'',
      show:false,   
      colorbarra:'',  
      textcolorbarra:'',  
      iconbarra:''  
    },
  },
  mutations: mutations,
  actions: actions
});
