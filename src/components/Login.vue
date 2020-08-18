<template>
<v-main >
    
     <v-container>
     <v-row v-resize="onResize" class="d-flex">
     <v-col class="my-10 justify-center"  cols="12">
         <v-card class="form">
             <v-card-title>Login</v-card-title>
             <v-card-text>
        
             <v-text-field type="email" v-model="usuario.email" label="Email"></v-text-field>
             <v-text-field type="password" v-model="usuario.password" label="Password"></v-text-field>
             <v-btn color="primary" block @click="ingresar()">Ingresar</v-btn>
             <v-btn color="info" class="my-2" block @click="facebook()">Facebook</v-btn>
         
         </v-card-text>
         <p>Si no tiene una cuenta registro
             <router-link :to="{name:'Registro'}">
                 Aqui
             </router-link>
         </p>
         </v-card>
     </v-col>
    </v-row>
    </v-container>
    
</v-main>
  
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            usuario:{
                email:'',
                password:''
            },
            height:0
        }
    },

    methods:{
      async  ingresar(){
          const usuario = await axios.post('/iniciar',this.usuario)
          if(usuario){
          await localStorage.setItem('username',usuario.data.local.usuario)
          localStorage.setItem('rol',usuario.data.local.rol)
          localStorage.setItem('name',usuario.data.local.nombre)
           localStorage.setItem('apellido',usuario.data.local.apellido)

          if(usuario.data.local.rol === 'administrador'){
             router.push({name:'Admin'})
          }else if(usuario.data.local.rol === 'doctor'){
               router.push({name:'Doctor'})
          }else if(usuario.data.local.rol === 'cliente'){
               router.push({name:'Doctor'})
          }
         
          }
        },
        facebook(){
            axios.get('/auth/facebook')
        },
         onResize () {
        this.height = window.innerHeight
      },
    }
}
</script>

<style scoped>
.fondo{
   height: 625px;
   background-image: url('../assets/doctor01.jpg');
   background-repeat: no-repeat;
   background-size: cover;
}
   p{
       margin-left: 15px;
       padding-bottom: 10px;
       color: magenta;
       
   }
</style>