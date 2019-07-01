<template>
    <div class="text center centlog">
        <div class="row">
            <div class="col-12">
                <img class="mb-4 imglogin" src="../assets/img/logo.png" alt="">
                <h2 class="h3 mb-3 font-weight-normal">Bienvenido!!</h2>
                <form class="form-signin" @submit.prevent="loginuser">
                    <v-text-field outline label="Usuario" placeholder="Ingresa tu nombre de Usuario"
                        append-icon="person" v-model="usuario" :rules="rules" required></v-text-field>

                    <v-text-field outline label="Contraseáa" placeholder="Ingresa tu Contraseña"
                         :append-icon="showpass ? 'visibility' : 'visibility_off'" v-model="contrasena" :rules="rules" required   :type="showpass ? 'text' : 'password'"  @click:append="showpass = !showpass"></v-text-field>

                    <v-checkbox v-model="recordar" label="Recordar la proxima vez" color="indigo"
                        class="indigo--text text--darken-2" value=false hide-details></v-checkbox>

                    <v-btn color="indigo" class="white--text w-100" type="submit"> Iniciar Sesión </v-btn>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "login",
        components: {},
        data() {
            return {
                showpass:false,
                usuario: '',
                contrasena: '',
                recordar: false,
                show: false,
                rules: [
                    v => !!v || 'Dato requerido',
                ],
            }
        },
        computed: {

        },
        methods: {
            loginuser() {
                this.$store.dispatch('loginuser', {
                    usuario: this.usuario,
                    password: this.contrasena
                })
            }
        }
    };
</script>

<style scoped>
    @import url('../assets/css/media.css');

    .centlog {
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 140px;
        padding-bottom: 40px;

    }



    .form-signin {
        width: 100%;
        max-width: 530px;
        padding: 15px;
        margin: auto;
    }
</style>