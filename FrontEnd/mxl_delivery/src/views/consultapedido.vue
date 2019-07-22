<template>
    <v-layout row wrap class="grey lighten-4">
        <v-flex xs12>
            <v-toolbar color="primary" class="white--text">
                <h4>Nuevo Pedido</h4>
                <v-spacer></v-spacer>
                <v-icon color="white">fas fa-shipping-fast</v-icon>
            </v-toolbar>
            <listasaldos v-if="pedidos.length > 0" :headers="headers" :list="pedidos">
            </listasaldos>
        </v-flex>
    </v-layout>

</template>

<script>
    import {
        mapState
    } from 'vuex';

      import listasaldos from '@/components/c_datatable.vue';

    export default {
        name: "consultapedido",
        components: {    
            listasaldos  
        },
        data() {
            return {
                headers:[{                  
                        text: "Folio",
                        type:'text',                        
                        value: "Folio",
                          resize: true
                    },                   
                    {
                        text: "Telefono",
                        type:'text',
                        value: "Telefono",
                        resize: true
                    },
                    {
                        text: "Cliente",
                        type:'text',
                        value: "Cliente",
                        resize: true
                    },
                     {
                        text: "ACobrar",
                        type:'text',
                        value: "ACobrar",
                        resize: true
                    },
                     {
                        text: "Hora",
                        type:'text',
                        value: "Hora",
                        resize: true
                    },
                     {
                        text: "Espera",
                        type:'text',
                        value: "Espera",
                        resize: true
                    },
                     {
                        text: "Estatus",
                        type:'text',
                        value: "Estatus",
                        resize: true
                    },
                    {
                        text: "Repartidor",
                        type:'text',
                        value: "Repartidor",
                        resize: true
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                pedidos: 'pedidos'
            }),
        },
        methods: {

        },
        created(){
            var esto =this;
        }
    }
</script>

<style>

</style>