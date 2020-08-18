<template>
  <v-card class="overflow-hidden" >
    <v-app-bar
      fixed
      color="primary"
      dark
      shrink-on-scroll
      :src="imagen"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-2"  
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <slot name="titulo"></slot>
      </v-toolbar-title>

      
     <div class="btns">
       <slot name="botones"></slot>
         <v-btn icon @click="salir()">
        <v-icon>meeting_room</v-icon>
      </v-btn>
     </div>
     
    </v-app-bar>
  </v-card>
</template>

<script>
import {mapState,mapMutations,mapActions } from 'vuex'
import router from '../../router'
export default {
    name: 'NavBarRol',

     computed:{
         ...mapState(['drawer']),
     },

     props: [
       'imagen'
     ],

    methods:{
       ...mapMutations(['setDrawer']),
       ...mapActions('Chat',['desconectar']),
        salir(){
        this.desconectar()
        localStorage.removeItem('username')
        localStorage.removeItem('rol')
        router.push({name:'Home'})
        }
    }
}
</script>


<style scoped>
.btns{
    margin-left: auto;
}
</style>