<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar color="indigo lighten-1" class="white--text">
                    <h4>Catálogo Restaurantes</h4>
                    <v-spacer></v-spacer>
                    <v-icon color="white">fas fa-plus-circle</v-icon>
                </v-toolbar>
            </v-flex>

            <v-flex xs12 x12 class="mt-3">
                <v-flex xs12>
                    <v-layout wrap>

                        <v-flex xs12 sm5>
                            <v-text-field label="Teléfono:" class="" type="tel" append-icon="phone" outline
                                v-model="Telefono" placeholder="(000) 000 - 0000" mask="phone"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm7>
                            <v-text-field label="Nombre:" append-icon="das fa-store-alt" outline v-model="Nombre"
                                placeholder="Ingresa el Nombre del Restaurant"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex x12>
                    <v-layout wrap>
                        <v-flex xs12 sm7>
                            <v-combobox :items="estados" item-text="Nombre" item-value="id" outline color="indigo"
                                v-model="Estado" label="Selecciona el estado"></v-combobox>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <v-combobox :items="ciudad" item-text="Nombre" item-value="id" outline color="indigo"
                                v-model="Ciudad" label="Selecciona el la Ciudad"></v-combobox>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex x12>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-combobox :items="colonias" item-text="Nombre" prepend-inner-icon="fas fa-road"
                                v-model="Colonia" item-value="id" outline color="indigo" label="Selecciona la colonia">
                            </v-combobox>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex>
                    <v-layout wrap>
                        <v-flex xs12 sm7>
                            <v-text-field label="Calle :" prepend-inner-icon="fas fa-home" outline v-model="Calle"
                                placeholder="Ingresa la Calle"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <v-text-field label="Número:" prepend-inner-icon="fas fa-sort-numeric-up" outline
                                v-model="Numero" type="number" placeholder="Ingresa el Número"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-flex>



            </v-flex>

            <v-flex xs12 class="mt-2  text-right">
                <v-btn class="rounded" color="grey darken-1 white--text" @click="dialog = false">Cancel</v-btn>
                <v-btn class="rounded" color="primary" :disabled="disabledbutton">Guardar</v-btn>
            </v-flex>


            <v-flex xs12 class="mt-3">
                <c_datatable backcolorToolbar="indigo lighten-1" forecolorToolbar="white--text"
                    texttoolbar="Restaurantes Existentes" v-if="gridColonias.length > 0" :headers="headersColonia"
                    :list="gridColonias">
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
        name: "catalogoRestaurantes",
        components: {
            c_datatable
        },
        data() {
            return {
                Nombre: '',
                Telefono: '',
                Estado: '',
                Ciudad: '',
                Colonia: '',
                Calle: '',
                Numero: '',
                headersRestaurant: [{
                        text: "Id",
                        type: 'text',
                        value: "Id",
                        resize: true
                    },
                    {
                        text: "Nombre",
                        type: 'text',
                        value: "Nopmbre",
                        resize: true
                    },
                    {
                        text: "Telefono",
                        type: 'text',
                        value: "Telefono",
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
                    },
                    {
                        text: "Calle",
                        type: 'text',
                        value: "Calle",
                        resize: true
                    },
                    {
                        text: "Numero",
                        type: 'text',
                        value: "Numero",
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
                seleccionadoGrid: 'seleccionadoGrid',
            }),
            disabledbutton() {
                return !(String(this.Colonia).length > 0 && String(this.Estado).length > 0 && String(this.Ciudad)
                    .length > 0);
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