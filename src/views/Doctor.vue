<template>
<div>
      <h1>Doctores</h1>

      <UsuarioChat/>

     <v-btn @click="salir()">Salir</v-btn>
</div>
  
</template>

<script>
import router from '../router'
import UsuarioChat from '../components/UsuariosChat'
import {mapState,mapActions} from 'vuex'

export default {
    
    data(){
        return{

        }
    },

    components:{
     UsuarioChat
    },

    methods:{
         ...mapActions('Chat',['desconectar']),
        salir(){
        this.desconectar()
        localStorage.removeItem('username')
        localStorage.removeItem('rol')
        router.push({name:'Home'})
        }
    },
   
}
</script>