<template>
    <v-layout v-resize="onResize" column>
         <v-toolbar :color="backcolorToolbar" :class="forecolorToolbar">
                <h4>{{texttoolbar}}</h4>
                <v-spacer></v-spacer>
            </v-toolbar>
        <v-toolbar>
            <v-toolbar-title>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="buscar" single-line hide-details>
            </v-text-field>
        </v-toolbar>
        <v-data-table :headers="headers" :items="list" :search="search" :custom-filter="customFilter"
            v-model="seleccionadoGrid" :pagination.sync="pagination" :rows-per-page-items="pagination.rowsPerPageItems"
            class="elevation-1" :hide-headers="isMobile" :class="{mobile: isMobile}">

            <template slot="items" slot-scope="props">
                <tr v-if="!isMobile">
                    <td v-for="h in headers" :key="h.text">
                        <div v-if="h.type ==='text'" class="text-left">
                            {{props.item[h.value]}}
                        </div>
                        <div v-if="h.type ==='button'">
                            <v-btn color="amber accent-4" class="w-100 font-weight-bold"
                                @click="metodo(h.action,props)">
                                <b>{{h.btntitle}}</b></v-btn>
                        </div>
                    </td>
                <tr v-else>
                    <td>
                        <ul class="flex-content mb-5 ">
                            <li v-for="h in headers" :key="h.text" class=" flex-item mb-3" :data-label="h.text">

                                <b v-if="h.type ==='text' && h.resize">
                                    {{props.item[h.value]}}</b>

                                <v-btn v-if="h.type ==='button'  && h.resize" dark large
                                    :class="conditioncolor(h,props)" class="black--text"
                                    @click="metodo(h.action,props)">
                                    <b v-if="h.has_condition">{{conditiontext(h,props)}}</b>
                                    <b v-else>{{h.btntitle}}</b>
                                </v-btn>
                            </li>
                        </ul>
                    </td>

                </tr>

            </template>

        </v-data-table>
    </v-layout>

</template>
<script>
    import {
        mapState
    } from 'vuex';

    export default {
        name: "c_datatable",
        components: {},
        data() {
            return {
                isMobile: false,
                search: "",
                pagination: {
                    descending: true,
                    page: 1,
                    rowsPerPage: 50,
                    sortBy: 'name',
                    rowsPerPageItems: [50, 100, 200, 300, 500, 1000]
                }
            }
        },
        props: ["headers", "list","backcolorToolbar","forecolorToolbar","texttoolbar"],
        computed: {
            ...mapState({
                seleccionadoGrid: 'seleccionadoGrid',
            }),
            message: {
                get() {
                    return this.$store.state.seleccionadoGrid
                },
                set(value) {
                    this.$store.commit('set_seleccionadoGrid', value)
                }                       
            },
        },
            methods: {
                onResize() {
                    if (window.innerWidth < 769)
                        this.isMobile = true;
                    else
                        this.isMobile = false;
                },
                toggleAll() {
                    if (this.selected.length) this.selected = []
                    else this.selected = this.desserts.slice()
                },
                changeSort(column) {
                    console.log(column);
                    if (this.pagination.sortBy === column) {
                        this.pagination.descending = !this.pagination.descending
                    } else {
                        this.pagination.sortBy = column
                        this.pagination.descending = false
                    }
                },
                customFilter(items, search, filter) {

                    //this custom filter will do a multi-match separated by a space.
                    //e.g

                    if (!search) {
                        return items
                    } //if the search is empty just return all the items

                    function new_filter(val, search) {
                        return val !== null && ['undefined', 'boolean'].indexOf(typeof val) === -1 &&
                            val.toString().toLowerCase().replace(/[^0-9a-zA-Z]+/g, "").indexOf(search) !== -1
                    }

                    let needleAry = search.toString().toLowerCase().split(" ").filter(x => x);
                    //whenever we encounter a space in our search we will filter for both the first and second word (or third word)

                    return items.filter(row => needleAry.every(needle => Object.keys(row).some(key => new_filter(row[
                            key],
                        needle))));
                    //foreach needle in our array cycle through the data (row[key]) in the current row looking for a match.
                // .some will return true and exit the loop if it finds one imt will return false if it doesnt
                    // .every will exit the loop if we dont find a match but will return true if all needles match
                    // .filter the rows on each match


                
            },
            mounted() {

            }
        }
    }
</script>
<style scoped>

    @import url('../assets/css/global.css');
   
</style>