<template>
  <v-app id="app" class="container">
     <router-view /> 
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "app"
};
</script>

<style lang="scss">
  @import url('assets/css/global.css');


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
