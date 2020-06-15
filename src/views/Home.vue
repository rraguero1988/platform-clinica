<template>
<div>
  <div class="fondo">
    <v-banner class="banner">
      <v-row >
        <v-col class="mx-6 ">
          <router-link to="/">
         <h1>Plataforma KFE</h1>
         </router-link>
        </v-col>
     <v-spacer></v-spacer>
       <v-col>
       <router-link :to="{name:'Login'}">
         <v-btn text color="primary">Ingresar</v-btn>
       </router-link>
        <router-link :to="{name:'Registro'}">
          <v-btn text color="primary">Registro</v-btn>
       </router-link>
         </v-col>
    
 </v-row>
    </v-banner>
    </div>
    <div class="servicios text-center">
      <h1 class="pt-2">Nuestros Servicios</h1>
    </div>
</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
 
  }
}
</script>

<style scoped>
.fondo{
  height: 628px;
  background-image: url('../assets/fondo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
    .servicios{
      height: 400px;
      background-color: greenyellow;
      background-repeat: no-repeat;
      background-size: cover;
      height: 625;
    }
    .banner{
      position: fixed;
      width: 100%;
    }
  
</style>