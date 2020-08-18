<template>
<div class="fondo">
 <NavBarRol :imagen="imagen">
     <template v-slot:titulo>
     Administrador
     </template>
 </NavBarRol>
 <v-container style="height:150px"></v-container>
 <v-row>
     <v-col cols="8">
         <div style="height:150px">Yordanys</div>
     </v-col>
     <v-col cols="4">
         </v-col>
 </v-row>
 <NavigationDrawer/>
</div>
   
</template>


<script>
import NavBarRol from '../components/Layout/NavBarRol'
import NavigationDrawer from '../components/Layout/NaviagationDrawer'
import {mapState,mapActions} from 'vuex'
import NavBarImage from '../assets/doctor01.jpg'

export default {
    
   data(){
       return{
         imagen: NavBarImage
       }
   },

    components:{
        NavBarRol,
        NavigationDrawer
    },
    methods:{

    }
}
</script>