<template>
    <div>
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
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
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <v-list-tile v-for="(child, i) in item.children" :key="i" @click="">
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
                    <v-list-tile v-else :key="item.text" @click="">
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
        <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">MXLI Delivery</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>person_pin</v-icon>
            </v-btn>

        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    VIEWS AQUI VAN
                </v-layout>
            </v-container>
        </v-content>
        <v-btn fab bottom right color="indigo" dark fixed @click="dialog = !dialog">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="py-4 title blue darken-2 white--text">
                    Nuevo Pedido
                    <v-spacer></v-spacer>
                    <v-icon color="white">fas fa-plus-square</v-icon>
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <v-layout align-center>
                                <v-avatar size="10px" class="mr-3">
                                    <v-icon>person</v-icon>
                                </v-avatar>
                                <h5>Datos del cliente</h5>
                            </v-layout>                          
                        </v-flex>
                        <v-flex xs12>
                            <v-menu   transition="scale-transition" offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="indigo" dark v-on="on" class="w-100 rounded">
                                       {{cliente}}
                                       <v-spacer></v-spacer>
                                       <v-icon>fas fa-sort-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-tile v-for="(item, i) in clientesItems" :key="i" @click="setCliente(item)">
                                        <v-list-tile-title class="text-uppercase">{{ item.Nombre }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>

                        </v-flex>
                        <v-flex xs12 md4>
                            <v-text-field class="ml-2" outline type="tel" append-icon="phone" placeholder="(000) 000 - 0000" mask="phone">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md8>
                            <v-text-field outline class="ml-3" append-icon="fas fa-store-alt" placeholder="Company"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md7>                          
                            <v-layout align-center>
                                <v-avatar size="10px" class="mr-3">
                                    <v-icon>fas fa-map-marked-alt</v-icon>
                                </v-avatar>
                                <h5>Dirección</h5>
                            </v-layout>                          
                       
                        </v-flex>
                        <v-flex xs12 md5>
                         <v-layout align-center>
                                <v-avatar size="10px" class="mr-3">
                                    <v-icon>fas fa-cash-register</v-icon>
                                </v-avatar>
                                <h5>Pedido</h5>
                            </v-layout>    
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                    <v-btn flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>

</template>

<script>
    // @ is an alias to /src
    import {
        mapState
    } from 'vuex';

    export default {
        name: "mxlimenu",
        components: {},
        data() {
            return {
                dialog: false,
                cliente: 'Selecciona el cliente',
                drawer: null,
                items: [{
                        icon: 'contacts',
                        text: 'Contacts'
                    },
                    {
                        icon: 'history',
                        text: 'Frequently contacted'
                    },
                    {
                        icon: 'content_copy',
                        text: 'Duplicates'
                    },
                    {
                        icon: 'keyboard_arrow_up',
                        'icon-alt': 'keyboard_arrow_down',
                        text: 'Labels',
                        model: true,
                        children: [{
                            icon: 'add',
                            text: 'Create label'
                        }]
                    },
                    {
                        icon: 'keyboard_arrow_up',
                        'icon-alt': 'keyboard_arrow_down',
                        text: 'More',
                        model: false,
                        children: [{
                                text: 'Import'
                            },
                            {
                                text: 'Export'
                            },
                            {
                                text: 'Print'
                            },
                            {
                                text: 'Undo changes'
                            },
                            {
                                text: 'Other contacts'
                            }
                        ]
                    },
                    {
                        icon: 'settings',
                        text: 'Settings'
                    },
                    {
                        icon: 'chat_bubble',
                        text: 'Send feedback'
                    },
                    {
                        icon: 'help',
                        text: 'Help'
                    },
                    {
                        icon: 'phonelink',
                        text: 'App downloads'
                    },
                    {
                        icon: 'keyboard',
                        text: 'Go to the old version'
                    }
                ]

            }
        },

        computed: {
            ...mapState({
                clientesItems: 'clientesItems',
            }),
        },
        methods: {
            setCliente(item){
                this.cliente = item.Nombre;
            }
        }
    };
</script>

<style scoped>
    @import url('../assets/css/media.css');
</style>