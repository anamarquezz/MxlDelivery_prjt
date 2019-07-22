<template>
    <v-container grid-list-md>
        <v-layout row wrap>
        <v-flex xs12>
            <v-toolbar color="indigo lighten-1" class="white--text">
                <h4>Catálogo Colonia</h4>
                <v-spacer></v-spacer>
                <v-icon color="white">fas fa-plus-circle</v-icon>
            </v-toolbar>
        </v-flex>

        <v-flex xs12 x12 class="mt-3" >
            <v-layout  wrap>
            <v-flex xs12 sm12 md6>
                <v-text-field label="Colonia:" append-icon="fas fa-road" outline v-model="Colonia"
                    placeholder="Ingresa la Colonia"></v-text-field>
            </v-flex>
             
            <v-flex xs12 sm12 md6>
                   <v-layout  wrap>                
                <v-flex xs12>
                    <v-combobox :items="ciudad" item-text="Nombre" item-value="id" outline color="indigo" v-model="Ciudad"
                        label="Selecciona el la Ciudad"></v-combobox>
                </v-flex>
                <v-flex xs12>
                    <v-combobox :items="estados" item-text="Nombre" item-value="id" outline color="indigo" v-model="Estado"
                        label="Selecciona el estado"></v-combobox>
                </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 class="mt-2  text-right">
                <v-btn class="rounded" color="grey darken-1 white--text" @click="dialog = false">Cancel</v-btn>
                <v-btn  class="rounded" color="primary" :disabled="disabledbutton">Guardar</v-btn>
            </v-flex>
         </v-layout>
        </v-flex>       

        <v-flex xs12 class="mt-3">           
            <c_datatable backcolorToolbar="indigo lighten-1" forecolorToolbar="white--text" texttoolbar="Colonias Existentes" v-if="gridColonias.length > 0" :headers="headersColonia" :list="gridColonias">
            </c_datatable>
        </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import {
        mapState
    } from 'vuex';

    import c_datatable from '@/components/c_datatable.vue';

    export default {
        name: "catalogoColonia",
        components: {
            c_datatable
        },
        data() {
            return {
                 Colonia:'',
                Estado:'',
                Ciudad:'',
                headersColonia: [{
                        text: "Id",
                        type: 'text',
                        value: "Id",
                        resize: true
                    }, {
                        text: "Estado",
                        type: 'text',
                        value: "Estado",
                        resize: true
                    },
                    {
                        text: "Ciudad",
                        type: 'text',
                        value: "Ciudad",
                        resize: true
                    },
                    {
                        text: "Colonia",
                        type: 'text',
                        value: "Colonia",
                        resize: true
                    }
                ]
            }
        },
        computed: {
            ...mapState({
                gridColonias: 'gridColonias',
                estados: 'estados',
                ciudad: 'ciudad',
                seleccionadoGrid:'seleccionadoGrid',
            }),         
            disabledbutton() {
                return !( String(this.Colonia).length > 0 &&  String(this.Estado).length > 0  && String(this.Ciudad).length > 0);
            }
            
        },
        methods: {

        },
        created() {
            var esto = this;
        }
    }
</script>

<style>

</style>