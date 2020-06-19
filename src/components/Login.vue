<template>
<v-main >
     <v-img  :height="height" src="../assets/doctor01.jpg">
     <v-container>
     <v-row v-resize="onResize" class="d-flex">
     <v-col  cols="12" sm="6" md="8">
         <router-link to="/">
         <h1>Plataforma KFE</h1>
         </router-link>
     </v-col>
     <v-spacer></v-spacer>
     <v-col class="my-10 justify-center"  cols="12" sm="6" md="4">
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
     </v-img>
</v-main>
  
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'
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
          localStorage.setItem('username',usuario.data.local.usuario)
          router.push({name:'Admin'})
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