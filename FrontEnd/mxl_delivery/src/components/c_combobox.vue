<template>
    <v-menu transition="scale-transition" offset-y class="mb-2">
        <template v-slot:activator="{ on }">
            <h6 class="text-left">{{titulo}}</h6>
            <v-btn :color="color" dark v-on="on" class="w-100 rounded">
                {{seleccionado}}
                <v-spacer></v-spacer>
                <v-icon>fas fa-sort-down</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i" @click="select(item)">
                <v-list-tile-title class="text-uppercase">{{ item[text] }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>
<script>

  import {
        mapState
    } from 'vuex';

    export default {
        name: "mxlimenu",
        components: {},
        data() {
            return {
                seleccionado:"Selecciona una opción."
            }
        },
        props:["items","text","value","color","titulo"],
        methods:{
          
             select(item){
                   var esto = this;
                this.seleccionado = item[esto.text];
            }
        },
        mounted(){
            var est = this;
        }
    };
</script>
<style scoped>
</style>