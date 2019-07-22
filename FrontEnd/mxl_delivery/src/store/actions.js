import Vue from 'vue';
import router from '@/router'
//
// http://10.25.26.3/SorteosServices/auth/token
//'http://localhost/SorteosServices/api/Vincolab'
//
var url = 'http://localhost/';
export default {
    /********************* API **************************** */

    loginuser({       
        commit    
    },values) {
        try {
            var esto = this;
            router.push('/mxlimenu');       
        } catch (e) {
            commit('set_dialog', {
                is: 'error',
                titulobarra: 'Error',
                mensaje: e.message,
                show: true,
            });
        }
    },
    action_iniciarSesion({
        commit
    }) {
        try {
            var esto = this;

            Vue.http.get('http://192.168.8.100/mxldelivery/menus/opciones.json').then(({body}) =>{
                commit('MENU_SET',body);                
            })

        } catch (e) {
            commit('set_dialog', {
                is: 'error',
                titulobarra: 'Error',
                mensaje: e.message,
                show: true,
            });
        }
    }
};