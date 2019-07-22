<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar color="indigo lighten-1" class="white--text">
                    <h4>Catálogo Repartidores</h4>
                    <v-spacer></v-spacer>
                    <v-icon color="white">fas fa-plus-circle</v-icon>
                </v-toolbar>
            </v-flex>

            <v-flex xs12 x12 class="mt-3">
                <v-layout wrap>
                    <v-flex xs12 sm12 md7>
                        <v-text-field label="Nombre:" append-icon="person" outline v-model="Nombre"
                            placeholder="Ingresa el Nombre "></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md5>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Teléfono:" class="" type="tel" append-icon="phone" outline
                                    v-model="Telefono" placeholder="(000) 000 - 0000" mask="phone">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 class="mt-2  text-right">
                        <v-btn class="rounded" color="grey darken-1 white--text" @click="dialog = false">Cancel</v-btn>
                        <v-btn class="rounded" color="primary" :disabled="disabledbutton">Guardar</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="mt-3">
                <c_datatable backcolorToolbar="indigo lighten-1" forecolorToolbar="white--text"
                    texttoolbar="Repartidores Existentes" v-if="gridRepartidores.length > 0" :headers="headersRepartidores"
                    :list="gridRepartidores">
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
        name: "catalogorepartidores",
        components: {
            c_datatable
        },
        data() {
            return {
                Nombre: '',
                Telefono: '',
                headersRepartidores: [{
                        text: "Id",
                        type: 'text',
                        value: "Id",
                        align:'left',
                        resize: true
                    }, {
                        text: "Nombre",
                        type: 'text',
                        value: "Nombre",
                          align:'left',
                        resize: true
                    },
                    {
                        text: "Telefono",
                        type: 'text',
                        value: "Telefono",
                          align:'left',
                        resize: true
                    }
                ]
            }
        },
        computed: {
            ...mapState({
                gridRepartidores: 'gridRepartidores',
            }),
            disabledbutton() {
                return !(String(this.Nombre).length > 0);
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