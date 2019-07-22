<template>
    <v-container grid-list-md>
        <v-layout row wrap class="white">
            <v-flex xs12>
                <v-toolbar color="primary" class="white--text">
                    <h4>Nuevo Pedido</h4>
                    <v-spacer></v-spacer>
                    <v-icon color="white">fas fa-plus-square</v-icon>
                </v-toolbar>
            </v-flex>
            <v-flex xs12 class="m-3 mt-3">
                <v-layout row wrap>
                    <v-flex xs12 align-center justify-space-between>
                        <v-layout align-center>
                            <v-avatar size="10px" class="mr-3">
                                <v-icon>person</v-icon>
                            </v-avatar>
                            <h5>Datos del cliente</h5>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        <cmbu class="" :items="clientesItems" text="Nombre" color="indigo"
                            titulo="Selecciona el Cliente:">
                        </cmbu>
                    </v-flex>
                    <v-flex xs12 class="ml-2">
                        <v-layout wrap>
                            <v-flex xs12 sm5>
                                <v-text-field label="Teléfono:" class="" type="tel" append-icon="phone" outline
                                    placeholder="(000) 000 - 0000" mask="phone">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm7>
                                <v-text-field label="Nombre:" class="" append-icon="fas fa-store-alt" outline
                                    placeholder="Ingresa el Nomber"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex xs12 md12 lg7 class="ml-2">
                        <v-layout align-center class="mb-2">
                            <v-avatar size="10px" class="">
                                <v-icon>fas fa-map-marked-alt</v-icon>
                            </v-avatar>
                            <h5 class="ml-3">Dirección</h5>
                        </v-layout>
                        <v-flex xs12>
                            <v-layout wrap>
                                <v-flex xs12 sm7>
                                    <v-combobox :items="estados" item-text="Nombre" item-value="id" outline
                                        color="indigo" label="Selecciona el estado"></v-combobox>
                                </v-flex>
                                <v-flex xs12 sm5>
                                    <v-combobox :items="ciudad" item-text="Nombre" item-value="id" outline
                                        color="indigo" label="Selecciona el la Ciudad"></v-combobox>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex>
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-combobox :items="colonias" item-text="Nombre" prepend-inner-icon="fas fa-road"
                                        item-value="id" outline color="indigo" label="Selecciona la colonia">
                                    </v-combobox>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex>
                            <v-layout wrap>
                                <v-flex xs12 sm7 class="">
                                    <v-text-field label="Calle :" prepend-inner-icon="fas fa-home" outline
                                        placeholder="Ingresa la Calle"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm5>
                                    <v-text-field label="Número:" prepend-inner-icon="fas fa-sort-numeric-up" outline
                                        type="number" placeholder="Ingresa el Número"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                    </v-flex>
                    <v-flex xs12 md12 lg4 class="ml-2">
                        <v-layout align-center class="mb-2">
                            <v-avatar size="10px" class="mr-3">
                                <v-icon>fas fa-cash-register</v-icon>
                            </v-avatar>
                            <h5>Pedido</h5>
                        </v-layout>

                        <v-layout wrap>
                            <v-flex x12 sm7 lg12>
                                <v-textarea prepend-inner-icon="fas fa-keyboard" outline name="input-7-4"
                                    label="Referencia o Nota">
                                </v-textarea>
                            </v-flex>
                            <v-flex xs12 sm5 lg12>
                                <v-text-field class="mt-lg-4" label="Total a Cobrar:" prepend-inner-icon="monetization_on"
                                    :rules="cantidad_BaseRules" outline type="number" minlength="1" required
                                    placeholder="">
                                </v-text-field>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                    <v-flex class="text-right">
                        <v-btn class="rounded" color="grey darken-1 white--text" @click="dialog = false">Cancel</v-btn>
                        <v-btn class="rounded" color="primary" @click="dialog = false">Guardar</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import {
        version
    } from 'punycode';
    import cmbu from "@/components/c_combobox.vue";


    export default {
        name: "mxlimenu",
        components: {
            cmbu
        },
        data() {
            return {
                
            }
        },

        computed: {
            ...mapState({
                clientesItems: 'clientesItems',
                estados: 'estados',
                ciudad: 'ciudad',
                colonias: 'colonias'
            }),
            cantidad_BaseRules() {
                return [
                    v => !!v || 'Salario base es requerido',
                ]
            }
        },
        methods: {

        },
        created() {
            var esto = "";

        }
    }
</script>