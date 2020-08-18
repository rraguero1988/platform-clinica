<template>
<v-main id="container">
 <NavBar @drawer="drawer = $event"/>
  
    <div class="servicios text-center" >
      <h1 class="pt-2">Nuestros Servicios</h1>
    </div>
      <v-navigation-drawer 
      app
      v-model="drawer"
      color="primary"
      temporary
      dark
      
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
        <h1 class="text-center mb-5">Plataforma KFE</h1>
        <v-divider class="mb-4"></v-divider>
        <router-link :to="{name:'Login'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>person</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="{name:'Registro'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>person_add</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item>
        </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</v-main>

</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
   NavBar
  },
  data(){
    return{
      drawer:false,
      
    }
  },
  watch:{
scroll(value){
console.log(value)
}
  },
  methods:{
 
    onScroll(){
      const offset = window.pageYOffset
      console.log(offset)
    },
  
  },
    mounted(){
    const container = document.getElementById('container')
           container.scrollTop = container.scrollHeight
    }
  
}
</script>

<style scoped>
 .servicios{
      height: 800px;
      background-color: greenyellow;
      background-repeat: no-repeat;
      background-size: cover;
      height: 625;
    }
  
</style>