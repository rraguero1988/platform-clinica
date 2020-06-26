<template>
<div>
 <UsuarioChat/>
  <v-btn @click="salir()">Salir</v-btn>
  </div>
 
</template>


<script>
import router from '../router'
import UsuarioChat from '../components/UsuariosChat'
import {mapState,mapActions} from 'vuex'
export default {
    
    components:{
        UsuarioChat
    },
    methods:{
        ...mapActions('Chat',['desconectar','listen']),

        salir(){
        this.desconectar()
        //this.listen()
        localStorage.removeItem('username')
        localStorage.removeItem('rol')
        router.push({name:'Home'})
        }
    }
}
</script>