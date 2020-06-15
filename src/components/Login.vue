<template>
<div class="fondo">
 <v-row>
     <v-col class="mx-6">
         <router-link to="/">
         <h1>Plataforma KFE</h1>
         </router-link>
     </v-col>
     <v-spacer></v-spacer>
     <v-col class="my-10">
         <v-card class="form">
             <v-card-title>Login</v-card-title>
             <v-card-text>
         <v-form @submit.prevent="login()">
             <v-text-field type="email" v-model="usuario.email" label="Email"></v-text-field>
             <v-text-field type="password" v-model="usuario.password" label="Password"></v-text-field>
             <v-btn color="primary" block @click="ingresar()">Ingresar</v-btn>
         </v-form>
         </v-card-text>
         <p>Si no tiene una cuenta registrese 
             <router-link :to="{name:'Registro'}">
                 Aqui
             </router-link>
         </p>
         </v-card>
     </v-col>
    </v-row>
</div>
  
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
            }
        }
    },

    methods:{
      async  ingresar(){
          const usuario = await axios.post('/iniciar',this.usuario)
          if(usuario){
          router.push({name:'Admin'})
          }
        }
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
.form{
    width: 300px;
    margin-right: 50px;
   }
   p{
       margin-left: 15px;
       padding-bottom: 10px;
       color: magenta;
   }
</style>