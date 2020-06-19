<template>
<v-main>
    
     <v-container>
     <v-row v-resize="onResize" class="d-flex">
    
     <v-col class="my-10 justify-center"  cols="12">
         <v-card>
             <v-card-title>Registro</v-card-title>
             <v-card-text>
         
             <v-text-field type="email" v-model="usuario.email" label="Email"></v-text-field>
             <v-text-field type="text" v-model="usuario.usuario" label="Usuario"></v-text-field>
             <v-text-field type="password" v-model="usuario.password" label="Password"></v-text-field>
             <v-btn  color="primary" block @click="registrar()">Registrar</v-btn>
         
         </v-card-text>
         <p>Si ya tiene una cuenta ingrese 
             <router-link :to="{name:'Login'}">
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
export default {
    data(){
        return{
       usuario: {
           email:'',
           usuario:'',
           password:''
       },
       height:0,
        }
    },
     mounted(){
     this.height = window.innerHeight
    },
    methods:{
      async  registrar(){
          if(this.usuario.email == null || this.usuario.email == ''){
              alert('Debe Escribir un usuario')
          }
          const usuario = await axios.post('/registro',this.usuario)
          router.push({name:'Login'})
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