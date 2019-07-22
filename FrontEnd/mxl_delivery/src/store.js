import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from './store/actions.js';
import mutations from './store/mutations.js'


export default new Vuex.Store({
  state: {
    seleccionadoGrid:[],
    gridRestaurantes:[
      {
        Id:0,
        Nombre:'Pizza',
        Telefono:'6862358974',        
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'Villas del Colorado',
        Calle:'Av. Mision Santa Lucia 4144',
        Numero:'6854'
      },
      {
        Id:0,
        Nombre:'Pizza',
        Telefono:'6862358974',        
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'Villas del Colorado',
        Calle:'Av. Mision Santa Lucia 4144',
        Numero:'6854'
      }
      ,  {
        Id:0,
        Nombre:'Pizza',
        Telefono:'6862358974',        
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'Villas del Colorado',
        Calle:'Av. Mision Santa Lucia 4144',
        Numero:'6854'
      }
    ],
    gridRepartidores:[
      {
        Id: 0,
        Nombre: "Juan Carlos Marquez Meza",
        Telefono:"6861202568"
      },
      {
        Id: 1,
        Nombre: "Eric Antuan Marquez Sanchez",
        Telefono:"6861202568"
      }, {
        Id: 2,
        Nombre: 'Diana lizbeth Marquez Hernandez',
        Telefono:"6861202568"
      }, {
        Id: 3,
        Nombre: "Lidia Hernandez Baraja",
        Telefono:"6861202568"
      }
    ],
    gridColonias:[
      {
        Id:1,
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'Robledo'       
      },
      {
        Id:2,
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'San Gabriel'       
      },
      {
        Id:3,
        Estado:'Baja California',
        Ciudad:'Mexicali',
        Colonia:'Villas del Colorado'       
      }
    ],
    pedidos:[{
      Folio:1,
        Telefono:'(686) 1202568',
        Cliente:'Pizzonona',
        ACobrar:'$500',
        Hora:'2019-/07-07 15:03',
        Espera:'11 min',
        Estatus:"Enviado",
        Repartidor:'Eric Marquez'
    },
    {
      Folio:2,
      Telefono:'(686) 1202564',
      Cliente:'crepero del amor',
      ACobrar:'$300',
      Hora:'2019-/07-07 15:03',
      Espera:'12 min',
      Estatus:"Enviado",
      Repartidor:'Ana Marquez'
  },
  {
    Folio:3,
    Telefono:'(686) 1202456',
    Cliente:'kotori',
    ACobrar:'$100',
    Hora:'2019-/07-07 15:03',
    Espera:'15 min',
    Estatus:"Enviado",
    Repartidor:'Diana Marquez'
}],
    estados: [{
        id: 0,
        Nombre: "Baja California"
      },
      {
        id: 1,
        Nombre: "Monterrey"
      }, {
        id: 2,
        Nombre: 'Sinaloa',
      }, {
        id: 3,
        Nombre: "Sonora"
      }
    ],
    ciudad:[
      {
        id: 0,
        Nombre: "Mexicali"
      },
      {
        id: 1,
        Nombre: "Ensenada"
      }, {
        id: 2,
        Nombre: "Tijuana",
      }, {
        id: 3,
        Nombre: "Tecate"
      }
    ],
    colonias:[
      {
        id: 0,
        Nombre: "San Gabriel"
      },
      {
        id: 1,
        Nombre: "Villas del Coloradp"
      }, {
        id: 2,
        Nombre: 'Robledo',
      }, {
        id: 3,
        Nombre: "Cuachtemoch"
      }
    ],
    menu: '',
    loading: {
      value: 0,
      show: false
    },
    clientesItems: [{
        id: 1,
        Nombre: "Pizzonona",
        direccion: "lalala"
      },
      {
        id: 2,
        Nombre: "little caesar",
        direccion: "lalala"
      },
      {
        id: 3,
        Nombre: "birrieria Jalisco",
        direccion: "lalala"
      }
    ],
    sdialog: {
      is: '',
      titulobarra: '',
      mensaje: '',
      show: false,
      colorbarra: '',
      textcolorbarra: '',
      iconbarra: ''
    },
  },
  mutations: mutations,
  actions: actions
}
);