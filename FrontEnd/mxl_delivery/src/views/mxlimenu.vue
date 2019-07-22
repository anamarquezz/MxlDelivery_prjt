<template>
    <div>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <v-list dense>
                <template v-for="item in items">
                    <v-layout v-if="item.heading" :key="item.heading" row align-center>
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
                        :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                        <template v-slot:activator>
                            <v-list-tile active-class="red--text">
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <v-list-tile v-for="(child, i) in item.children" :key="i" @click="cambiodeopcion(child)">
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else :key="item.text" @click="cambiodeopcion(item)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="indigo darken-4" dark app fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">MXLI Delivery</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>person_pin</v-icon>
            </v-btn>

        </v-toolbar>
        <v-content class="marg">
            <!-- OPCIONES VIEWS DEL MENU -->
            <nuevopedido v-if=" opcionmenu == 'Nuevo Pedido'"></nuevopedido>

            <consultapedido v-if=" opcionmenu == 'Pedido'"></consultapedido>

            <catalogoColonia v-if=" opcionmenu == 'Colonia'"></catalogoColonia>

            <catalogoRepartidores v-if=" opcionmenu == 'Repartidores' "></catalogoRepartidores>

            <catalogoRestaurantes v-if=" opcionmenu == 'Restaurantes' "></catalogoRestaurantes>
        </v-content>
        <v-btn fab bottom right color="indigo" dark fixed @click="dialog = !dialog">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="1100px">
            <nuevopedido></nuevopedido>
        </v-dialog>

    </div>

</template>

<script>
    // @ is an alias to /src
    import {
        mapState
    } from 'vuex';
    import {
        version
    } from 'punycode';
    import cmbu from "@/components/c_combobox.vue";
    import nuevopedido from "@/views/nuevopedido.vue";
    import consultapedido from "@/views/consultapedido.vue";
    import catalogoColonia from "@/views/catalogoColonia.vue";
    import catalogoRepartidores from  "@/views/catalogoRepartidores.vue";
    import catalogoRestaurantes from "@/views/catalogoRestaurantes.vue"
    export default {
        name: "mxlimenu",
        components: {
            cmbu,
            nuevopedido,
            consultapedido,
            catalogoColonia,
            catalogoRepartidores,
            catalogoRestaurantes
        },
        data() {
            return {
                dialog: false,
                cliente: 'Selecciona el cliente',
                drawer: null,
                opcionmenu: 'Nuevo Pedido',
                items: [{
                        icon: 'fas fa-shipping-fast',
                        text: 'Pedido'
                    },
                    {
                        icon: 'fas fa-plus-square',
                        text: 'Nuevo Pedido'
                    },
                    {
                        icon: 'fa fa-edit',
                        text: 'Modificar Pedido'
                    },
                    {
                        icon: 'keyboard_arrow_up',
                        'icon-alt': 'keyboard_arrow_down',
                        text: 'Reportes',
                        model: true,
                        children: [{
                                icon: 'fas fa-file-invoice',
                                text: 'Entrega de Estatus'
                            },
                            {
                                icon: 'fas fa-file-invoice',
                                text: 'Por Cliente'
                            },
                            {
                                icon: 'fas fa-file-invoice',
                                text: 'Repartidor'
                            },
                            {
                                icon: 'fas fa-file-invoice',
                                text: 'Todos Los Clientes'
                            }
                        ]
                    },
                    {
                        icon: 'keyboard_arrow_up',
                        'icon-alt': 'keyboard_arrow_down',
                        text: 'Catalogs',
                        model: false,
                        children: [{
                                icon: 'fas fa-tools',
                                text: 'Colonia'
                            },
                            {
                                icon: 'fas fa-tools',
                                text: 'Repartidores'
                            },
                            {
                                icon: 'fas fa-tools',
                                text: 'Restaurantes'
                            }
                        ]
                    }
                ]

            }
        },

        computed: {
            ...mapState({}),
            cantidad_BaseRules() {
                return [
                    v => !!v || 'Salario base es requerido',
                ]
            }
        },
        methods: {
            cambiodeopcion(item) {
                this.opcionmenu= item.text;
            }
        },
        created() {
            var esto = "";

        }
    };
</script>

<style scoped>
    @import url('../assets/css/media.css');
   
</style>